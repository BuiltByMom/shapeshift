'use client';

import {useEffect, useState} from 'react';

import {useCachedPosts} from '@/components/contexts/CachedPosts';

import type {TBlogListResponse, TBlogPost, TPagination} from '@/types/strapi';

/********************************************************************************************
 * Custom hook for fetching blog posts from Strapi
 * Handles loading states, errors, and data fetching
 * @returns {Object} Posts data and state
 * @returns {TBlogPost[]} posts - Array of blog posts
 * @returns {boolean} isLoading - Loading state indicator
 * @returns {Error | null} error - Error object if fetch fails
 ********************************************************************************************/
export function useFetchPosts({
	page = 1,
	pageSize = 12,
	sort = 'asc',
	slug,
	type,
	populateContent = false,
	cachePosts = false,
	skip = false
}: {
	page: number;
	pageSize: number;
	sort: 'asc' | 'desc';
	slug?: string;
	type?: string;
	populateContent?: boolean;
	cachePosts?: boolean;
	skip?: boolean;
}): {
	posts: TBlogPost[];
	pagination: TPagination | undefined;
	isLoading: boolean;
	error: Error | null;
} {
	const [posts, setPosts] = useState<TBlogPost[]>([]);
	const [pagination, setPagination] = useState<TPagination | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const {setCachedResponse, setCachedParams, cachedResponse, cachedParams} = useCachedPosts();

	useEffect(() => {
		if (skip) {
			setIsLoading(false);
			return;
		}

		if (
			cachedResponse.data.length > 0 &&
			cachedParams.page === page &&
			cachedParams.pageSize === pageSize &&
			cachedParams.sort === sort &&
			cachedParams.slug === slug &&
			cachedParams.populateContent === populateContent &&
			cachedParams.type === type
		) {
			setPosts(cachedResponse.data);
			setPagination(cachedResponse.meta.pagination);
			setIsLoading(false);
			return;
		}

		/********************************************************************************************
		 * Fetches blog posts from Strapi API
		 * Includes error handling and state updates
		 ********************************************************************************************/
		async function fetchPosts(): Promise<void> {
			try {
				// Fetch posts with featured image population
				const res = await fetch(
					`${process.env.STRAPI_URL}/api/posts?populate[0]=imageFeatured&fields[0]=slug&fields[1]=summary&fields[2]=title&fields[3]=type&fields[4]=tags&fields[5]=publishedAt&sort[0]=id:${sort}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&pagination[withCount]=true${populateContent ? '&fields[6]=content' : ''}${slug ? `&filters[slug][$eq]=${slug}` : ''}${type ? `&filters[type][$contains]=${type.replace(/ /g, '_')}` : ''}`,
					{
						headers: {
							Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
						}
					}
				);

				if (!res.ok) {
					throw new Error(`Failed to fetch posts: ${res.status}`);
				}

				const data: TBlogListResponse = await res.json();
				setPosts(data.data);
				setPagination(data.meta.pagination);
				console.log('set posts', data.data);
				console.log('set pagination', data.meta.pagination);
				if (cachePosts) {
					setCachedResponse(data);
					setCachedParams({page, pageSize, sort, slug, populateContent, type});
					console.log('set cached', data);
					console.log('set cachedParams', {page, pageSize, sort, slug, populateContent, type});
				}
			} catch (err) {
				setError(err as Error);
				console.error('Error fetching blog posts:', err);
			} finally {
				setIsLoading(false);
			}
		}

		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		cachePosts,
		cachedParams.page,
		cachedParams.pageSize,
		cachedParams.populateContent,
		cachedParams.slug,
		cachedParams.sort,
		cachedParams.type,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		JSON.stringify(cachedResponse.data),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		JSON.stringify(cachedResponse.meta.pagination),
		cachedResponse.meta.pagination.page,
		cachedResponse.meta.pagination.pageCount,
		cachedResponse.meta.pagination.pageSize,
		cachedResponse.meta.pagination.total,
		page,
		pageSize,
		populateContent,
		setCachedParams,
		setCachedResponse,
		skip,
		slug,
		sort,
		type
	]);

	return {posts, isLoading, pagination, error};
}
