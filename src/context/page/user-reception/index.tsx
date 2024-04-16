import { createContext } from '../../create-context';

export type InitState = {
	login: {
		_login: Service_status;
		$login: { Data: any; Message: string; Success: boolean } | null;

		receptionCode: string;
		phone: string;
	};

	fetchReceptions: {
		_fetchReceptions: Service_status;
		$fetchReceptions: Reception[];

		_download: Service_status;
	};
};

export const initState: InitState = {
	login: {
		_login: 'init',
		$login: null,

		receptionCode: '',
		phone: '',
	},

	fetchReceptions: {
		_fetchReceptions: 'init',
		$fetchReceptions: [],

		_download: 'init',
	},
};

export const { useContext, Provider } = createContext<InitState>(initState);

export * from './actions';
