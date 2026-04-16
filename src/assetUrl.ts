/** Resolve ficheiros em `public/` com o `base` do Vite (ex.: GitHub Pages em subpath). */
export function assetUrl(path: string): string {
  const raw = path.trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  const p = raw.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? `${base}${p}` : `${base}/${p}`;
}
