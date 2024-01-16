/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        container: {
            padding: "1rem",
            center: true,
        },
        extend: {
            lineHeight: {
                tight: "1.2",
            },
            colors: {
                "ma-green": "#626255",
                "ma-black": "#11110E",
                "ma-grey": "#818280",
                "ma-off-white": "#F0EEEF",
                "ma-grey-tint": "#EDECE9",
                "ma-gold-tint": "#BFB9A0",
            },
        },
    },
    plugins: [],
};
