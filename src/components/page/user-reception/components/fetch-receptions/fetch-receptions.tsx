import { Block, PrimaryButton } from '@attom';
import { page_userReception } from '@context';
import { useDidMount } from '@hooks';
import { api } from '@services';
import { Dates } from '@utils';

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

	const changeSectionScope = (values: Partial<typeof fetchReceptions> = {}) =>
		overWrite({ scope: 'fetchReceptions', value: { ...values } });

	useDidMount(() => {
		changeSectionScope({ $fetchReceptions: login?.$login?.Data || null });
	});

	const downloadPdfHandler = (item: any) => {
		api.$answer_pdf_create_POST(
			{
				onStatus: (status) => changeSectionScope({ _download: status }),
				onOk: (res) => {
					const file = res?.info?.answer || null;

					const createLink = async () => {
						const downloadLink = document.createElement('a');
						downloadLink.setAttribute('target', '_blank');
						downloadLink.href = `data:${file?.content_type || 'application/pdf'};base64, ${file?.file || ''}`;
						downloadLink.download = file?.filename || 'filename';
						downloadLink.click();
					};

					if (file) createLink();
				},
			},
			{ body: { ...item } },
		);
	};

	//vars
	const birthDate = $fetchReceptions?.BirthDate ? new Date($fetchReceptions?.BirthDate)?.toISOString() : '';
	const nowDate = new Date(Date.now()).toISOString();
	const age = birthDate ? Math.floor((Date.parse(nowDate) - Date.parse(birthDate)) / (365 * 24 * 60 * 60 * 1000)) : '';

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='content-h px-[3%] py-[20px] overflow-y-auto'>
				{/*  */}
				<div className='max-w-[1000px] mx-auto'>
					{/*  */}
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
								onClick={() => downloadPdfHandler($fetchReceptions)}
								loading={_download === 'loading'}
							/>
						</div>
					</div>
					{/*  */}
					<div className='grid grid-cols-12 gap-y-[20px] gap-x-4 pt-[40px]'>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>نام :</span>
							<span className='font-light'>{$fetchReceptions?.FName || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>نام خانوادگی :</span>
							<span className='font-light'>{$fetchReceptions?.LName || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>جنسیت :</span>
							<span className='font-light'>{$fetchReceptions?.Sex || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>سن :</span>
							<span className='font-light'>{age || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>کد ملی :</span>
							<span className='font-light'>{$fetchReceptions?.NationalCode || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>کد پذیرش :</span>
							<span className='font-light'>{$fetchReceptions?.ReceptionCode || ''}</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>تاریخ پذیرش :</span>
							<span className='font-light'>
								{Dates.gregorianToJalaali($fetchReceptions?.ReceptionDate || '')?.standardDate || ''}
							</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>تاریخ جواب :</span>
							<span className='font-light'>
								{Dates.gregorianToJalaali($fetchReceptions?.ResultDate || '')?.standardDate || ''}
							</span>
						</div>
						<div className=' col-span-12 md:col-span-6 lg:col-span-4 flex items-center gap-3'>
							<span className='font-bold'>دکتر :</span>
							<span className='font-light'>{$fetchReceptions?.DoctorName || ''}</span>
						</div>
					</div>

					{/*  */}

					<div className='flex flex-col gap-[20px] pt-[40px] w-full'>
						{($fetchReceptions?.Result || []).map((resultItem, i) => (
							<div key={i} className='flex flex-col gap-[20px] pt-[40px] w-full'>
								{(resultItem?.Tests || []).map((testItem, i2) => (
									<div key={i2} className='w-full'>
										<div className='border-2 border-text-tertiary min-h-[100px] bg-background-tertiary dir-ltr ltr'>
											<div className='p-2 min-h-[50px] border-b-2 border-text-tertiary flex items-center justify-center text-[18px] font-bold'>
												{resultItem.Section}
											</div>

											<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
												<span className='min-w-[150px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
													Test
												</span>
												<span className='p-3 grow min-h-[50px] flex items-center justify-center text-center'>
													{testItem?.Name || ''}
												</span>
											</div>
											{testItem?.Method && (
												<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
													<span className='min-w-[150px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
														Method
													</span>
													<span className='p-3 grow min-h-[50px] flex items-center justify-center text-center'>
														{testItem?.Method || ''}
													</span>
												</div>
											)}
											{testItem?.Result && (
												<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
													<span className='min-w-[150px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
														Result
													</span>
													<span className='p-3 grow min-h-[50px] flex items-center justify-center text-center'>
														{testItem?.Result || ''}
													</span>
												</div>
											)}
											{testItem?.Comment && (
												<div className={`min-h-[50px] border-text-tertiary flex text-[16px]`}>
													<span className='min-w-[150px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
														Comment
													</span>
													<span className='p-3 grow min-h-[50px] flex items-center justify-center text-center'>
														{testItem?.Comment || ''}
													</span>
												</div>
											)}
											{testItem?.Comment2 && (
												<div className={`min-h-[50px] border-text-tertiary flex text-[16px]`}>
													<span className='min-w-[150px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
														Comment2
													</span>
													<span className='p-3 grow min-h-[50px] flex items-center justify-center text-center'>
														{testItem?.Comment2 || ''}
													</span>
												</div>
											)}
										</div>

										{/* <div className='flex items-center justify-center pt-[20px] pb-[30px]'>
											<PrimaryButton
												bgColor='bg-tertiary-1'
												content='دانلود تست'
												icon='fa fa-download fa-lg px-2'
												onClick={() => downloadReception(resultItem, testItem)}
												loading={_download === 'loading'}
											/>
										</div> */}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</Block>
	);
};

export default FetchReceptions;
