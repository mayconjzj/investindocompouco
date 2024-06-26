import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        invest: 'url("/images/invest.jpeg")'
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secundary: 'hsl(var(--secundary))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))'
      }
    }
  },
  plugins: []
};
export default config;
