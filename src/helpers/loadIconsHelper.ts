/**
 * Get full URL for a single asset
 * @param path - Path relative to project root (e.g., "assets/images/me.jpg")
 * @returns Full public URL to the asset
 */
export function getAssetUrl(path: string): string {
  const fullPath = `../${path}`;
  return new URL(fullPath, import.meta.url).href;
}

/**
 * Get multiple assets URLs
 * @param basePath - Base directory relative to project root (e.g., "assets/icons")
 * @param fileNames - Array of filenames (e.g., ["github.svg", "twitter.svg"])
 * @returns Object with filenames as keys and URLs as values
 */
export function getAssetsUrls(
  basePath: string,
  fileNames: string[]
): Record<string, string> {
  return fileNames.reduce((acc, fileName) => {
    acc[fileName] = getAssetUrl(`${basePath}/${fileName}`);
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Get multiple assets URLs with dynamic theme suffix
 * @param basePath - Base directory (e.g., "assets/icons")
 * @param names - Base names without extension/theme (e.g., ["github", "twitter"])
 * @param theme - Current theme (e.g., "light" or "dark")
 * @param ext - File extension (default: "svg")
 * @returns Object with names as keys and URLs as values
 */
export function getThemedAssetsUrls(
  basePath: string,
  names: string[],
  theme: string,
  ext = 'svg'
): Record<string, string> {
  return names.reduce((acc, name) => {
    const fileName = `${name}-${theme}.${ext}`;
    acc[name] = getAssetUrl(`${basePath}/${fileName}`);
    return acc;
  }, {} as Record<string, string>);
}
