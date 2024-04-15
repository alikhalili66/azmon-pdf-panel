import { PrimaryButton, PrimaryCard, PrimaryModal, PrimarySkeleton } from '@attom';
import { page_example } from '@context';
import { useRoutes } from '@hooks';

export const GetItem = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	const { state, initState, overWrite } = page_example.useContext();
	const { getItem } = state;
	const { _getItem, selectedItem } = getItem;

	const actions = page_example.useActions();

	const changeSectionScope = (values: Partial<typeof getItem> = {}) => overWrite({ scope: 'getItem', value: { ...values } });

	const router = useRoutes();

	const onClose = () => {
		overWrite({ scope: '', value: { getItem: initState.getItem } });
		router.removeQuery(['render', 'id']);
	};

	const getItemHandler = () => actions.getItem();

	return (
		<PrimaryModal
			onClose={onClose}
			onCloseDisabled={_getItem === 'loading'}
			render={(closeHandler) => (
				<PrimaryCard
					boxClass={boxClass}
					boxSize={boxSize}
					boxSpace={boxSpace}
					elClass='text-center'
					elSpace='py-3 px-5'
					loading={_getItem === 'loading'}
					loadingType={() => (
						<div className='min-h-[100px] flex flex-col gap-8 px-4 py-8'>
							<PrimarySkeleton boxSize='w-[100px] h-[10px]' />
							<PrimarySkeleton boxSize='w-[full] h-[45px]' />
						</div>
					)}
					// onClick={() => changeSectionScope({ _getItem: _getItem === 'loading' ? 'ok' : 'loading' })}
				>
					{/* Header Title */}
					<div className='flex items-center justify-between'>
						<div className='font-bold'>جزئیات</div>
					</div>

					{/*  */}
					<div className='flex items-center flex-wrap gap-1 pt-4'></div>

					<div className='flex items-center justify-end pt-6 gap-4'>
						<PrimaryButton bgColor='bg-cancel' elClass='min-w-[150px]' content='بازگشت' onClick={closeHandler} />
					</div>
				</PrimaryCard>
			)}
		/>
	);
};
