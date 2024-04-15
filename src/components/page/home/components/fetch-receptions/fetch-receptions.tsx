import { Block, Col, PrimaryButton, PrimaryCard, PrimaryDatepicker, PrimaryInput, Row } from '@attom';
import { page_home } from '@context';
import { Arrays, Dates, regex } from '@utils';
import { useMemo } from 'react';

export type FetchReceptionsProps = Props_Block & {};

export const FetchReceptions = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: FetchReceptionsProps) => {
	const { state, overWrite } = page_home.useContext();
	const { fetchReceptions, login } = state;
	const { _fetchReceptions, $fetchReceptions, filter } = fetchReceptions;
	const { fromDate, toDate, name } = filter;

	const actions = page_home.useActions();

	const changeFetchReseptionsScope = (values: Partial<typeof fetchReceptions> = {}) =>
		overWrite({ scope: 'fetchReceptions', value: { ...values } });
	const changeFilterScope = (values: Partial<typeof filter> = {}) =>
		overWrite({ scope: 'fetchReceptions.filter', value: { ...values } });

	const fetchReceptionsHandler = () => actions.fetchReceptions();

	const renderGetReception = (item) => overWrite({ value: { selectedItem: item }, scope: 'getReception' });

	const filteredItems = useMemo(() => {
		let items = $fetchReceptions || [];

		if (name)
			items = Arrays.filterByProperties(
				$fetchReceptions,
				{ ReceptionCode: name, FName: name, LName: name },
				{ selectMethod: 'OR' },
			);

		return items;
	}, [name, $fetchReceptions]);

	const labId = ($fetchReceptions || [])?.[0]?.LabId || login.labId || '';
	const labName = ($fetchReceptions || [])?.[0]?.LabName || '';

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='content-h px-[3%] py-[8px] overflow-y-auto'>
				{/*  */}
				<div className='grid grid-cols-12 py-3 gap-3 items-end'>
					<PrimaryDatepicker
						boxSize='col-span-12 md:col-span-4'
						label='از تاریخ'
						value={fromDate}
						isValid={fromDate ? regex.date.test(fromDate) && null : null}
						onChange={(geo) => changeFilterScope({ fromDate: geo })}
						required
						disabled={_fetchReceptions === 'loading'}
					/>
					<PrimaryDatepicker
						boxSize='col-span-12 md:col-span-4'
						label='تا تاریخ'
						value={toDate}
						isValid={toDate ? regex.date.test(toDate) && null : null}
						onChange={(geo) => changeFilterScope({ toDate: geo })}
						required
						disabled={_fetchReceptions === 'loading'}
					/>

					<PrimaryButton
						boxSize='col-span-12 md:col-span-4'
						elClass='min-h-[55px]'
						content='جستجو'
						onClick={fetchReceptionsHandler}
						loading={_fetchReceptions === 'loading'}
						disabled={!regex.date.test(fromDate) || !regex.date.test(toDate)}
					/>

					{/* <div className='font-bold text-[22px]'>جستجو</div> */}
				</div>

				<PrimaryCard elClass='min-h-[300px]' transparent loading={_fetchReceptions === 'loading'}>
					{/*  */}

					<div className='flex items-center flex-wrap gap-6 py-3'>
						{labName && (
							<div className='flex items-center gap-3'>
								<span className='font-bold'>نام مرکز :</span>
								<span className='font-light'>{labName || ''}</span>
							</div>
						)}
						{labId && (
							<div className='flex items-center gap-3'>
								<span className='font-bold'>شماره مرکز :</span>
								<span className='font-light'>{labId || ''}</span>
							</div>
						)}
					</div>

					{$fetchReceptions.length > 0 && (
						<div className='grid grid-cols-12 py-3 gap-3 items-end'>
							<PrimaryInput
								boxSize='col-span-12 md:col-span-4'
								label='جستجو'
								placeholder='نام، شماره قبض'
								value={name}
								onChange={(value) => changeFilterScope({ name: value })}
							/>

							{/* <div className='font-bold text-[22px]'>جستجو</div> */}
						</div>
					)}
					{/*  */}
					<div className='flex flex-col gap-[20px] pt-[20px]'>
						{filteredItems.map((item, i) => {
							const fetchReceptionsIsReady = (item?.Result || []).length > 0;

							return (
								<div key={i} className='bg-background-tertiary rounded-lg shadow min-h-[100px] p-[20px]'>
									<Row cols={12}>
										<Col size={12} smSize={6} mdSize={4} lgSize={3} boxClass='flex items-center gap-3'>
											<span className='font-bold'>نام :</span>
											<span className='font-light'>{item?.FName || ''}</span>
										</Col>
										<Col size={12} smSize={6} mdSize={4} lgSize={3} boxClass='flex items-center gap-3'>
											<span className='font-bold'>نام خانوادگی :</span>
											<span className='font-light'>{item?.LName || ''}</span>
										</Col>
										<Col size={12} smSize={6} mdSize={4} lgSize={3} boxClass='flex items-center gap-3'>
											<span className='font-bold'>پذیرش :</span>
											<span className='font-light'>{item?.ReceptionCode || ''}</span>
										</Col>
										<Col size={12} smSize={6} mdSize={4} lgSize={3} boxClass='flex items-center gap-3'>
											<span className='font-bold'>تاریخ انجام تست :</span>
											<span className='font-light'>
												{Dates.gregorianToJalaali(item?.ReceptionDate || '')?.standardDate || ''}
											</span>
										</Col>
										<Col size={12} smSize={6} mdSize={4} lgSize={3} boxClass='flex items-center gap-3'>
											<span className='font-bold'>تاریخ جواب تست :</span>
											<span className='font-light'>{Dates.gregorianToJalaali(item?.ResultDate || '')?.standardDate || ''}</span>
										</Col>
									</Row>

									<div className='pt-[20px] flex items-center justify-center'>
										{!fetchReceptionsIsReady && (
											<div className='w-[90%] h-[40px] flex items-center justify-center max-w-[300px] rounded border border-text-secondary text-center bg-[#ffa500]'>
												جواب حاضر نیست!
											</div>
										)}

										{fetchReceptionsIsReady && (
											<div
												className='w-[90%] h-[40px] flex items-center justify-center gap-2 max-w-[200px] rounded border border-text-secondary text-center bg-tertiary-1 text-white hover:contrast-125 cursor-pointer'
												onClick={() => renderGetReception(item)}
											>
												<i className='fa fa-eye !text-[20px] pb-[2px]' />
												<span>مشاهده جواب</span>
											</div>
										)}
									</div>
								</div>
							);
						})}

						{filteredItems.length === 0 && _fetchReceptions !== 'init' && _fetchReceptions !== 'loading' && (
							<div className='min-h-[100px] rounded border border-text-tertiary flex items-center justify-center bg-background-secondary text-[18px] opacity-80'>
								پذیرشی یافت نشد
							</div>
						)}
					</div>
				</PrimaryCard>
			</div>
		</Block>
	);
};

export default FetchReceptions;
