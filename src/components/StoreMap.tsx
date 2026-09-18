import { ExternalLink } from 'lucide-react';
import type { Store } from '../data/stores';
import { useT } from '../i18n/LanguageContext';

type Props = {
  visible: Store[];
  zoom?: number;
};

export default function StoreMap({ visible }: Props) {
  const { t } = useT();
  const query = visible.length === 1
    ? `${visible[0].name} ${visible[0].prefecture}${visible[0].address}`
    : '都そば';
  const encodedQuery = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  return (
    <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-cream-100 shadow-sm">
      <iframe
        src={embedUrl}
        title={t.locations.headingPage}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-sm bg-white px-3 py-2 text-xs font-bold text-[#1a73e8] shadow-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]"
      >
        {t.locations.openInMaps}
        <ExternalLink size={13} />
      </a>
    </div>
  );
}
