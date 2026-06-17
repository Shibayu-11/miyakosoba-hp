import { useState } from 'react';
import { Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { stores } from '../data/stores';
import { useT } from '../i18n/LanguageContext';

const MESSAGE_MAX = 1024;

const PREFECTURES = ['大阪府', '京都府', '兵庫県'] as const;

export default function Contact() {
  const { t } = useT();
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />

      <section className="bg-soba-ink text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.contact.label}</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-5">{t.contact.heading}</h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">{t.contact.intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          {/* 電話でのお問い合わせ */}
          <div className="bg-white border border-cream-200 rounded-sm p-6 md:p-8 text-center">
            <h2 className="font-serif text-lg font-bold text-soba-ink mb-3">{t.contact.phoneHeading}</h2>
            <p className="flex items-center justify-center gap-3 font-serif text-3xl md:text-4xl font-black text-soba-ink mb-2">
              <Phone size={28} className="text-soba-red" />
              {t.contact.phoneNumber}
            </p>
            <p className="text-sm text-soba-ink/70">
              【{t.contact.phoneHoursLabel}】{t.contact.phoneHours}
            </p>
          </div>

          {/* 注意事項 */}
          <div className="mt-10">
            <div className="bg-soba-red text-white text-sm font-bold text-center py-2.5 rounded-sm">
              {t.contact.notesHeading}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-soba-ink/80 leading-relaxed list-disc pl-5">
              {t.contact.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          {/* フォーム */}
          <h2 className="font-serif text-xl md:text-2xl font-bold text-soba-ink mt-14 mb-6">{t.contact.formHeading}</h2>

          {submitted ? (
            <div className="bg-white border border-cream-200 rounded-sm p-8 text-center text-soba-ink/80">
              {t.contact.submittedMessage}
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-white border border-cream-200 rounded-sm divide-y divide-cream-200"
            >
              {/* 返信のご希望 */}
              <div className="grid md:grid-cols-12 gap-3 p-5 md:p-6">
                <div className="md:col-span-4 flex items-start gap-2">
                  <span className="bg-soba-red text-white text-[10px] font-bold px-2 py-1 rounded-sm shrink-0">
                    {t.contact.required}
                  </span>
                  <span className="font-bold text-soba-ink text-sm">{t.contact.replyLabel}</span>
                </div>
                <div className="md:col-span-8 flex flex-col gap-2 text-sm text-soba-ink">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="reply" value="no" required />
                    {t.contact.replyNo}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="reply" value="yes" required />
                    {t.contact.replyYes}
                  </label>
                </div>
              </div>

              {/* ご利用店舗 */}
              <div className="grid md:grid-cols-12 gap-3 p-5 md:p-6">
                <div className="md:col-span-4 flex items-start gap-2">
                  <span className="bg-soba-red text-white text-[10px] font-bold px-2 py-1 rounded-sm shrink-0">
                    {t.contact.required}
                  </span>
                  <span className="font-bold text-soba-ink text-sm">{t.contact.storeLabel}</span>
                </div>
                <div className="md:col-span-8">
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-cream-50 border border-cream-200 rounded-sm px-3 py-2.5 text-sm text-soba-ink focus:outline-none focus:border-soba-red transition-colors"
                  >
                    <option value="" disabled>{t.contact.storePlaceholder}</option>
                    {PREFECTURES.map((pref) => (
                      <optgroup key={pref} label={pref}>
                        {stores.filter((s) => s.prefecture === pref).map((s) => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              {/* ご利用日時 */}
              <div className="grid md:grid-cols-12 gap-3 p-5 md:p-6">
                <div className="md:col-span-4 flex items-start gap-2">
                  <span className="bg-soba-red text-white text-[10px] font-bold px-2 py-1 rounded-sm shrink-0">
                    {t.contact.required}
                  </span>
                  <span className="font-bold text-soba-ink text-sm">{t.contact.dateLabel}</span>
                </div>
                <div className="md:col-span-8">
                  <input
                    type="datetime-local"
                    required
                    className="w-full bg-cream-50 border border-cream-200 rounded-sm px-3 py-2.5 text-sm text-soba-ink focus:outline-none focus:border-soba-red transition-colors"
                  />
                </div>
              </div>

              {/* お問い合わせカテゴリ */}
              <div className="grid md:grid-cols-12 gap-3 p-5 md:p-6">
                <div className="md:col-span-4 flex items-start gap-2">
                  <span className="bg-soba-red text-white text-[10px] font-bold px-2 py-1 rounded-sm shrink-0">
                    {t.contact.required}
                  </span>
                  <span className="font-bold text-soba-ink text-sm">{t.contact.categoryLabel}</span>
                </div>
                <div className="md:col-span-8">
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-cream-50 border border-cream-200 rounded-sm px-3 py-2.5 text-sm text-soba-ink focus:outline-none focus:border-soba-red transition-colors"
                  >
                    <option value="" disabled>{t.contact.categoryPlaceholder}</option>
                    {t.contact.categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* お問い合わせ内容 */}
              <div className="grid md:grid-cols-12 gap-3 p-5 md:p-6">
                <div className="md:col-span-4 flex items-start gap-2">
                  <span className="bg-soba-red text-white text-[10px] font-bold px-2 py-1 rounded-sm shrink-0">
                    {t.contact.required}
                  </span>
                  <span className="font-bold text-soba-ink text-sm">{t.contact.messageLabel}</span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xs text-soba-ink/50 mb-1.5">{t.contact.charCount(message.length, MESSAGE_MAX)}</p>
                  <textarea
                    required
                    maxLength={MESSAGE_MAX}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-cream-50 border border-cream-200 rounded-sm px-3 py-2.5 text-sm text-soba-ink focus:outline-none focus:border-soba-red transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="p-6 text-center">
                <button
                  type="submit"
                  className="bg-soba-red hover:bg-soba-red-dark text-white px-12 py-3 font-bold transition-colors"
                >
                  {t.contact.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
