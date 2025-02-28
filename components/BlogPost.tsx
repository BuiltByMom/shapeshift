import Image from 'next/image';
import Link from 'next/link';
import {useMemo} from 'react';

import {cl} from './utils/cl';

import type {TBlogPost} from '@/types/strapi';
import type {ReactNode} from 'react';

export function BlogPost({post, className}: {post: TBlogPost; className?: string}): ReactNode {
	const formatDate = useMemo(
		() =>
			(date: string): string => {
				return new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				});
			},
		[]
	);

	return (
		<Link
			href={`/blog/${post.slug}`}
			className={cl(
				'rounded-2xl p-6 transition-all bg-secondBg duration-300 hover:scale-[1.02] hover:bg-secondHoverBg',
				className
			)}>
			<div className={'relative aspect-[2/1] w-full overflow-hidden rounded-2xl'}>
				{post?.featuredImg?.formats.small ? (
					<Image
						src={`${process.env.STRAPI_URL}${post?.featuredImg?.formats.small.url}`}
						alt={post.slug}
						fill
						sizes={'(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
						className={'object-cover'}
					/>
				) : (
					<div className={'size-full rounded-2xl bg-gray-500'} />
				)}
			</div>

			<div className={'mt-6 flex flex-col gap-2'}>
				<div className={'flex items-center'}>
					{post.type?.length > 1 && <p className={'mr-2 text-xs text-blue'}>{post?.type.join(', ')}</p>}
					<p className={'text-xs text-gray-500'}>{formatDate(post.publishedAt)}</p>
				</div>
				<div>
					<p className={'text-2xl text-white'}>{post.title}</p>
				</div>
			</div>
		</Link>
	);
}
