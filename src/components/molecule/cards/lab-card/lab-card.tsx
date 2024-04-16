import { Block } from '@attom';

export type LabCardProps = Props_Block & {
	logo?: string;
	name?: string;
	testOnClick?: () => any;
	testsOnClick?: () => any;
	bioOnClick?: () => any;
	address?: string;
	phone?: string;
};

export const LabCard = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	logo,
	name,
	testOnClick,
	testsOnClick,
	bioOnClick,
	address,
	phone,

	...props
}: LabCardProps) => {
	const buttonClass =
		'text-[14px] flex items-center justify-center gap-2 bg-primary-3 hover:bg-primary-2 min-h-[40px] grow rounded-full  max-w-[33%] text-[#fff] cursor-pointer';

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='rounded-[20px] min-h-[300px] header-shadow p-4'>
				<img alt='' className='h-[60px]' src={logo || ''} />
				<div className='text-[20px] pt-3 font-[500]'>{name || ''}</div>

				<div className='flex items-center flex-wrap justify-center pt-[20px] px-4 gap-4'>
					<div className={`${buttonClass}`} onClick={testOnClick}>
						<span>جوابدهی بیمار</span>
						<i className='fa fa-send' />
					</div>
					<div className={`${buttonClass}`} onClick={bioOnClick}>
						<span>توضیحات بیشتر</span>
						<i className='fa fa-send' />
					</div>
					<div className={`${buttonClass}`} onClick={testsOnClick}>
						<span>جوابدهی آزمایشگاه</span>
						<i className='fa fa-send' />
					</div>
				</div>

				<div className='grid grid-cols-12 gap-4 pt-[25px] px-4 text-[14px] text-primary-2'>
					<div className='col-span-12 lg:col-span-8 flex items-start gap-2'>
						<i className='fa fa-map-marker !text-[16px] pt-[2px]' />
						<span>{address || ''}</span>
					</div>
					<div className='col-span-12 lg:col-span-4 flex items-start justify-end gap-2'>
						<span>{phone || ''}</span>
						<i className='fa fa-phone !text-[16px]' />
					</div>
				</div>
			</div>
		</Block>
	);
};
export default LabCard;
