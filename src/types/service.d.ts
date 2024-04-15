declare type Service_configHandler = {
	onStatus?: any;
	onOk?: any;
	onFail?: any;
	showFailMessage?: boolean;
	failMessage?: string;
	showOkMessage?: boolean;
	okMessage?: string;
};

declare type Service_data = {
	defaultUri?: boolean | string;
	defaultTimeout?: true | number;
	body?: { [key: string]: any };
	query?: { [key: string]: string };
	param?: { [key: string]: string };
	header?: { [key: string]: any };
};

declare type Service_defaultHeader = {
	Authorization: string | null;
	'Accept-Language': string | null;
	'Content-Type': string | null;
};

declare type Service_status = 'init' | 'loading' | 'fail' | 'ok';
