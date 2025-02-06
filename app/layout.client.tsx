'use client';

import {notFound, usePathname} from 'next/navigation';

import {Footer} from '@/components/Footer';
import {Header} from '@/components/header/Header';
import {routing} from '@/i18n/routing';

import type {ReactNode} from 'react';

/********************************************************************************************
 * Client layout wrapper component
 * Handles header visibility based on current path
 ********************************************************************************************/
export function LayoutClient({children, params: {locale}}: {children: ReactNode; params: {locale: string}}): ReactNode {
	const pathname = usePathname();

	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	return (
		<div className={'flex flex-col px-4'}>
			{pathname === '/' ? null : <Header />}
			<main>{children}</main>
			<Footer />
		</div>
	);
}
