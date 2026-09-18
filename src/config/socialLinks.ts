const officialSocialLinks = {
  line: 'https://line.me/R/ti/p/%40857fmrkz',
  instagram: 'https://www.instagram.com/miyakosobamiyakomiyako/',
  x: 'https://x.com/miyakosoba385',
} as const;

function validExternalUrl(value: string | undefined, fallback: string) {
  const candidate = value?.trim();

  if (!candidate || !/^https:\/\//i.test(candidate)) {
    return fallback;
  }

  return candidate;
}

export const socialLinks = {
  line: validExternalUrl(import.meta.env.VITE_LINE_URL as string | undefined, officialSocialLinks.line),
  instagram: validExternalUrl(import.meta.env.VITE_INSTAGRAM_URL as string | undefined, officialSocialLinks.instagram),
  x: validExternalUrl(import.meta.env.VITE_X_URL as string | undefined, officialSocialLinks.x),
} as const;
