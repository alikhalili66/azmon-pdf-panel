/** @type {import('next').NextConfig} */

module.exports = {
	// Next Config
	output: 'export',
	optimizeFonts: false,
	reactStrictMode: false,
	trailingSlash: true,
	// Module Config
	typescript: {
		// ignoreBuildErrors: true, //Dangerus
	},
	eslint: {
		dirs: ['.'],
	},
	// Environment
	env: {
		API_URI_DEV: 'http://185.213.167.156:1133',
		API_URI_PROD: '',
	},
};

// 124
// 1234
