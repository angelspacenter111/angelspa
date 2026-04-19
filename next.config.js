/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	compress: true,
	experimental: {
		optimizeCss: true,
	},
}

module.exports = nextConfig
