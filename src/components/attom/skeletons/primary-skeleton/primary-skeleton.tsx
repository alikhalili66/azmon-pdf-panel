import { Block } from '@attom';

export type PrimarySkeletonProps = Props_Block & {
	elClass?: string;
	elSpace?: string;
	bgColor?: string;
	holderColorHex?: string;
	roundedClass?: string;
	shadowClass?: string;
};

type PrimarySkeletonWithTitleProps = Props_Block & {
	titleClass?: string;
	elClass?: string;
	//
	titleSize?: string;
	elSize?: string;
	//
	titleBgColor?: string;
	elBgColor?: string;
	//
	titleRounded?: string;
	elRounded?: string;
};

export const PrimarySkeleton = ({
	children,

	boxClass = '',
	boxSize = 'w-full h-3',
	boxSpace = '',

	elClass = '',
	elSpace = '',

	bgColor = 'bg-cancel-50',
	holderColorHex = '#ccc',

	roundedClass = 'rounded',
	shadowClass = 'shadow',

	...props
}: PrimarySkeletonProps) => {
	const gradient = `linear-gradient(90deg, transparent 0%, transparent 30%, ${holderColorHex} 40%, ${holderColorHex} 60%, transparent 70%, transparent 100%)`;

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={`${bgColor} ${elClass} ${elSpace} ${roundedClass} ${shadowClass} h-full w-full grow overflow-hidden`}>
				<div className={`animate-holder w-full h-full blur-[1px]`} style={{ background: gradient }}>
					{children}
				</div>
			</div>
		</Block>
	);
};

PrimarySkeleton.Input = ({
	// box
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	//
	titleClass = '',
	elClass = '',
	// size
	titleSize = 'w-[100px] h-[5px]',
	elSize = 'w-[100%] h-[50px]',
	//
	titleBgColor,
	elBgColor,
	//
	titleRounded = 'rounded-sm',
	elRounded = 'rounded-lg',

	...props
}: PrimarySkeletonWithTitleProps) => {
	return (
		<Block boxClass={`${boxClass} flex flex-col gap-3`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<PrimarySkeleton boxClass={titleClass} boxSize={titleSize} bgColor={titleBgColor} roundedClass={elRounded} />
			<PrimarySkeleton boxClass={elClass} boxSize={elSize} bgColor={elBgColor} roundedClass={elRounded} />
		</Block>
	);
};

PrimarySkeleton.Select = ({
	// box
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	//
	titleClass = '',
	elClass = '',
	// size
	titleSize = 'w-[100px] h-[5px]',
	elSize = 'w-[100%] h-[50px]',
	//
	titleBgColor,
	elBgColor,
	//
	titleRounded = 'rounded-sm',
	elRounded = 'rounded-lg',

	...props
}: PrimarySkeletonWithTitleProps) => {
	return (
		<Block boxClass={`${boxClass} flex flex-col gap-3`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<PrimarySkeleton boxClass={titleClass} boxSize={titleSize} bgColor={titleBgColor} roundedClass={elRounded} />
			<PrimarySkeleton boxClass={elClass} boxSize={elSize} bgColor={elBgColor} roundedClass={elRounded} />
		</Block>
	);
};

PrimarySkeleton.RadioButton = ({
	// box
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	//
	titleClass = '',
	elClass = '',
	// size
	titleSize = 'w-[100px] h-[5px]',
	elSize = 'w-[15px] h-[15px]',
	//
	titleBgColor,
	elBgColor,
	//
	titleRounded = 'rounded-sm',
	elRounded = 'rounded-full',

	...props
}: PrimarySkeletonWithTitleProps) => {
	return (
		<Block boxClass={`${boxClass} flex items-center gap-3`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<PrimarySkeleton boxClass={elClass} boxSize={elSize} bgColor={elBgColor} roundedClass={elRounded} />
			<PrimarySkeleton boxClass={titleClass} boxSize={titleSize} bgColor={titleBgColor} roundedClass={elRounded} />
		</Block>
	);
};

PrimarySkeleton.CheckBox = ({
	// box
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	//
	titleClass = '',
	elClass = '',
	// size
	titleSize = 'w-[100px] h-[5px]',
	elSize = 'w-[25px] h-[25px]',
	//
	titleBgColor,
	elBgColor,
	//
	titleRounded = 'rounded-sm',
	elRounded = 'rounded-lg',

	...props
}: PrimarySkeletonWithTitleProps) => {
	return (
		<Block boxClass={`${boxClass} flex items-center gap-3`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<PrimarySkeleton boxClass={elClass} boxSize={elSize} bgColor={elBgColor} roundedClass={elRounded} />
			<PrimarySkeleton boxClass={titleClass} boxSize={titleSize} bgColor={titleBgColor} roundedClass={elRounded} />
		</Block>
	);
};

PrimarySkeleton.Button = ({
	// box
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	//
	titleClass = '',
	elClass = '',
	// size
	titleSize = '',
	elSize = 'w-[100%] h-[50px]',
	//
	titleBgColor,
	elBgColor = 'bg-primary-1',
	//
	titleRounded = '',
	elRounded = 'rounded-lg',

	...props
}: PrimarySkeletonWithTitleProps) => {
	return (
		<Block boxClass={`${boxClass}`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<PrimarySkeleton boxClass={elClass} boxSize={elSize} bgColor={elBgColor} roundedClass={elRounded} />{' '}
		</Block>
	);
};
