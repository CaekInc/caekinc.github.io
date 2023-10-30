/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neonGreen: '#00ff00',
                neonBlue: '#00ffff',
                neonPink: '#ff00ff',
                neonYellow: '#ffff00',
                neonOrange: '#ff9900',
                neonRed: '#ff0000',
                neonPurple: '#9900ff',
                neonWhite: '#ffffff',
                neonBlack: '#000000',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
                default: ['JetBrains Mono', 'monospace'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.neonGreen'),
                        a: {
                            color: theme('colors.neonPink'),
                            '&:hover': {}
                        }
                    }
                }
            })
        },
    },
    plugins: [],
};
