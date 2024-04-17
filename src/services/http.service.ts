import axios, { AxiosProgressEvent, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { appConfig } from '@services';
import { LocalStorage } from '@utils';

axios.interceptors.response.use(
	(res) => {
		if (res?.data?.resultCode === -3) LocalStorage.logout('/login');
		return res;
	},
	(err) => {
		if (err?.response?.status === 401) LocalStorage.logout('/login');
		return Promise.reject(err);
	},
);

const showLog = () => localStorage.getItem('log-status') === 'show';

const defaultHeader = (method?: string) => ({
	Authorization: localStorage.getItem('token') ? `Bearer ${JSON.parse(localStorage.getItem('token') || '')}` : null,
	'Accept-Language': localStorage.getItem('_language') || null,
	'Content-Type': 'application/json',
});

export class HTTPService {
	static call = async (config: {
		method: Http_method;
		path: string;
		defaultUri?: boolean | string;
		defaultTimeout?: true | number;
		body?: { [key: string]: any };
		query?: { [key: string]: string };
		param?: { [key: string]: string };
		header?: { [key: string]: any };
		onUploadProgress?: (event: AxiosProgressEvent) => any;
	}) => {
		const {
			method = 'GET',
			defaultUri = true,
			defaultTimeout = true,
			path = '',
			body = {},
			query = {},
			param = {},
			header = {},
			onUploadProgress = undefined,
		} = config;

		const headers: {} = { ...defaultHeader(method), ...header };
		const timeout = (typeof defaultTimeout === 'number' && defaultTimeout) || appConfig.timeout;
		const uri = (defaultUri === true && appConfig.apiBaseUrl) || (typeof defaultUri === 'string' && defaultUri) || '';
		const url = HTTPService.generateURL(uri, path, query, param);

		let axiosRequest: any = null;

		if (method === 'POST' || method === 'post')
			axiosRequest = () => axios.post(url, body, { headers, timeout, onUploadProgress });
		if (method === 'PUT' || method === 'put') axiosRequest = () => axios.put(url, body, { headers, timeout, onUploadProgress });
		if (method === 'GET' || method === 'get') axiosRequest = () => axios.get(url, { headers, timeout, onUploadProgress });
		if (method === 'DELETE' || method === 'delete')
			axiosRequest = () => axios.delete(url, { headers, timeout, onUploadProgress });

		const { err, res }: { err: (Error & { response?: AxiosResponse }) | null; res: AxiosResponse | null } = await axiosRequest()
			.then((res) => ({ res, err: null }))
			.catch((err) => ({ res: null, err }));

		const data = res?.data || err?.response?.data || null;
		const errMessage = err?.message || '';
		const resHeaders = res?.headers || {};
		const status = `CODE: ${res?.status || '-'} , TEXT: ${res?.statusText || '-'}`;
		const statusCode = res?.status || '';

		const resultLog = `%c${url} %c${statusCode || errMessage}`;
		const resultPathStyle = `padding:2px; margin: 2px; border-radius:10px; background: ${
			(method === 'GET' && '#950') ||
			(method === 'POST' && '#05a') ||
			(method === 'PUT' && '#59a') ||
			(method === 'DELETE' && '#a00') ||
			'#05a'
		}; color: #fff`;
		const resultStatusStyle = `padding:2px; margin: 2px; border-radius:10px; background: ${err ? '#a00' : '#0a0'}; color: #fff`;

		if (appConfig.isDevelopment || showLog())
			console.log(resultLog, resultPathStyle, resultStatusStyle, {
				REQUEST: {
					url,
					body,
					headers,
					method,
				},
				RESPONSE: {
					data,
					status,
					err: errMessage,
					headers: resHeaders,
				},
			});

		return { data, res, err };
	};

	static handler = async (
		service: any = null,
		{
			// status
			onStatus = null,
			// state
			onOk = null,
			onFail = null,
			// message
			showFailMessage = true,
			failMessage = '' /* default: server Message */,
			showOkMessage = false,
			okMessage = '' /* default: server Message */,
		}: any,
	) => {
		if (!service) return;

		const changeStatus = (status) => {
			if (onStatus) onStatus(status);
		};

		changeStatus('loading');

		let request = await service();
		const [data, res, err] = [request?.data || null, request?.res || null, request?.err || null];

		const isSuccess = data?.Success || data?.status === 'success' || data?.resultCode === 1;

		const okMessageContent = okMessage || data?.Message || data?.resultMessage || 'موفقیت آمیز';
		const failMessageContent = failMessage || data?.Message || data?.resultMessage || 'خطایی رخ داده است';

		if (isSuccess) {
			changeStatus('ok');
			if (showOkMessage && okMessageContent) toast.success(okMessageContent);
			if (onOk) onOk(data);
		} else {
			changeStatus('fail');
			if (showFailMessage && failMessageContent) toast.error(failMessageContent);
			if (onFail) onFail(data);
		}
	};

	static generateURL = (baseUri: string = '', path: string = '', query: any = {}, param: any = {}) => {
		return `${baseUri && baseUri !== '/' ? `${baseUri}/` : '/'}${path}${HTTPService.generateQuery(
			query,
		)}${HTTPService.generatePath(param)}`;
	};

	static generatePath = (param: any = {}) => {
		let result = '';
		Object.keys(param).map((key) => {
			if (param[key]) result += `/${key}`;
		});
		return result;
	};

	static generateQuery = (query: any = {}) => {
		const queryArray: string[] = [];

		Object.keys(query).map((key) => query[key] && queryArray.push(`${key}=${query[key]}`));
		const queryString = queryArray.length > 0 ? `?${queryArray.join('&')}` : '';

		return queryString;
	};

	static checkToastError = () => document.querySelector('.Toastify__toast--error');
}

export default HTTPService;
