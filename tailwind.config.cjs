const config = {
	darkMode: 'class',

	content: [
		require('path').join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [require('@brainandbones/skeleton/tailwind/theme.cjs')]
};

module.exports = config;
