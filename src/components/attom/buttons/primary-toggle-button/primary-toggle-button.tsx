import { Block } from '@attom';

export type PrimaryToggleButtonProps = Props_Block & {
	elClass?: string;
	activeBgColor?: string;
	activeBgColor2?: string;
	deactiveBgColor?: string;
	deactiveBgColor2?: string;
	value?: boolean | 'N' | 'Y' | '';
	onChange?: ((value: boolean | 'Y' | 'N') => void) | null;
	inlineBlock?: boolean;
	readOnly?: boolean;
};

export const PrimaryToggleButton: React.FC<PrimaryToggleButtonProps> = ({
	// box control
	boxClass = '',
	boxSpace = 'p-1',
	boxSize = 'min-w-[52px]',

	elClass = '',
	activeBgColor = 'bg-primary-1',
	activeBgColor2 = 'bg-secondary-1',
	deactiveBgColor = 'bg-primary-1',
	deactiveBgColor2 = 'bg-secondary-1',

	value = '',
	onChange = null,
	readOnly = false,
	inlineBlock = true,
	...props
}) => {
	const isActive = !(!value || value === 'N');

	const changeHandle = () => {
		if (!onChange || readOnly) return;
		const forrmattedValue = (value === 'N' && 'Y') || (value === 'Y' && 'N') || (!value && true) || false;
		onChange(forrmattedValue);
	};

	// return jsx
	return (
		<Block
			boxClass={`${boxClass} ${inlineBlock ? 'inline-flex' : 'flex'} items-center justify-center`}
			boxSize={boxSize}
			boxSpace={boxSpace}
			{...props}
		>
			<span
				className={`${elClass} ${
					isActive ? activeBgColor : deactiveBgColor
				} relative flex justify-center items-center w-full h-5 rounded-xl select-none transition-all cursor-pointer`}
				onClick={changeHandle}
			>
				<span
					className={`${isActive ? activeBgColor2 : deactiveBgColor2} ${
						isActive ? 'right-[-4px]' : 'left-[-4px]'
					} absolute w-7 h-7 rounded-full`}
				></span>
			</span>
		</Block>
	);
};

export default PrimaryToggleButton;
