import { HTTPService } from '@services';

//______________________  	______________________//
export const $example_POST = async (
	handlerConfig: Service_configHandler,
	data: Service_data & {
		body: { username: string; password: string };
	},
) =>
	await HTTPService.handler(
		async () =>
			await HTTPService.call({
				method: 'POST',
				path: 'example',
				...data,
			}),
		handlerConfig,
	);

//______________________  	______________________//
export const $login_GET = async (
	handlerConfig: Service_configHandler,
	data: Service_data & {
		query: { LabId: string; Password: string; FromDate?: string; ToDate?: string; ReceptionYear?: string };
	},
) =>
	await HTTPService.handler(
		async () =>
			await HTTPService.call({
				method: 'GET',
				defaultUri: 'https://azmoonproxy.niktech.org/server/ReceptionResultLab.aspx',
				path: '',
				...data,
			}),
		handlerConfig,
	);

//______________________  	______________________//
export const $downloadPdf_POST = async (
	handlerConfig: Service_configHandler,
	data: Service_data & {
		body: {};
	},
) =>
	await HTTPService.handler(
		async () =>
			await HTTPService.call({
				method: 'POST',
				defaultUri: 'https://pdfgen.homzhans.com/api/pdf-gen-for-front',
				path: '',
				...data,
			}),
		handlerConfig,
	);
