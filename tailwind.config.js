/** @type {import('tailwindcss').Config} */
const {plugins} = require("./postcss.config");
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyberpunk: {
                    neonGreen: '#00ff00',
                    neonBlue: '#00ffff',
                    neonPink: '#ff00ff',
                    neonYellow: '#ffff00',
                    neonOrange: '#ff9900',
                    neonRed: '#ff0000',
                    neonPurple: '#9900ff',
                    neonWhite: '#ffffff',
                    neonBlack: '#222222',
                },
                yellow: '#fcee0a',
                blue: '#0a84ff',
                green: '#0aff0a',
                red: '#fd0130',
            },
            fontFamily: {
                sans: ['JetBrains Mono', 'monospace'],
                serif: ['Merriweather', 'serif'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.cyberpunk.neonGreen'),
                        a: {
                            color: theme('colors.cyberpunk.neonBlue'),
                            '&:hover': {
                                color: theme('colors.cyberpunk.neonPink'),
                            },
                        },
                        h1: {
                            color: theme('colors.cyberpunk.neonYellow'),
                            fontWeight: 'bold',
                        },
                        h2: {
                            color: theme('colors.cyberpunk.neonOrange'),
                            fontWeight: 'bold',
                        },
                        h3: {
                            color: theme('colors.cyberpunk.neonRed'),
                            fontWeight: 'bold',
                        },
                        h4: {
                            color: theme('colors.cyberpunk.neonPurple'),
                            fontWeight: 'bold',
                        },
                        h5: {
                            color: theme('colors.cyberpunk.neonWhite'),
                            fontWeight: 'bold',
                        },
                        h6: {
                            color: theme('colors.cyberpunk.neonBlack'),
                            fontWeight: 'bold',
                        },
                        p: {
                            color: theme('colors.cyberpunk.neonWhite'),
                        },
                        blockquote: {
                            color: theme('colors.cyberpunk.neonPurple'),
                            borderLeftColor: theme('colors.cyberpunk.neonBlue'),
                        },
                        ul: {
                            color: theme('colors.cyberpunk.neonWhite'),
                        },
                        ol: {
                            color: theme('colors.cyberpunk.neonWhite'),
                        },
                        li: {
                            color: theme('colors.cyberpunk.neonWhite'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};