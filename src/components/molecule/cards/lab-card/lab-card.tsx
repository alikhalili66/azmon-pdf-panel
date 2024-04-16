import { Block } from '@attom';

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

	...props
}: LabCardProps) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='rounded-[16px] min-h-[100px] header-shadow p-4'>
				{/*  */}
				{/*  */}
			</div>
		</Block>
	);
};
export default LabCard;
