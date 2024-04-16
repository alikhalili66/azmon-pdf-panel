import { Block } from '@attom';
import { images } from '@data';

export type LabCardProps = Props_Block & {
	logo?: string;
	name?: string;
	testLink?: string;
	testsLink?: string;
	bioLink?: string;
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
	testLink,
	testsLink,
	bioLink,
	address,
	phone,

	...props
}: LabCardProps) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='rounded-[16px] min-h-[100px] header-shadow p-4'>
				<img alt='' className='h-[60px]' src={logo || images?.labPlaceholder?.src || ''} />
				{/*  */}
				{/*  */}
			</div>
		</Block>
	);
};
export default LabCard;
