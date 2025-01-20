import {createClient} from 'next-sanity';

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: '2024-03-19',
	useCdn: false
});

export async function getPosts(): Promise<any> {
	return client.fetch(
		`*[_type == "post"] | order(publishedAt desc) {
			_id,
			title,
			slug,
			publishedAt,
			"excerpt": array::join(string::split(pt::text(content), "")[0..255], "") + "..."
		}`
	);
}

export async function getPost(slug: string): Promise<any> {
	return client.fetch(
		`*[_type == "post" && slug.current == $slug][0] {
			_id,
			title,
			content,
			publishedAt
		}`,
		{slug}
	);
}

export async function getPage(slug: string): Promise<any> {
	return client.fetch(
		`*[_type == "page" && slug.current == $slug][0] {
			_id,
			title,
			content
		}`,
		{slug}
	);
}
