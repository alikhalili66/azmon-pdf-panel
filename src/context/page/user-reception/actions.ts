import { api } from '@services';
import { useContext } from '.';

export const useActions = () => {
	const { state, setState, initState, overWrite } = useContext();

	//--------------------* Start Actions *--------------------//

	const login = async (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { login } = state;
		const { receptionCode, phone } = login;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'login', value: { _login: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			overWrite({ scope: 'login', value: { $login: res || null } });
		};

		const onFail = async (res: any) => {
			if (onFailCB) onFailCB();

			overWrite({ scope: 'login', value: { $login: res || null } });
		};

		api.$userLogin_GET(
			{ onOk, onFail, onStatus, showFailMessage: false },
			{
				query: {
					ReceptionCode: receptionCode,
					Phone: phone,
				},
			},
		);
	};

	const fetchReceptions = async (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { login, fetchReceptions } = state;
		const { receptionCode, phone } = login;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'fetchReceptions', value: { _fetchReceptions: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			overWrite({ scope: 'fetchReceptions', value: { $fetchReceptions: res?.Data || [] } });
		};

		const onFail = async (res: any) => {
			overWrite({ scope: 'fetchReceptions', value: { $fetchReceptions: [] } });
			if (onFailCB) onFailCB();
		};

		api.$userLogin_GET(
			{ onOk, onFail, onStatus, showOkMessage: true },
			{
				query: {
					ReceptionCode: receptionCode,
					Phone: phone,
				},
			},
		);
	};

	const downloadPdf = async (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { login } = state;
		const { receptionCode, phone } = login;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'login', value: { _login: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			const $userInfo = res?.Data ?? null;
			overWrite({ scope: '', value: { $userInfo } });
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();
			overWrite({ scope: '', value: { $userInfo: null } });
		};

		api.$downloadPdf_POST(
			{ onOk, onFail, onStatus },
			{
				body: {
					ReceptionCode: receptionCode,
					Phone: phone,
				},
			},
		);
	};

	//--------------------* End Action  *--------------------//

	return { login, fetchReceptions, downloadPdf };
};
