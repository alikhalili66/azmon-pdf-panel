import { PrimaryButton, PrimaryCard, PrimaryTable } from '@attom';
import { useDidMount, useRoutes } from '@hooks';
import { page_example } from '@context';

export const FetchItems = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	const { state, overWrite } = page_example.useContext();
	const { fetchItems } = state;
	const { $fetchItems, _fetchItems, filter, total } = fetchItems;
	const { from, size } = filter;

	const actions = page_example.useActions();

	const router = useRoutes();

	const renderAdd = () => {
		overWrite({ scope: 'addItem', value: { show: true } });
		router.insertQuery({ render: 'addItem' });
	};

	const renderDelete = (item) => {
		overWrite({ scope: 'deleteItem', value: { selectedItem: item } });
		router.insertQuery({ render: 'deleteItem', id: item?.ID || '' });
	};

	const renderEdit = (item) => {
		overWrite({ scope: 'editItem', value: { selectedItem: item } });
		router.insertQuery({ render: 'editItem', id: item?.ID || '' });
	};

	const renderGet = (item) => {
		overWrite({ scope: 'getItem', value: { selectedItem: item } });
		router.insertQuery({ render: 'getItem', id: item?.ID || '' });
	};

	const fetchItemsHandler = () => {
		actions.fetchItems();
	};

	const changeSectionScope = (values: Partial<typeof fetchItems> = {}) =>
		overWrite({ scope: 'fetchItems', value: { ...values } });

	const changeFilterScope = (values: Partial<typeof filter> = {}) =>
		overWrite({ scope: 'fetchItems.filter', value: { ...values } });

	useDidMount(fetchItemsHandler, [from, size]);

	const filterItemsHandler = from === 1 ? fetchItemsHandler : () => changeFilterScope({ from: 1 });

	return (
		<PrimaryCard
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			elClass='min-h-[400px]'
			transparent
			// onClick={() => changeSectionScope({ _fetchItems: _fetchItems === 'loading' ? 'ok' : 'loading' })}
		>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='font-bold text-main'>لیست</h3>
				<PrimaryButton content='افزودن' inlineBlock onClick={renderAdd} disabled={_fetchItems === 'loading'} />
			</div>

			<PrimaryTable boxSpace='pt-[10px]' loading={_fetchItems === 'loading'}>
				<div>
					<span>name</span>
					<span>value</span>
					<span data-grow='0.5'></span>
				</div>
				<div className='min-h-[500px]'>
					{$fetchItems.map((item, i) => {
						return (
							<div key={i}>
								<span>{item.name || ''}</span>
								<span>{item.value || ''}</span>
								<span data-grow='0.5' className='flex items-center justify-center gap-3'>
									<i className='cursor-pointer fa fa-eye' onClick={() => renderGet(item)} />
									<i className='cursor-pointer fa fa-pencil' onClick={() => renderEdit(item)} />
									<i className='cursor-pointer fa fa-trash' onClick={() => renderDelete(item)} />
								</span>
							</div>
						);
					})}
				</div>
			</PrimaryTable>

			{/* <PrimaryPagination
					boxSize='col-span-12'
					boxSpace='mt-3'
					pageSize={size}
					itemIndex={from}
					total={total || 0}
					onChange={(from) => overWrite({ from }, 'fetchItems.filter')}
				/> */}
		</PrimaryCard>
	);
};
