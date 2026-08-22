// Next's `basePath` (see next.config.ts) is applied automatically to
// next/link and next/image, but not to plain <a href> references to files
// in `public/` — those need this prefix by hand so links still resolve
// once deployed under theshenron.github.io/Portfolio-web.
export const BASE_PATH = "/Portfolio-web";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
