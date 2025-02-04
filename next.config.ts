import MDXfactory from '@next/mdx';

import type { NextConfig } from 'next';

const withMDX = MDXfactory({
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  /* config options here */
};

export default withMDX(nextConfig);
