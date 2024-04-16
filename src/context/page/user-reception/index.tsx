import { createContext } from '../../create-context';

export type InitState = {
	$userInfo: API_reception[] | null;

	login: {
		_login: Service_status;
		$login: { Data: any; Message: string; Success: boolean } | null;

		labId: string;
		password: string;
	};

	fetchReceptions: {
		_fetchReceptions: Service_status;
		$fetchReceptions: Reception[];

		filter: {
			fromDate: string;
			toDate: string;
			name: string;
		};
	};

	getReception: {
		selectedItem: Reception | null;

		_download: Service_status;
	};
};

export const initState: InitState = {
	$userInfo: null,

	login: {
		_login: 'init',
		$login: null,

		labId: '',
		password: '',
	},

	fetchReceptions: {
		_fetchReceptions: 'init',
		$fetchReceptions: [],

		filter: {
			fromDate: '',
			toDate: '',
			name: '',
		},
	},

	getReception: {
		selectedItem: null,

		_download: 'init',
	},
};

export const { useContext, Provider } = createContext<InitState>(initState);

export * from './actions';
