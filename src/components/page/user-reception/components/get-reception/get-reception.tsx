// @ts-nocheck

import { PrimaryButton, PrimaryModal } from '@attom';
import { page_userReception } from '@context';
import { api } from '@services';

export type GetReceptionProps = Props_Block & {};

export const GetReception = ({
	children,
	// box Control
	boxClass,
	boxSize,
	boxSpace,

	...props
}: GetReceptionProps) => {
	const { state, setState, overWrite, initState } = page_userReception.useContext();
	const { getReception } = state;

	const { selectedItem, _download } = getReception;

	const changeSectionScope = (values: Partial<typeof getReception> = {}) =>
		overWrite({ scope: 'getReception', value: { ...values } });

	const onClose = () => {
		overWrite({ value: { getReception: initState.getReception }, scope: '' });
	};

	const downloadPdfHandler = (item: { [key: string]: any }) => {
		api.$downloadPdf_POST(
			{
				onStatus: (status) => changeSectionScope({ _download: status }),
				onOk: (res) => {
					const createLink = async () => {
						const downloadLink = document.createElement('a');
						downloadLink.setAttribute('target', '_blank');
						downloadLink.href = `data:application/pdf;base64, ${res?.data?.pdf?.encoded || ''}`;
						downloadLink.download = 'filename';
						downloadLink.click();
					};

					if (res?.data) createLink();
				},
			},
			{ body: item },
		);
	};

	return (
		<PrimaryModal boxClass={boxClass} boxSpace={boxSpace} boxSize={boxSize} onClose={onClose} {...props}>
			<div className='min-h-[200px] px-4 py-3 dir-ltr ltr'>
				<div className='font-bold text-[20px]'>
					{selectedItem?.FName || ''} {selectedItem?.LName || ''} ({selectedItem?.ReceptionCode ?? ''})
				</div>

				<div className='flex flex-col gap-4 pt-[20px] w-full'>
					{(selectedItem?.Result || []).map((item, i) => {
						return (
							<div key={i} className='w-full border-2 border-text-tertiary min-h-[100px]'>
								<div className='p-2 min-h-[50px] border-b-2 border-text-tertiary flex items-center justify-center text-[18px] font-[500]'>
									{item.Section}
								</div>

								{(item?.Tests || []).map((item2, i2) => (
									<div key={i2} className={i2 > 0 ? 'border-t-[3px] border-t-text-tertiary' : ''}>
										<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
											<span className='min-w-[200px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
												Test
											</span>
											<span className='grow min-h-[50px] flex items-center justify-center text-center'>{item2?.Name || ''}</span>
										</div>
										<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
											<span className='min-w-[200px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
												Method
											</span>
											<span className='grow min-h-[50px] flex items-center justify-center text-center'>
												{item2?.Method || ''}
											</span>
										</div>
										<div className={`min-h-[50px] border-text-tertiary flex text-[16px] border-b`}>
											<span className='min-w-[200px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
												Result
											</span>
											<span className='grow min-h-[50px] flex items-center justify-center text-center'>
												{item2?.Result || ''}
											</span>
										</div>
										<div className={`min-h-[50px] border-text-tertiary flex text-[16px]`}>
											<span className='min-w-[200px] min-h-[50px] flex items-center justify-center text-center font-bold border-r border-text-tertiary'>
												Specimen
											</span>
											<span className='grow min-h-[50px] flex items-center justify-center text-center'>
												{item2?.SampleType || ''}
											</span>
										</div>
									</div>
								))}
							</div>
						);
					})}
				</div>

				<div className='flex items-center justify-center pt-[20px]'>
					<PrimaryButton
						bgColor='bg-tertiary-1'
						elClass='dir-ltr ltr'
						content='دانلود PDF'
						icon='fa fa-download fa-lg px-2'
						onClick={() => downloadPdfHandler(selectedItem)}
						loading={_download === 'loading'}
					/>
				</div>
			</div>
		</PrimaryModal>
	);
};
