import 'highlight.js/styles/github-dark.css';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex'; // For math rendering
import remarkEmoji from 'remark-emoji'; // For emoji support
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'; // For math equations

import type {ReactNode} from 'react';

export function BlogContent({content}: {content: string}): ReactNode {
	// Check if content looks like HTML (contains HTML tags)
	const isHtml = /<\/?(?:div|span|p|a|img|h[1-6]|ul|ol|li|table|tr|td|th|br|hr|em|strong)[^>]*>/i.test(content);

	return (
		<div className={'blog-content prose prose-invert max-w-none'}>
			{isHtml ? (
				// eslint-disable-next-line @typescript-eslint/naming-convention
				<div dangerouslySetInnerHTML={{__html: content}} />
			) : (
				<ReactMarkdown
					remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
					rehypePlugins={[rehypeHighlight, rehypeKatex]}
					components={{
						// Headers
						h1: ({...props}) => (
							<h1
								className={'mb-4 mt-8 text-4xl font-bold'}
								{...props}
							/>
						),
						h2: ({...props}) => (
							<h2
								className={'mb-3 mt-6 text-3xl font-bold'}
								{...props}
							/>
						),
						h3: ({...props}) => (
							<h3
								className={'mb-2 mt-4 text-2xl font-bold'}
								{...props}
							/>
						),

						// Code blocks
						code: ({className, children, ...props}) => {
							const match = /language-(\w+)/.exec(className || '');
							return match ? (
								<div className={'relative'}>
									<div className={'absolute right-2 top-2 text-xs text-gray-400'}>{match[1]}</div>
									<pre className={className}>
										<code
											className={className}
											{...props}>
											{children}
										</code>
									</pre>
								</div>
							) : (
								<code
									className={'rounded bg-gray-800 px-1.5 py-0.5'}
									{...props}>
									{children}
								</code>
							);
						},

						// Tables
						table: ({...props}) => (
							<div className={'my-8 overflow-x-auto'}>
								<table
									className={'min-w-full'}
									{...props}
								/>
							</div>
						),
						th: ({...props}) => (
							<th
								className={'bg-gray-800 px-6 py-3 text-left'}
								{...props}
							/>
						),
						td: ({...props}) => (
							<td
								className={'border-t border-gray-700 px-6 py-4'}
								{...props}
							/>
						),

						// Images
						img: ({...props}) => (
							<Image
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								width={1200}
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								height={1200}
								className={'my-8 h-auto max-w-full rounded-lg shadow-lg'}
								loading={'lazy'}
								{...props}
							/>
						),

						// Blockquotes
						blockquote: ({...props}) => (
							<blockquote
								className={'border-blue-500 my-6 border-l-4 pl-4 italic text-gray-300'}
								{...props}
							/>
						),

						// Lists
						ul: ({...props}) => (
							<ul
								className={'my-4 list-inside list-disc'}
								{...props}
							/>
						),
						ol: ({...props}) => (
							<ol
								className={'my-4 list-inside list-decimal'}
								{...props}
							/>
						),

						// Links
						a: ({...props}) => (
							<a
								className={'text-blue underline transition-colors hover:text-blueHover'}
								target={'_blank'}
								rel={'noopener noreferrer'}
								{...props}
							/>
						),
						p: ({...props}) => (
							<p
								className={'mb-4'}
								{...props}
							/>
						)
					}}>
					{content}
				</ReactMarkdown>
			)}

			<style
				jsx
				global>
				{`
					.blog-content {
						/* Base styles */
						font-size: 1.125rem;
						line-height: 1.75;
						color: #e5e7eb;
					}

					/* Code blocks */
					.blog-content pre {
						background-color: #1f2937;
						padding: 1.5rem;
						border-radius: 0.5rem;
						overflow-x: auto;
						margin: 1.5rem 0;
						position: relative;
					}

					/* Footnotes */
					.blog-content .footnotes {
						border-top: 1px solid #374151;
						margin-top: 2rem;
						padding-top: 1rem;
					}

					.blog-content .footnotes ol {
						font-size: 0.875rem;
					}

					/* Definition lists */
					.blog-content dl {
						margin: 1.5rem 0;
					}

					.blog-content dt {
						font-weight: bold;
						margin-top: 1rem;
					}

					.blog-content dd {
						margin-left: 1.5rem;
					}

					/* Custom containers */
					.blog-content .warning {
						background-color: #fef3c7;
						border-left: 4px solid #f59e0b;
						padding: 1rem;
						margin: 1.5rem 0;
						color: #92400e;
					}

					.blog-content p {
						margin-bottom: 16px;
					}

					.blog-content strong {
						margin-top: 20px;
						display: inline-block;
					}
					.blog-content img {
						margin-top: 20px;
						margin-bottom: 20px;
					}

					/* HTML Style */

					.blog-content h1 {
						font-size: 40px;
						line-height: 52px;
					}

					.blog-content p,
					.blog-content {
						font-size: 16px;
						line-height: 28px;
					}

					.blog-content h3,
					.blog-content h4 {
						font-size: 32px;
						line-height: 40px;
					}

					.blog-content h2,
					.blog-content h5,
					.blog-content h6 {
						font-size: 24px;
						line-height: 36px;
					}

					.blog-content strong,
					.blog-content b {
						font-weight: 700;
					}

					.blog-content a {
						color: #386ff9;
						transition: text-decoration 0.2s ease;
					}

					.blog-content a:hover {
						text-decoration: underline;
					}

					/* Figure styles */
					.blog-content figure {
						margin: 2rem auto;
						width: 100%;
						max-width: 800px; /* Adjust this value as needed */
					}

					.blog-content figure div {
						width: 100%;
					}

					.blog-content figure img {
						max-width: 100%;
						height: auto;
						margin: 0 auto;
						display: block;
					}

					/* Video container styles */
					.blog-content figure.w-richtext-figure-type-video {
						position: relative;
						width: 100%;
						max-width: 800px; /* Match figure max-width */
						margin: 2rem auto;
						aspect-ratio: 16/9;
					}

					.blog-content figure.w-richtext-figure-type-video > div {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}

					.blog-content figure.w-richtext-figure-type-video iframe {
						width: 100%;
						height: 100%;
						border: none;
					}

					/* Alignment styles */
					.blog-content .w-richtext-align-fullwidth {
						max-width: 100%;
					}

					.blog-content .w-richtext-align-center {
						margin-left: auto;
						margin-right: auto;
						text-align: center;
					}
				`}
			</style>
		</div>
	);
}
