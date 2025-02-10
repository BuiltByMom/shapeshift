import {headers} from 'next/headers';
import Script from 'next/script';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import {WithFonts} from '@/components/common/WithFonts';

import './globals.css';
import {LayoutClient} from './layout.client';

import type {ReactNode} from 'react';

export async function getSubdomain(): Promise<string | null> {
	const headersList = await headers();
	const host = headersList.get('host');

	if (!host) {
		return null;
	}

	// Remove port number if present
	const hostname = host.split(':')[0];

	// Split hostname into parts
	const parts = hostname.split('.');

	// Check if we have a subdomain
	if (parts.length > 2) {
		// Return first part as subdomain
		return parts[0] === 'www' ? null : parts[0];
	}

	return null;
}

export default async function RootLayout({children}: {children: ReactNode}): Promise<ReactNode> {
	const locale = await getSubdomain();
	const messages = await getMessages();

	return (
		<html>
			<head>
				<Script
					strategy={'beforeInteractive'}
					type={'text/javascript'}
					src={'https://cdn.weglot.com/weglot.min.js'}
					crossOrigin={'anonymous'}
				/>
				<Script
					strategy={'afterInteractive'}
					id={'weglot'}
					crossOrigin={'anonymous'}>
					{"Weglot.initialize({api_key: 'wg_b6fdc2a2e16175fd09ce44998516155b3'});"}
				</Script>
			</head>
			<body className={'relative min-h-screen overflow-x-hidden bg-bg text-white'}>
				<WithFonts>
					<NextIntlClientProvider messages={messages}>
						<LayoutClient lang={locale || 'en'}>{children}</LayoutClient>
					</NextIntlClientProvider>
				</WithFonts>
			</body>
		</html>
	);
}
