const baseURI_dev = process.env.API_URI_DEV;
const baseURI_production = process.env.API_URI_PROD;
const isDevMode = process.env.NODE_ENV !== 'production';

export const appConfig = {
	isDevelopment: isDevMode,
	apiBaseUrl: isDevMode ? baseURI_dev : baseURI_production,
	timeout: 60000,
};

export default appConfig;
