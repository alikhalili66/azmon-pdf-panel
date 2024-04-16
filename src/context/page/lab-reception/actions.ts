import { api } from '@services';
import { useContext } from '.';
import { Dates } from '@utils';
import { toast } from 'react-toastify';

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
		const { labId, password } = login;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'login', value: { _login: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			overWrite({ scope: 'login', value: { $login: res || null } });
		};

		const onFail = async (res: any) => {
			if (res?.Message === 'پذیرشی برای مرکز یافت نشده است') return onOk(res);

			toast.error(res?.Message || 'خطایی رخ داده است');

			overWrite({ scope: 'login', value: { $login: res || null } });
			if (onFailCB) onFailCB();
		};

		api.$labLogin_GET(
			{ onOk, onFail, onStatus, showFailMessage: false },
			{
				query: {
					LabId: labId,
					Password: password,
					FromDate: Dates.gregorianToJalaali(new Date(Date.now()))?.standardDate || '',
					ToDate: Dates.gregorianToJalaali(new Date(Date.now()))?.standardDate || '',
					// ReceptionYear: Dates.gregorianToJalaali(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000))?.standardDate || '',
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
		const { labId, password } = login;
		const { filter } = fetchReceptions;
		const { fromDate, toDate } = filter;

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

		api.$labLogin_GET(
			{ onOk, onFail, onStatus, showOkMessage: true },
			{
				query: {
					LabId: labId,
					Password: password,
					FromDate: Dates.gregorianToJalaali(fromDate)?.standardDate || '',
					ToDate: Dates.gregorianToJalaali(toDate)?.standardDate || '',
					// ReceptionYear: Dates.gregorianToJalaali(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000))?.standardDate || '',
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
		const { labId, password } = login;

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
					LabId: labId,
					Password: password,
					ReceptionYear: '1402/04/01',
					ToDate: '1404/05/01',
				},
			},
		);
	};

	//--------------------* End Action  *--------------------//

	return { login, fetchReceptions, downloadPdf };
};
