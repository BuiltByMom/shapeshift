import createMiddleware from 'next-intl/middleware';

import {routing} from './i18n/routing';

import type {NextRequest, NextResponse} from 'next/server';

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

// Combine both middleware functions
export default function middleware(request: NextRequest): NextResponse {
	// Add current path header
	const headers = new Headers(request.headers);
	headers.set('x-current-path', request.nextUrl.pathname);

	// Call the next-intl middleware with our modified headers
	const response = intlMiddleware(request);

	// Copy our custom header to the response
	response.headers.set('x-current-path', request.nextUrl.pathname);

	return response;
}

export const config = {
	// Matcher combining both needs - internationalization and excluding static files
	matcher: [
		// Match all pathnames except static files and APIs
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
		// Match internationalized pathnames
		'/',
		'/(de|en)/:path*'
	]
};
