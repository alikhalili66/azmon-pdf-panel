import { Block } from '@attom';

import { MouseEventHandler } from 'react';

export type PrimaryButtonProps = Props_Block & {
	elClass?: string;
	elSpace?: string;
	bgColor?: string;
	color?: 'primary-1-outline' | 'secondary-1-outline' | '';
	textColor?: string;
	rounded?: string;
	icon?: string | null | (() => any);
	content?: string;
	contentClass?: string;
	loading?: boolean | null;
	onClick?: MouseEventHandler | undefined;
	disabled?: boolean;
	inlineBlock?: boolean;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	children,
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// element control
	elClass = '',
	elSpace = 'py-[8px] px-[20px]',
	bgColor = 'bg-primary-1',
	color = '',
	textColor = 'text-[#fff]',
	rounded = 'rounded-lg',
	// custom props
	icon = null,
	content = '',
	contentClass = '',
	loading = null,
	onClick = undefined,
	disabled = false,
	inlineBlock = false,
	...props
}) => {
	// return jsx

	const bgColorClass =
		(color === 'primary-1-outline' &&
			'bg-transparent !border-solid border border-primary-1 hover:bg-primary-1 text-primary-1 hover:text-white') ||
		(color === 'secondary-1-outline' &&
			'bg-transparent !border-solid border gradient-border-secondary rounded-2xl hover:bg-secondary-1 text-primary-1') ||
		bgColor;

	return (
		<Block boxClass={`${boxClass} text-center`} boxSize={boxSize} boxSpace={boxSpace} inlineBlock={inlineBlock} {...props}>
			<button
				className={`${elClass} ${elSpace} ${bgColorClass} ${textColor} ${inlineBlock ? '' : 'w-full'} ${
					disabled ? 'opacity-80' : ''
				}
			  ${rounded} outline-none border-none text-center cursor-pointer text-base
				font-[inherit] hover:contrast-[1.1] hover:shadow-sm disabled:cursor-no-drop`}
				onClick={loading ? undefined : onClick}
				disabled={loading || disabled}
			>
				{loading ? (
					<i className='fa fa-spinner fa-lg fa-pulse fa-spin' />
				) : (
					<span className={`flex items-center justify-center whitespace-nowrap ${contentClass}`}>
						{icon && typeof icon === 'function' && icon()}
						{icon && typeof icon === 'string' && <i className={`mx-6px fa font-size-14px pt-2px ${icon}`} />}
						{content}
						{children}
					</span>
				)}
			</button>
		</Block>
	);
};

export default PrimaryButton;
