import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e0f2fe', // light blue background
          DEFAULT: '#0284c7', // main blue
          dark: '#0369a1', // dark blue for hover
          accent: '#ef4444', // red for urgent CTAs like appointments
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-outfit)'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
        'glow': '0 0 20px rgba(2, 132, 199, 0.4)',
        'premium': '0 20px 40px -15px rgba(2, 132, 199, 0.15)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  },
  plugins: [],
};
export default config;
