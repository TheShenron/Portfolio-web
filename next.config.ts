import type { NextConfig } from "next";

// Static export for GitHub Pages (project page at
// theshenron.github.io/Portfolio-web, not a user/org root page), same
// hosting method the old CRA build used via the `gh-pages` npm package.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-web",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
