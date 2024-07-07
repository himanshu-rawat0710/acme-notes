import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E4F2E5",
          200: "#BADFCC",
          300: "#8ECCB2",
          400: "#63B898",
          500: "#38857E", // Main Primary Color
          600: "#1A5319",
          700: "#153E13",
          800: "#0F2A0E",
          900: "#081609",
        },
        secondary: {
          100: "#F2F9F2",
          200: "#D5ECD5",
          300: "#B8D8B8",
          400: "#9AC39A",
          500: "#7CA77C", // Secondary Color
          600: "#5F8B5F",
          700: "#436F43",
          800: "#265226",
          900: "#0A360A",
        },
        tertiary: {
          100: "#E6F0E6",
          200: "#C0D9C0",
          300: "#9AC19A",
          400: "#749974",
          500: "#508D4E", // Tertiary Color
          600: "#3C693C",
          700: "#294429",
          800: "#152215",
          900: "#080E08",
        },
        neutral: {
          100: "#ffffff",
          200: "#f9fafb",
          300: "#f1f5f9",
          400: "#e2e8f0",
          500: "#cbd5e1",
          600: "#94a3b8",
          700: "#64748b",
          800: "#475569",
          900: "#334155",
        },
        background: {
          100: "#D6EFD8", // Light Cream Background
          200: "#F2F9F2",
          300: "#E4F2E5", // Lighter Cream
          400: "#C8E6C9", // Light Green Background
          500: "#B8D8B8", // Light Green Secondary Background
          600: "#BADFCC", // Light Blue-Green Background
          700: "#E6F0E6", // Very Light Green Background
        },
        error: {
          100: "#ffebee",
          200: "#ffcdd2",
          300: "#ef9a9a",
          400: "#e57373",
          500: "#ef5350", // Red
          600: "#f44336",
          700: "#e53935",
          800: "#d32f2f",
          900: "#c62828",
        },
        warning: {
          100: "#fff8e1",
          200: "#ffecb3",
          300: "#ffe082",
          400: "#ffd54f",
          500: "#ffca28", // Light Yellow
          600: "#ffc107",
          700: "#ffb300",
          800: "#ffa000",
          900: "#ff8f00",
        },
        success: {
          100: "#e8f5e9",
          200: "#c8e6c9",
          300: "#a5d6a7",
          400: "#81c784",
          500: "#66bb6a", // Light Green
          600: "#4caf50",
          700: "#43a047",
          800: "#388e3c",
          900: "#2e7d32",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-100": "linear-gradient(179.9deg, #ffebee -4.69%, rgba(239, 243, 255, 0) 102.23%)",
        "gradient-200": "linear-gradient(164.28deg, #ffecb3 -8.09%, #ffcc80 55.27%, #ffa726 115.22%)",
        "gradient-300": "linear-gradient(0deg, rgba(66, 165, 245, 0.1), rgba(66, 165, 245, 0.1))",
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width', // Added for underline transition
      },
      transform: {
        'scale': 'scale',
      }
    },
  },
  plugins: [],
};

export default config;
