import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { KANSAI_CENTER, type Store } from '../data/stores';
import { useT } from '../i18n/LanguageContext';

type Props = {
  visible: Store[];
  zoom?: number;
};

const storePinIcon = L.divIcon({
  className: '',
  html: '<span style="display:grid;width:30px;height:30px;place-items:center;border:3px solid white;border-radius:50% 50% 50% 0;background:#a4231f;box-shadow:0 3px 10px rgba(26,22,20,.3);transform:rotate(-45deg)"><span style="display:block;width:8px;height:8px;border-radius:9999px;background:white"></span></span>',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -31],
});

function ViewportController({ visible, zoom }: Props) {
  const map = useMap();

  useEffect(() => {
    if (visible.length === 0) {
      map.setView([KANSAI_CENTER.lat, KANSAI_CENTER.lng], zoom ?? 9);
      return;
    }

    if (visible.length === 1) {
      const [{ position }] = visible;
      map.setView([position.lat, position.lng], 15);
      return;
    }

    const bounds = L.latLngBounds(visible.map(({ position }) => [position.lat, position.lng]));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: zoom ?? 11 });
  }, [map, visible, zoom]);

  return null;
}

export default function StoreMap({ visible, zoom = 9 }: Props) {
  const { t } = useT();
  const visiblePrefectures = [...new Set(visible.map((store) => store.prefecture))];
  const mapsQuery = visible.length === 1
    ? `${visible[0].name} ${visible[0].prefecture}${visible[0].address}`
    : visiblePrefectures.length === 1
      ? `都そば ${visiblePrefectures[0]}`
      : '都そば 関西';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream-100 shadow-sm">
      <MapContainer
        center={[KANSAI_CENTER.lat, KANSAI_CENTER.lng]}
        zoom={zoom}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ViewportController visible={visible} zoom={zoom} />
        {visible.map((store) => (
          <Marker
            key={store.id}
            position={[store.position.lat, store.position.lng]}
            icon={storePinIcon}
          >
            <Popup>
              <div className="min-w-44 font-sans">
                <p className="mb-1 font-bold text-soba-ink">{store.name}</p>
                <p className="mb-2 text-xs leading-relaxed text-soba-ink/70">
                  {store.prefecture}{store.address}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name} ${store.prefecture}${store.address}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-soba-red hover:underline"
                >
                  {t.locations.openInMaps}
                  <ExternalLink size={11} />
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute left-3 top-3 z-[500] inline-flex items-center gap-1.5 rounded-sm bg-white px-3 py-2 text-xs font-bold text-[#1a73e8] shadow-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]"
      >
        {t.locations.openInMaps}
        <ExternalLink size={13} />
      </a>
    </div>
  );
}
