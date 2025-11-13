/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./auth.html",
        "./onboarding2.html",
        "./onboarding3.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF5F5F',
                'primary-hover': '#ff4545',
                'bg-main': '#f5f5f5',
                'text-main': '#32323C',
                'text-light': '#5A5A64',
                'bg-light': '#F5F5FF',
                'bg-light-hover': '#e5e5f5',
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'bomber': ['Bomber Balloon', 'sans-serif'],
            },
        },
    },
    plugins: [],
}