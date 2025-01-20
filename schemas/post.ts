import {defineField, defineType} from '@sanity/types';

export const post = defineType({
	name: 'post',
	title: 'Blog Posts',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title'
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{type: 'block'}]
		})
	]
});
