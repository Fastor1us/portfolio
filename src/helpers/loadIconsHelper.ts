/**
 * Get full URL for a single asset
 * @param path - Path relative to project ./public/assets/ (e.g., "images/me.jpg")
 * @returns Full public URL to the asset
 */
export function getAssetUrl(path: string): string {
  const fullPath = `../../assets/${path}`;
  return new URL(fullPath, import.meta.url).href;
}
