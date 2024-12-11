/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#22C55E',
        accent: '#36CFC9',        // Calming Teal
        secondary: '#F7B731',     // Bright Yellow
        success: '#52C41A',       // Green for Success
        warning: '#FA8C16',       // Orange for Warnings
        error: '#FF4D4F',         // Red for Errors
        backgroundLight: '#F9F9F9',
        backgroundDark: '#1C1E26',
        textPrimary: '#333333',   // Dark Gray for readability
        textSecondary: '#777777', // Lighter Gray
      },
    },
  },
  plugins: [],
};
