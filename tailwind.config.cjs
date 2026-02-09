/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./contexts/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#4F46E5',
                secondary: '#10B981',
                accent: '#F59E0B',
                danger: '#EF4444',
                dark: '#1F2937',
                light: '#F3F4F6',
            }
        },
    },
    plugins: [],
}
