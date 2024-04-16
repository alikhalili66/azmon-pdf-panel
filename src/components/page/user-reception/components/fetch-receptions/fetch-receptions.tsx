import { Block, PrimaryButton } from '@attom';
import { page_userReception } from '@context';
import { useDidMount } from '@hooks';

export type FetchReceptionsProps = Props_Block & {};

export const FetchReceptions = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: FetchReceptionsProps) => {
	const { state, overWrite } = page_userReception.useContext();
	const { fetchReceptions, login } = state;
	const { _fetchReceptions, $fetchReceptions, _download } = fetchReceptions;

	const actions = page_userReception.useActions();

	const changeFetchReseptionsScope = (values: Partial<typeof fetchReceptions> = {}) =>
		overWrite({ scope: 'fetchReceptions', value: { ...values } });

	useDidMount(() => {
		changeFetchReseptionsScope({ $fetchReceptions: login?.$login?.Data || null });
	});

	const downloadAllReceptions = () => {};

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='content-h px-[3%] py-[20px] overflow-y-auto'>
				{/*  */}
				<div className='max-w-[1000px] mx-auto'>
					<div className='rounded border border-text-primary bg-background-tertiary min-h-[200px] p-[20px] flex flex-col gap-4'>
						<div className='font-bold  text-[16px] md:text-[18px]'>
							جهت پیگیری و مراجعات دوباره شماره قبض و شماره موبایل خود را یادداشت کنین
						</div>

						<div className='flex items-center gap-3'>
							<span className='font-bold'>کد پذیرش :</span>
							<span className='font-light'>{login?.receptionCode || ''}</span>
						</div>

						<div className='flex items-center gap-3'>
							<span className='font-bold'>موبایل :</span>
							<span className='font-light'>{login?.phone || ''}</span>
						</div>

						<div className='pt-[20px] flex items-center justify-center'>
							<PrimaryButton
								bgColor='bg-tertiary-1'
								content='دانلود تمام تست ها'
								icon='fa fa-download fa-lg px-2'
								onClick={() => downloadAllReceptions()}
								loading={_download === 'loading'}
							/>
						</div>
					</div>
				</div>
			</div>
		</Block>
	);
};

export default FetchReceptions;
