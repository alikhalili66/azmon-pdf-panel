import { api } from '@services';

import { useContext } from '.';

export const useActions = () => {
	const { state, setState, initState, overWrite } = useContext();

	//--------------------* Start Actions *--------------------//

	const fetchItems = (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { fetchItems } = state;
		const { filter } = fetchItems;
		const { from, size } = filter;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'fetchItems', value: { _fetchItems: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			console.log(res);

			const $fetchItems = res?.info ?? [];
			const total = res?.totalCount ?? 0;

			overWrite({ scope: 'fetchItems', value: { $fetchItems, total } });
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();

			overWrite({ scope: 'fetchItems', value: { $fetchItems: [], total: 0 } });
		};

		// api.$x_x_POST({ onFail, onOk, onStatus }, { body: { from , to: from + size -1  } });
		api.$serviceSimulator_POST(
			{ onOk, onFail, onStatus },
			{ okResponse: true, dataModel: { name: 'x', value: 'y' }, responseType: 'array' },
		);
	};

	const getItem = (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { getItem } = state;
		const { selectedItem } = getItem;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'getItem', value: { _getItem: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();

			const $getItem = res?.info ?? {};

			overWrite({ scope: 'getItem', value: { $getItem } });
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();

			overWrite({ scope: 'getItem', value: { $getItem: null } });
		};

		if (!selectedItem) return;

		// api.$x_x_POST({ onFail, onOk, onStatus }, { body: { from , to: from + size -1  } });
		api.$serviceSimulator_POST(
			{ onOk, onFail, onStatus },
			{ okResponse: true, dataModel: { name1: 'x', name2: 'y' }, responseType: 'object' },
		);
	};

	const addItem = (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { addItem } = state;
		const { form } = addItem;
		const {} = form;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'addItem', value: { _addItem: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();
			fetchItems();
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();
		};

		// api.$x_x({ onFail, onOk, onStatus, showOkMessage: true }, { body: {} });
		api.$serviceSimulator_POST({ onOk, onFail, onStatus }, { okResponse: true, dataModel: {}, responseType: 'object' });
	};

	const editItem = (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { editItem } = state;
		const { form, selectedItem } = editItem;
		const {} = form;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'editItem', value: { _editItem: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();
			fetchItems();
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();
		};

		if (!selectedItem) return;

		// api.$x_x({ onFail, onOk, onStatus, showOkMessage: true }, { body: {} });
		api.$serviceSimulator_POST({ onOk, onFail, onStatus }, { okResponse: true, dataModel: {}, responseType: 'object' });
	};

	const deleteItem = (parameters?: Action_callbacks & {}) => {
		const [onOkCB, onFailCB, onStatusCB] = [
			parameters?.okCB ?? null,
			parameters?.failCB ?? null,
			parameters?.statusChangeCB ?? null,
		];

		const { deleteItem } = state;
		const { selectedItem } = deleteItem;

		const onStatus = async (status: Service_status) => {
			if (typeof onStatusCB === 'function') onStatusCB(status);
			overWrite({ scope: 'deleteItem', value: { _deleteItem: status } });
		};

		const onOk = async (res: any) => {
			if (onOkCB) onOkCB();
			fetchItems();
		};

		const onFail = async (res: {}) => {
			if (onFailCB) onFailCB();
		};

		if (!selectedItem) return;

		// api.$x_x({ onFail, onOk, onStatus, showOkMessage: true }, { body: {} });
		api.$serviceSimulator_POST({ onOk, onFail, onStatus }, { okResponse: true, dataModel: {}, responseType: 'object' });
	};

	//--------------------* End Action  *--------------------//

	return { fetchItems, getItem, addItem, editItem, deleteItem };
};
