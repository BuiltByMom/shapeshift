import {Suspense} from 'react';

import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'ShapeShift Supported Chains',
		description: 'Discover all the chains Shapeshift supports. Buy, sell, and swap crypto with ease.',
		keywords: 'Shapeshift, Supported Chains',
		openGraph: {
			title: 'ShapeShift Supported Chains',
			description: 'Discover all the chains Shapeshift supports. Buy, sell, and swap crypto with ease.',
			type: 'website',
			images: [
				{
					url: `${process.env.STRAPI_URL}/og.png`
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: 'ShapeShift Supported Chains',
			description: 'Discover all the chains Shapeshift supports. Buy, sell, and swap crypto with ease.',
			images: [
				{
					url: `${process.env.STRAPI_URL}/og.png`
				}
			]
		}
	};
}

export default function Layout({children}: {children: ReactNode}): ReactNode {
	return <Suspense>{children}</Suspense>;
}
