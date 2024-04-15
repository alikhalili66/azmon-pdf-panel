import { useRef, useState } from 'react';

import { Block } from '@attom';
import { useDidMount } from '@hooks';
import { Price } from '@utils';

export type PrimaryInputProps = Props_Block & {
	elClass?: string;
	elSpace?: string;
	//
	bgColor?: string;
	disableBgColor?: string;
	textColor?: string;
	disableTextColor?: string;
	placeholderTextColor?: string;
	borderColor?: string;
	focusBorderColor?: string;
	fillBorderColor?: string;
	disableBorderColor?: string;
	//
	textarea?: boolean;
	rows?: number | undefined;
	cols?: number | undefined;
	type?: 'text' | 'password';
	value?: string;
	placeholder?: string;
	label?: string;
	numeric?: boolean;
	priceMode?: boolean;
	otpMode?: boolean;
	autoComplete?: boolean;
	//
	onChange?: null | ((value: string, event: any) => any);
	focus?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	maxLength?: number | undefined;
	onFocus?: null | ((e?: any) => any);
	onBlur?: null | ((e?: any) => any);
	isValid?: boolean | null;
	disableInvalidError?: boolean;
	disableValidError?: boolean;
};

export const PrimaryInput = ({
	children,

	boxClass = '',
	boxSpace = '',
	boxSize = '',

	elClass = 'min-h-[50px]',
	elSpace = 'py-[10px] px-3',

	// Background Color
	bgColor = 'bg-background-tertiary',
	disableBgColor = 'bg-background-tertiary opacity-50',
	// Text Color
	textColor = 'text-text-primary',
	disableTextColor = 'text-text-primary',
	placeholderTextColor = 'text-text-secondary',
	// Border Color
	borderColor = 'border-[#aaa]',
	focusBorderColor = 'border-info',
	fillBorderColor = 'border-text-tertiary',
	disableBorderColor = 'border-text-[#aaa]',

	textarea = false,
	rows = 2,
	cols = 2,
	type = 'text',
	value = '',
	placeholder = '',
	label = '',

	numeric = false,
	priceMode = false,
	otpMode = false,
	autoComplete = false,

	onChange = null,
	focus = false,
	disabled = false,
	readOnly = false,
	required = false,
	maxLength = undefined,
	onFocus = null,
	onBlur = null,
	// Validation
	isValid = null,
	disableInvalidError = false,
	disableValidError = false,

	...props
}: PrimaryInputProps) => {
	//
	const rf: any = useRef();

	const [isFocus, setFocus] = useState(false);

	const onFocusHandler = (e) => {
		setFocus(true);
		onFocus && onFocus(e);
	};

	const onBlurHandler = (e) => {
		setFocus(false);
		onBlur && onBlur(e);
	};

	useDidMount(() => {
		if (focus) {
			rf.current.focus();
		}
	}, []);

	const changeInput = (e) => {
		if (priceMode) e.target.value = e.target.value.replaceAll(',', '');
		if ((numeric || priceMode || otpMode) && isNaN(e.target.value)) return;
		if (onChange) onChange(e.target.value || '', e);
	};

	const isSuccess = isValid === true && value && !disableValidError;
	const isDanger = isValid === false && value && !disableInvalidError;

	const borderColorClass =
		(disabled && disableBorderColor) ||
		(isSuccess && 'border-success') ||
		(isDanger && 'border-danger') ||
		(isFocus && focusBorderColor) ||
		(value && fillBorderColor) ||
		borderColor ||
		'';

	const bgColorClass = (disabled && disableBgColor) || bgColor || '';
	const textColorClass = (disabled && disableTextColor) || textColor || '';

	const formattedValue = (priceMode && Price.seperate(value)) || value || '';

	const modeClass = (otpMode && 'letter-spacing-2') || ((numeric || priceMode || otpMode) && 'dir-X') || '';

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='min-h-[35px] pb-[5px] flex items-start text-[18px] font-bold'>
				{label || ''}

				{required && <span className='font-bold text-[18px] px-1'>*</span>}
			</div>

			<div className={`relative flex w-full h-full border rounded ${borderColorClass} ${bgColorClass} ${textColorClass}`}>
				{textarea ? (
					<textarea
						ref={rf}
						className={`${elClass} ${elSpace} ${modeClass} placeholder:${placeholderTextColor} resize-none flex border-none outline-none w-full h-full bg-transparent text-inherit`}
						placeholder={placeholder}
						value={formattedValue}
						rows={rows}
						cols={cols}
						onChange={changeInput}
						disabled={disabled}
						readOnly={readOnly}
						onFocus={onFocusHandler}
						onBlur={onBlurHandler}
						maxLength={otpMode ? 6 : maxLength}
						autoComplete={autoComplete ? 'on' : 'off'}
					/>
				) : (
					<input
						type={type}
						ref={rf}
						className={`${elClass} ${elSpace} ${modeClass} placeholder:${placeholderTextColor} flex border-none outline-none w-full h-full bg-transparent text-inherit`}
						placeholder={placeholder}
						value={formattedValue}
						onChange={changeInput}
						disabled={disabled}
						readOnly={readOnly}
						onFocus={onFocusHandler}
						onBlur={onBlurHandler}
						maxLength={otpMode ? 6 : maxLength}
						autoComplete={autoComplete ? 'on' : 'off'}
					/>
				)}

				{/* {required && <span className='absolute top-1 left-1 text-[#822] text-[16px]'>*</span>} */}
				{(isSuccess || isDanger) && (
					<span
						className={`absolute left-1 text-[18px] top-[calc(50%_-_9px)] font-bold animate-status-flash ${
							isSuccess ? 'text-success' : 'text-danger'
						}`}
					>
						{isSuccess ? '✓' : '✕'}
					</span>
				)}
			</div>
		</Block>
	);
};

export default PrimaryInput;
