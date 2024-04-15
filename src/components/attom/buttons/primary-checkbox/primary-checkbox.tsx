import { Block } from '@attom';

export type PrimaryCheckboxProps = Props_Block & {
	labelClass?: string;
	activeBgColor?: string;
	activeBorderColor?: string;
	deactiveBgColor?: string;
	deactiveBorderColor?: string;
	checkTextColor?: string;
	label?: string | null;
	value?: boolean;
	onChange?: ((value: boolean) => void) | null;
	inlineBlock?: boolean;
	readOnly?: boolean;
};

export const PrimaryCheckbox: React.FC<PrimaryCheckboxProps> = ({
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',

	activeBgColor = 'bg-primary-1',
	activeBorderColor = 'border-text-primary',
	deactiveBgColor = 'bg-transparent',
	deactiveBorderColor = 'border-text-primary',
	checkTextColor = 'text-text-primary',

	label = '',
	labelClass = '',
	value = undefined,
	onChange = null,
	inlineBlock = false,
	readOnly = false,

	...props
}) => {
	const isCheck = Boolean(value);

	const changeHandle = () => {
		if (!onChange || readOnly) return;
		const forrmattedValue = (!value && true) || false;
		onChange(forrmattedValue);
	};

	// return jsx
	return (
		<Block boxClass={`${boxClass} select-none`} boxSize={boxSize} boxSpace={boxSpace} inlineBlock={inlineBlock} {...props}>
			<div className='flex w-full items-center gap-2'>
				<span
					className={`${isCheck ? activeBgColor : deactiveBgColor} border ${isCheck ? activeBorderColor : deactiveBorderColor} ${
						readOnly ? '' : 'cursor-pointer'
					} flex justify-center items-center w-7 h-7 rounded-lg p-[2px]`}
					onClick={changeHandle}
				>
					<i
						className={`flex justify-center items-center fa fa-check !text-[18px] font-light ${
							isCheck ? checkTextColor : 'text-transparent'
						}`}
					/>
				</span>
				{label && (
					<span className={`${readOnly ? '' : 'cursor-pointer'} ${labelClass}`} onClick={changeHandle}>
						{label}
					</span>
				)}
			</div>
		</Block>
	);
};

export default PrimaryCheckbox;
