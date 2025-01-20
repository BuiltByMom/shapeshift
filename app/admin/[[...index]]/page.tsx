'use client';

import {NextStudio} from 'next-sanity/studio';

import type {ReactNode} from 'react';

import {config} from '@/lib/sanity.config';

export default function AdminPage(): ReactNode {
	return <NextStudio config={config} />;
}
