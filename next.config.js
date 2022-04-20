const withTM = require('next-transpile-modules')(['@macpaw/macpaw-ui', 'react-syntax-highlighter']);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = withTM(nextConfig);
