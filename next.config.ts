import createNextIntlPlugin from 'next-intl/plugin';

import type {NextConfig} from 'next';

const withNextIntl = createNextIntlPlugin('./i18n/requests.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	crossOrigin: 'anonymous',
	/* config options here */
	reactStrictMode: true,
	env: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		STRAPI_URL: process.env.STRAPI_URL ?? '',
		// eslint-disable-next-line @typescript-eslint/naming-convention
		STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN ?? ''
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.ghosticmom.site'
			},
			{
				protocol: 'http',
				hostname: '172.233.242.224'
			}
		]
	},
	async headers() {
		return [
			{
				source: '/',
				headers: [
					{
						key: 'cross-origin-embedder-policy',
						value: 'require-corp'
					}
				]
			}
		];
	},
	async redirects() {
		return [
			{
				// Redirects from old blog posts to new blog posts
				source: '/library/:slug',
				destination: '/resources/blog/:slug',
				permanent: true
			},
			{
				// Redirects from old blog posts to new blog posts
				source: '/category/:slug',
				destination: '/resources/blog/categories/:slug',
				permanent: true
			}
		];
	}
};

export default withNextIntl(nextConfig as NextConfig);
