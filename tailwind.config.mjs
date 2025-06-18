const config = {
  darkMode: "class", // Added custom dark mode setting
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { // Added custom colors
        dark1: "#8F87F1",
        dark2: "#C68EFD",
        dark3: "#E9A5F1",
        dark4: "#FED2E2",
        primary: "#8F87F1",
        secondary: "#C68EFD",
      },
      animation: { // Added custom animations
        pulseSlow: "pulse 4s ease-in-out infinite",
        floatUp: "floatUp 3s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.3s ease-out",
        zoomIn: "zoomIn 0.3s ease-out"
      },
      keyframes: { // Added custom keyframes
        floatUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        pulse: { // Added standard pulse keyframes
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        }
      },
      boxShadow: { // Added custom box shadow
        glow: "0 0 15px 3px rgba(143, 135, 241, 0.7)",
      },
      lineHeight: { // Added custom line height
        tighter: "1.15",
      },
      // Kept default Next.js background images if they exist
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};


export default config;