module.exports = {
	rootDir: '.',
	moduleFileExtensions: [
		'js',
		'json',
		'vue',
		'ts',
		'tsx',
	],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'\\.ts$': 'ts-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,vue,ts,tsx,jsx}',
		'!**/node_modules/**',
		'!<rootDir>/types/*.d.ts',
	],
	cacheDirectory: '<rootDir>/.cache/unit',
};
