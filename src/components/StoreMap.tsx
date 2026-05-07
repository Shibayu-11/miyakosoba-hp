import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from '@vis.gl/react-google-maps';
import { KANSAI_CENTER, type Store } from '../data/stores';
import { useT } from '../i18n/LanguageContext';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID as string | undefined;

type Props = {
  visible: Store[];
  zoom?: number;
};

export default function StoreMap({ visible, zoom = 9 }: Props) {
  const { t } = useT();
  const [active, setActive] = useState<Store | null>(null);

  if (!apiKey) {
    return (
      <div className="aspect-[4/3] bg-cream-50 border border-cream-200 rounded-sm flex items-center justify-center text-center p-6">
        <p className="max-w-xs text-sm text-soba-ink/70 leading-relaxed">{t.locations.apiKeyMissing}</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
        <Map
          defaultCenter={KANSAI_CENTER}
          defaultZoom={zoom}
          mapId={mapId ?? 'DEMO_MAP_ID'}
          gestureHandling="greedy"
          clickableIcons={false}
        >
          {visible.map((s) => (
            <AdvancedMarker key={s.id} position={s.position} onClick={() => setActive(s)}>
              <Pin background="#a4231f" borderColor="#822018" glyphColor="#ffffff" />
            </AdvancedMarker>
          ))}

          {active && (
            <InfoWindow
              position={active.position}
              onCloseClick={() => setActive(null)}
              pixelOffset={[0, -36]}
            >
              <div className="min-w-[200px]">
                <h3 className="font-bold text-soba-ink text-sm mb-1.5">{active.name}</h3>
                <p className="text-xs text-soba-ink/80 mb-2 flex items-start gap-1">
                  <MapPin size={12} className="mt-0.5 shrink-0 text-soba-red" />
                  {active.prefecture}{active.address}
                </p>
                {active.status === 'unverified' && (
                  <p className="text-[10px] text-soba-ink/50 mb-2">{t.locations.unverified}</p>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.prefecture + active.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-soba-red hover:underline"
                >
                  {t.locations.openInMaps}
                  <ExternalLink size={11} />
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
