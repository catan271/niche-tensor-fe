// eslint-disable-next-line
const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {
        lessOptions: {},
    },
});
