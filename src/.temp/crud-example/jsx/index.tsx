import { useRouter } from 'next/router';

import { Block } from '@attom';
import { useDidUnMount, useReducer_page_example } from '@hooks';

import { FetchItems, AddItem, EditItem, GetItem, DeleteItem } from './components';

export const Example = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	const { state, clearState } = useReducer_page_example();
	const { addItem, editItem, getItem, deleteItem } = state;

	const { query } = useRouter();

	const queryId: any = query?.id || '';

	useDidUnMount(clearState);

	// Render Route & Components:
	const addItem_render = query.render === 'addItem' || addItem.show || null;
	const editItem_render = (query.render === 'editItem' && (/^\d{1,}$/.test(queryId) || editItem.selectedItem)) || null;
	const getItem_render = (query.render === 'getItem' && (/^\d{1,}$/.test(queryId) || getItem.selectedItem)) || null;
	const deleteItem_render = (query.render === 'deleteItem' && (/^\d{1,}$/.test(queryId) || deleteItem.selectedItem)) || null;
	const fetchItems_render = true;
	// const fetchItems_render = !addItem_render && !editItem_render && !getItem_render && !deleteItem_render;

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace}>
			{fetchItems_render && <FetchItems />}
			{addItem_render && <AddItem />}
			{editItem_render && <EditItem />}
			{getItem_render && <GetItem />}
			{deleteItem_render && <DeleteItem />}
		</Block>
	);
};

export default Example;
