import {defineField, defineType} from '@sanity/types';

export const page = defineType({
	name: 'page',
	title: 'Pages',
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
			validation: (Rule: any) => Rule.required()
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{type: 'block'}]
		})
	]
});
