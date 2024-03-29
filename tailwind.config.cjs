module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            spacing: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
            minWidth: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
            maxWidth: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
            minHeight: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
            maxHeight: Object.fromEntries([...Array(2000)].map((_, i) => [i, `${i / 16}rem`])),
            fontSize: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
            lineHeight: Object.fromEntries([...Array(200)].map((_, i) => [i, `${i / 16}rem`])),
            borderRadius: Object.fromEntries([...Array(40)].map((_, i) => [i, `${i / 16}rem`])),
            borderWidth: Object.fromEntries([...Array(40)].map((_, i) => [i, `${i / 16}rem`])),
            letterSpacing: Object.fromEntries([...Array(10)].map((_, i) => [i, `${i / 16}rem`])),
            screens: {
                pc: '1200px',
            },
            colors: {
                background: '#292c31',
                inputBorder: '#3E4145',
                textColor: '#a4a5a7',
                placeholder: '#6f7070',
                options: '#36383d',
                background2: '#212428',
                danger: '#D04848',
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
