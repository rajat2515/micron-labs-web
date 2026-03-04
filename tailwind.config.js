/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    orange: '#E6A032', // Shinto Asia orange
                    red: '#E53935', // Micron red (secondary)
                    green: '#43A047', // Micron green (secondary)
                },
                accent: {
                    yellow: '#FFD700',
                },
                brand: {
                    navy: '#1A3A52', // Dark navy for overlays
                    charcoal: '#1A1A1A', // Footer background
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
                futura: ['Futura Md BT', 'Futura', 'Montserrat', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 10px 30px rgba(0,0,0,0.1)',
                'card-hover': '0 15px 40px rgba(0,0,0,0.15)',
            }
        },
    },
    plugins: [],
}
