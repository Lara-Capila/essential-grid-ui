import { addDynamicIconSelectors } from '@iconify/tailwind';
import type { Config } from 'tailwindcss';
import { globalTheme } from './src/theme/globalTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    lineHeight: {
      normal: '1.2rem',
      relaxed: '1.6rem',
    },
    fontFamily: {
      sans: ['Inconsolata', 'sans-serif'],
    },
    extend: globalTheme,
  },
  plugins: [
    addDynamicIconSelectors({
      overrideOnly: true,
    }),
  ],
};
export default config;
