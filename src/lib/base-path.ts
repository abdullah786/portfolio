/** Prefix a site-local path when the site is built for GitHub Pages. */
export function withBasePath(path: string) {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base || path === base || path.startsWith(`${base}/`)) {
    return path;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
