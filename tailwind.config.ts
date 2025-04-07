import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': 'var(--terminal-bg)',
        'terminal-text': 'var(--terminal-text)',
        'terminal-prompt': 'var(--terminal-prompt)',
        'terminal-success': 'var(--terminal-success)',
        'terminal-error': 'var(--terminal-error)',
        'terminal-warning': 'var(--terminal-warning)',
        'terminal-link': 'var(--terminal-link)',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      animation: {
        'matrix-rain': 'matrix-rain 2s infinite',
        'cursor-blink': 'cursor-blink 1s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
