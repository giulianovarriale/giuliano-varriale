import type { Config } from 'tailwindcss';

export default {
  content: [
    './mdx-components.tsx',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-afacad_flux)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
