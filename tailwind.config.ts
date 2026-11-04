import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#242135', muted: '#777487', violet: '#6d4df4', peach: '#fa956f' },
      boxShadow: {
        card: '0 22px 70px rgba(49,35,104,.09)',
        float: '0 32px 100px rgba(79,50,154,.15)',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
} satisfies Config;
