module.exports = {
	root: true,
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
	},
	env: {
		node: true,
	},
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		indent: ['error', 'tab'],
		'global-require': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'class-methods-use-this': 0,
		'no-param-reassign': 0,
		'no-unused-expressions': 0,
		'import/no-mutable-exports': 0,
		'no-restricted-globals': 0,
		'import/prefer-default-export': 0,
		'no-plusplus': 0,
		'prefer-destructuring': 0,
		'no-underscore-dangle': 0,
		'no-async-promise-executor': 0,
		'standard/no-callback-literal': 0,
		'max-len': ['error', 120],
		'import/no-unresolved': 0,
		'consistent-return': 0,
		'import/no-cycle': 1,
		'no-useless-constructor': 0,
		// 'no-console': process.env.NODE_ENV !== 'production' ? 1 : 2
		'no-console': 1,
	},
};
