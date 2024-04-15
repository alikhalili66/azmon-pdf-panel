import { PrimaryButton, PrimaryCard, PrimaryModal, PrimarySkeleton, PureForm } from '@attom';
import { page_example } from '@context';
import { useRoutes } from '@hooks';

export const DeleteItem = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	const { state, initState, overWrite } = page_example.useContext();
	const { deleteItem } = state;
	const { _deleteItem, selectedItem } = deleteItem;

	const actions = page_example.useActions();

	const router = useRoutes();

	const onClose = () => {
		overWrite({ scope: '', value: { deleteItem: initState.deleteItem } });
		router.removeQuery(['render', 'id']);
	};

	const changeSectionScope = (values: Partial<typeof deleteItem> = {}) =>
		overWrite({ scope: 'deleteItem', value: { ...values } });

	const deleteItemHandler = () => actions.deleteItem({ okCB: onClose });

	return (
		<PrimaryModal
			onClose={onClose}
			onCloseDisabled={_deleteItem === 'loading'}
			render={(closeHandler) => (
				<PrimaryCard
					boxClass={boxClass}
					boxSize={boxSize}
					boxSpace={boxSpace}
					elClass='text-center'
					elSpace='py-3 px-5'
					loading={_deleteItem === 'loading'}
					loadingType={() => (
						<div className='min-h-[100px] flex flex-col gap-8 px-4 py-8'>
							<PrimarySkeleton boxSize='w-[100px] h-[10px]' />
							<PrimarySkeleton boxSize='w-[full] h-[45px]' />
						</div>
					)}
					// onClick={() => changeSectionScope({ _editItem: _editItem === 'loading' ? 'ok' : 'loading' })}
				>
					{/* Header Title */}
					<div className='flex items-center justify-between'>
						<div className='font-bold'>حذف</div>
					</div>
					{/*  */}
					<PureForm boxSpace=''>
						<div className='flex items-center flex-wrap gap-1 pt-4'>
							<span>حذف</span>
							<span className='text-primary-1'>{`" ${selectedItem?.name || '-'} "`}</span>
						</div>

						<div className='flex items-center justify-end pt-6 gap-4'>
							<PrimaryButton bgColor='bg-cancel' elClass='min-w-[150px]' content='بازگشت' onClick={closeHandler} />
							<PrimaryButton elClass='min-w-[150px]' content='حذف' onClick={deleteItemHandler} />
						</div>
					</PureForm>
				</PrimaryCard>
			)}
		/>
	);
};
