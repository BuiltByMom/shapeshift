import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';

import {schema} from './schemaTypes';

export default defineConfig({
	name: 'default',
	title: 'Your Project Name',
	projectId: 'hpkxf8gg',
	dataset: 'production',
	plugins: [deskTool()],
	schema: {
		types: schema.types
	}
});
