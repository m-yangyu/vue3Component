module.exports = {
	rootDir: '.',
	moduleFileExtensions: [
		'js',
		'ts',
	],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'\\.ts$': 'ts-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{vue,ts}',
		'!**/node_modules/**',
		'!**/*/*.d.ts',
	],
	cacheDirectory: '<rootDir>/.cache/unit',
};
