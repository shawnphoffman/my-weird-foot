const withLinaria = require('next-linaria')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3-us-west-2.amazonaws.com',
			},
		],
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		})
		fileLoaderRule.exclude = /\.svg$/i
		return config
	},
}

module.exports = withLinaria(nextConfig)
