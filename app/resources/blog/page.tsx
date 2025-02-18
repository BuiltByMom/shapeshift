'use client';

import {useMemo, useState} from 'react';

import {BlogPost} from '@/components/BlogPost';
import {Banner} from '@/components/common/Banner';
import {TabItem} from '@/components/common/TabItem';
import {blogTabs} from '@/components/constants';
import {usePosts} from '@/components/contexts/BlogContext';

import type {ReactNode} from 'react';

type TPostType =
	| 'all'
	| 'Partner Integrations'
	| 'Ethereum'
	| 'Bitcoin'
	| 'Crypto Pro'
	| 'Thought Leadership'
	| 'Governance Newsletters'
	| 'Newsletter';

export default function BlogList(): ReactNode {
	const {posts} = usePosts();
	const [currentTab, setCurrentTab] = useState('all');

	const filteredPosts = useMemo(() => {
		if (currentTab === 'all') {
			return posts;
		}
		return posts.filter(post => post.type.includes(currentTab as TPostType));
	}, [posts, currentTab]);

	return (
		<main className={'container mx-auto mt-40 px-4 py-8'}>
			<div className={'mb-8 text-7xl'}>
				<span className={'text-white'}>{'ShapeShift'}</span>
				&nbsp;
				<span className={'text-blue'}>{'Blog.'}</span>
			</div>

			<div className={'container mb-6 flex w-max flex-wrap gap-4 rounded-full p-1'}>
				{blogTabs.map(tab => (
					<TabItem
						key={tab.slug}
						title={tab.title}
						selected={currentTab === tab.slug}
						onClick={() => setCurrentTab(tab.slug)}
					/>
				))}
			</div>
			{posts.length === 0 ? (
				<p className={'mb-20 text-gray-400'}>{'No blog posts found.'}</p>
			) : (
				<div className={'mb-20 grid gap-6 lg:grid-cols-3'}>
					{filteredPosts.map(post => (
						<BlogPost
							key={post.slug}
							post={post}
							className={'!bg-stroke'}
						/>
					))}
				</div>
			)}
			<Banner />
		</main>
	);
}
