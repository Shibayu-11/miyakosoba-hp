import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const STORAGE_KEY = 'miyakosoba:scroll-positions';

/**
 * 遷移直後はまだ画像が読み込まれておらず、ページ丈も各要素の位置も確定していない。
 * 一度 scrollTo しただけでは目的の位置からずれるため、落ち着くまでこの時間だけ追従する。
 */
const SETTLE_TIMEOUT_MS = 1000;

/** 位置がこのフレーム数ぶん動かなければ、レイアウトが確定したとみなす。 */
const STABLE_FRAMES = 2;

/** 追従中にこれらが起きたら、ユーザーが自分で操作し始めたとみなして即やめる。 */
const USER_INPUT_EVENTS = ['wheel', 'touchstart', 'keydown'] as const;

function readPositions(): Record<string, number> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    // プライベートモード等で sessionStorage が使えない場合は記録をあきらめる
    return {};
  }
}

function writePosition(key: string, top: number) {
  try {
    const positions = readPositions();
    positions[key] = top;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // 同上
  }
}

/**
 * resolveTop が返す位置まで、レイアウトが確定するまで繰り返しスクロールする。
 * resolveTop が null を返す間（まだ要素が無い等）は待つ。
 */
function keepScrolling(resolveTop: () => number | null) {
  let frame = 0;
  let stopped = false;
  let stable = 0;
  const deadline = performance.now() + SETTLE_TIMEOUT_MS;

  const stop = () => {
    if (stopped) return;
    stopped = true;
    cancelAnimationFrame(frame);
    USER_INPUT_EVENTS.forEach((type) => window.removeEventListener(type, stop));
  };

  USER_INPUT_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true }));

  const step = () => {
    if (stopped) return;

    const top = resolveTop();
    if (top !== null) {
      window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
      stable = Math.abs(window.scrollY - top) <= 1 ? stable + 1 : 0;
    }

    if (stable >= STABLE_FRAMES || performance.now() >= deadline) stop();
    else frame = requestAnimationFrame(step);
  };

  step();
  return stop;
}

/** 見出しがヘッダーに隠れないよう、CSS の scroll-margin-top を差し引いた位置を返す。 */
function anchorTop(id: string): number | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return el.getBoundingClientRect().top + window.scrollY - margin;
}

/**
 * ページ遷移時のスクロール位置を管理する。
 * - URL にアンカーがある: その見出しまでスクロールする
 * - 戻る／進む（POP）: 離れたときの位置に復元する
 * - それ以外（リンクを踏んだ遷移）: 先頭から読ませる
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  // ブラウザ自身の復元と二重に効くと位置が競合するので、こちらに一本化する。
  useEffect(() => {
    if (!('scrollRestoration' in history)) return;
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    return () => {
      history.scrollRestoration = previous;
    };
  }, []);

  // 遷移先での表示位置を決める。
  // 記録用の effect より先に宣言しておくこと。順序が逆だと、記録側が
  // 「まだ前のページの位置が残っている window.scrollY」を初期値に拾ってしまう。
  useEffect(() => {
    // アンカー指定が一番強い。ページを開いた直後は navigationType が POP になるため、
    // 先に判定しないと下の復元処理に取られて見出しまで飛ばなくなる。
    if (hash) {
      const id = hash.slice(1);
      return keepScrolling(() => anchorTop(id));
    }

    if (navigationType === 'POP') {
      const saved = readPositions()[key];
      if (saved !== undefined && saved > 0) return keepScrolling(() => saved);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash, key, navigationType]);

  // このページを離れたときに備えて、スクロール位置を記録し続ける。
  useEffect(() => {
    // 離脱時に window.scrollY を読むと、遷移先が短いページだと値が丸められている。
    // そのため最後に観測した値を自前で持っておく。
    let latest = window.scrollY;
    let frame = 0;

    const record = () => {
      latest = window.scrollY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        writePosition(key, latest);
      });
    };

    window.addEventListener('scroll', record, { passive: true });
    // リンクを押した瞬間の位置を確実に押さえる。scroll イベントだけに頼ると、
    // 直前のスクロールを取りこぼしたときに一つ前の位置へ戻ってしまう。
    window.addEventListener('pointerdown', record, { capture: true, passive: true });
    window.addEventListener('keydown', record, { capture: true, passive: true });

    return () => {
      window.removeEventListener('scroll', record);
      window.removeEventListener('pointerdown', record, { capture: true });
      window.removeEventListener('keydown', record, { capture: true });
      cancelAnimationFrame(frame);
      writePosition(key, latest);
    };
  }, [key]);

  return null;
}
