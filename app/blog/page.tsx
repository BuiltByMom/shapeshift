import Link from 'next/link';
import {getPosts} from 'lib/sanity.client';

import type {ReactNode} from 'react';

export default async function BlogPage(): Promise<ReactNode> {
	const posts = await getPosts();

	return (
		<main className={'p-6'}>
			<h1 className={'mb-6 text-3xl font-bold'}>{'Blog Posts'}</h1>
			<div className={'space-y-6'}>
				{posts.map((post: any) => (
					<article
						key={post._id}
						className={'border-b border-gray-200 pb-6'}>
						<Link href={`/blog/${post.slug.current}`}>
							<h2 className={'mb-2 text-xl font-semibold hover:text-blue-600'}>{post.title}</h2>
						</Link>
						<p className={'text-gray-600'}>{post.excerpt}</p>
						<time className={'mt-2 text-sm text-gray-500'}>
							{new Date(post.publishedAt).toLocaleDateString()}
						</time>
					</article>
				))}
			</div>
		</main>
	);
}
