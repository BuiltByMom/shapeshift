/* eslint-disable @typescript-eslint/naming-convention */
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['public/sw*', 'public/workbox*', 'ipfs/*', '**/node_modules', '**/.next', '**/out', '**/build']
	},
	...fixupConfigRules(
		compat.extends(
			'prettier',
			'eslint:recommended',
			'plugin:tailwindcss/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@next/next/recommended',
			'plugin:react-hooks/recommended'
		)
	),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			react,
			tailwindcss: fixupPluginRules(tailwindcss),
			'unused-imports': unusedImports,
			'simple-import-sort': simpleImportSort,
			import: fixupPluginRules(_import)
		},

		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser
			},

			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},

				tsconfigRootDir: '.',
				project: ['./tsconfig.json']
			}
		},

		settings: {
			react: {
				version: 'detect'
			},

			next: {
				rootDir: 'packages/*/'
			},

			'import/resolver': {
				typescript: {}
			}
		},

		rules: {
			'import/default': 0,
			'react/prop-types': 0,
			'no-async-promise-executor': 0,
			'import/no-unresolved': 0,

			quotes: [
				2,
				'single',
				{
					avoidEscape: true
				}
			],

			'object-curly-spacing': [2, 'never'],
			'array-bracket-spacing': [2, 'never'],
			semi: 'error',

			'no-else-return': [
				'error',
				{
					allowElseIf: false
				}
			],

			'eol-last': ['error', 'always'],
			'import/no-named-as-default-member': 2,
			'tailwindcss/no-custom-classname': 0,

			'array-bracket-newline': [
				'error',
				{
					multiline: true
				}
			],

			'react/jsx-curly-brace-presence': [
				'error',
				{
					props: 'always',
					children: 'always'
				}
			],

			'react/jsx-first-prop-new-line': ['error', 'multiline'],
			'react/jsx-closing-tag-location': 2,
			'unused-imports/no-unused-imports': 'error',

			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],

			'simple-import-sort/imports': 2,
			'simple-import-sort/exports': 2,
			'import/first': 2,
			'import/newline-after-import': 2,
			'import/no-duplicates': 2,
			curly: ['error', 'all'],

			'object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						multiline: true,
						consistent: true
					},

					ObjectPattern: {
						multiline: true,
						consistent: true
					},

					ImportDeclaration: {
						multiline: true,
						consistent: true
					},

					ExportDeclaration: {
						multiline: true,
						minProperties: 3
					}
				}
			],

			'object-property-newline': [
				'error',
				{
					allowAllPropertiesOnSameLine: true
				}
			],

			'prefer-destructuring': [
				'error',
				{
					array: true,
					object: true
				},
				{
					enforceForRenamedProperties: false
				}
			],

			'@typescript-eslint/consistent-type-imports': [
				2,
				{
					prefer: 'type-imports',
					disallowTypeAnnotations: true,
					fixStyle: 'separate-type-imports'
				}
			],

			'@typescript-eslint/no-var-requires': 0,
			'@typescript-eslint/no-unused-vars': 2,
			'@typescript-eslint/no-explicit-any': [1],

			'@typescript-eslint/array-type': [
				'error',
				{
					default: 'array'
				}
			],

			'@typescript-eslint/consistent-type-assertions': 0,
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],

			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowConciseArrowFunctionExpressionsStartingWithVoid: false,
					allowedNames: []
				}
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase']
				},
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase']
				},
				{
					selector: 'variableLike',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					leadingUnderscore: 'allow'
				},
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['PascalCase'],
					prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'will', 'with']
				},
				{
					selector: 'default',
					format: null,

					filter: {
						regex: '^(0-9)$',
						match: false
					}
				},
				{
					selector: 'variableLike',

					filter: {
						regex: '^(set)',
						match: true
					},

					format: ['camelCase'],
					prefix: ['set_']
				},
				{
					selector: 'variableLike',
					format: ['PascalCase'],

					filter: {
						regex: '(Context)$|(ContextApp)$|^Component$',
						match: true
					}
				},
				{
					selector: ['typeParameter', 'typeAlias'],
					format: ['PascalCase'],
					prefix: ['T']
				},
				{
					selector: 'interface',
					format: ['PascalCase'],
					prefix: ['I']
				},
				{
					selector: ['default', 'variableLike', 'parameter'],
					format: null,

					filter: {
						regex: '^(__html|_css)$',
						match: true
					}
				}
			],

			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksConditionals: true,
					checksVoidReturn: false
				}
			],

			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',

			'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
				'error',
				{
					allowComparingNullableBooleansToTrue: false,
					allowComparingNullableBooleansToFalse: false
				}
			],

			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',

			// '@typescript-eslint/type-annotation-spacing': [
			// 	'error',
			// 	{
			// 		before: true,
			// 		after: true,

			// 		overrides: {
			// 			colon: {
			// 				before: false,
			// 				after: true
			// 			}
			// 		}
			// 	}
			// ],

			// '@/brace-style': 'off',
			// '@typescript-eslint/brace-style': ['error', '1tbs'],
			// 'comma-dangle': 'off',
			// '@typescript-eslint/comma-dangle': ['error'],
			'@typescript-eslint/prefer-optional-chain': 'error',
			indent: 'off',
			'@typescript-eslint/indent': 0,

			'no-multi-spaces': [
				'error',
				{
					ignoreEOLComments: false
				}
			],

			'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
			'react/jsx-max-props-per-line': 'off',

			'react-hooks/exhaustive-deps': [
				'warn',
				{
					additionalHooks: '(^useAsyncTrigger$|^useDeepCompareMemo$)'
				}
			]
		}
	},
	{
		files: ['**/*.{ts,tsx}'],

		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						[
							'^react',
							'^next',
							'^(ethers|ethcall)?\\w',
							'^axios',
							'^swr',
							'^tailwindcss',
							'^framer-motion',
							'^nprogress',
							'^@?\\w',
							'^(@yearn-finance/.*)?\\w',
							'^(@common/.*)?\\w',
							'^(@y.*)?\\w'
						],
						['^\\u0000', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./?$', '^\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)'],
						[
							'^node:.*\\u0000$',
							'^(@yearn-finance)?\\w.*\\u0000$',
							'^(@common)?\\w.*\\u0000$',
							'^(@y.*)?\\w.*\\u0000$',
							'^@?\\w.*\\u0000$',
							'^[^.].*\\u0000$',
							'^\\..*\\u0000$'
						],
						['^.+\\.s?css$']
					]
				}
			]
		}
	}
];
