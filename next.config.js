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
		API_URI_DEV: 'http://192.168.2.14:50620',
		API_URI_PROD: 'http://192.168.2.12:50621',
	},
};
