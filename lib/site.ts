const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl && rawSiteUrl.length > 0 ? rawSiteUrl : "https://www.luxurasilks.ca").replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`;
  }

  return `${SITE_URL}${path}`;
}
