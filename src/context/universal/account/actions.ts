import { LocalStorage } from '@utils';

import { useContext } from '.';

export const useActions = () => {
	const { state, setState, initState, overWrite } = useContext();

	//--------------------* Start Actions *--------------------//

	const login = async (parameters?: Action_callbacks & { data: { [key: string]: any } }) => {
		const data = parameters?.data;
		if (!data || typeof data !== 'object') return;

		const updatedAccount = { ...state, ...data, type: data?.type || 'A' };

		LocalStorage.setItem('_account', updatedAccount, 'json');
		overWrite({ scope: '', value: { ...updatedAccount } });

		if (data?.token) {
			LocalStorage.setItem('token', data.token, 'json');
			LocalStorage.setItem('token-expired-time', Date.now() + 1000 * 60 * 60 * 24, 'json');
		}
	};

	const logout = async (parameters?: Action_callbacks & {}) => {
		LocalStorage.logout();

		setState(initState);
	};

	const checkAndSetAccount = async (parameters?: Action_callbacks & { data: { [key: string]: any } }) => {
		const accountLS = LocalStorage.getItem('_account', 'json');
		const tokenLS = LocalStorage.getItem('token', 'json');
		const tokenExpiredTimeLS = LocalStorage.getItem('token-expired-time', 'json');

		const validTokenAndAccount = tokenLS && accountLS && tokenLS === accountLS?.token;
		const validTokenExpiration = validTokenAndAccount
			? tokenExpiredTimeLS && tokenExpiredTimeLS <= Date.now()
				? false
				: true
			: false;

		if (validTokenExpiration) setState({ ...accountLS, type: accountLS?.type || 'A' });
		else logout();
	};
	//--------------------* End Action  *--------------------//

	return { login, logout, checkAndSetAccount };
};
