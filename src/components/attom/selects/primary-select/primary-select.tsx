import { useRef, useState } from 'react';

import { Block } from '@attom';
import { useDidMount } from '@hooks';

type Option = { name?: string; value?: any; icon?: any; [key: string]: any };

export type PrimarySelectProps = Props_Block & {
	elClass?: string;
	elSpace?: string;
	optionsClass?: string;
	optionsSpace?: string;
	optionClass?: string;
	optionSpace?: string;
	placeholderClass?: string;
	borderColor?: string;
	focusBorderColor?: string;
	fillBorderColor?: string;
	disableBorderColor?: string;
	optionBorderColor?: string;

	bgColor?: string;
	disableBgColor?: string;
	textColor?: string;
	disableTextColor?: string;
	placeholderTextColor?: string;

	value?: number | string | (number | string)[] | null;
	item?: Option | null;
	options?: Option[];
	label?: string;
	placeholder?: string;
	onChange?: null | ((item: Option | null) => any);
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	emptyOption?: boolean | string;
	noOptionLabel?: string;
	dataTable?: boolean;
	isValid?: boolean | null;
	disableInvalidError?: boolean;
	disableValidError?: boolean;
	namesSeperator?: string;
	valueProperty?: string;
	nameProperty?: string | string[];
	iconProperty?: string;
};

export const PrimarySelect = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	// el control
	elClass = '',
	elSpace = 'py-[10px] px-3',
	optionsClass = '',
	optionsSpace = 'py-[10px] px-3',
	optionClass = '',
	optionSpace = 'py-[10px] px-3',
	placeholderClass = '',
	// Bg Color
	bgColor = 'bg-[#fff]',
	disableBgColor = 'bg-[#fafafa]',
	textColor = 'text-[#111]',
	// Text Color
	disableTextColor = 'text-[#444]',
	placeholderTextColor = 'text-[#999]',
	// Border Color
	borderColor = 'border-[#99f]',
	focusBorderColor = 'border-[#55f]',
	fillBorderColor = 'border-[#77f]',
	disableBorderColor = 'border-[#555]',
	optionBorderColor = 'border-[#999]',
	label = '',
	placeholder = '',
	options = [],
	value = null,
	item = null,
	onChange = null,
	disabled = false,
	required = false,
	readOnly = false,
	emptyOption = false,
	noOptionLabel = 'موردی یافت نشد',
	dataTable = false,
	//
	isValid = null,
	disableInvalidError = false,
	disableValidError = false,
	// property Name
	namesSeperator = ' ',
	valueProperty = 'value',
	nameProperty = 'name', // string || array of string
	iconProperty = 'icon',

	...props
}: PrimarySelectProps) => {
	// variables and functions:
	const [isShow, setShow] = useState<boolean>(false);
	const [selected, setSelected] = useState<Option | null>(null);
	const [searched, setSearched] = useState<string>('');

	const ref: any = useRef();

	const filteredOptions =
		dataTable && searched
			? options.filter((item) => {
					let name = '';
					if (typeof nameProperty === 'string') name = item[nameProperty];
					if (typeof nameProperty === 'object')
						name = nameProperty.reduce((result, currentName, index) => {
							return result + (item[currentName] || '') + (index + 1 < nameProperty.length ? namesSeperator : ' ');
						}, '');

					return name.includes(searched);
			  })
			: options;

	const generateFullname = (item: Option | null) => {
		if (!item) return '';
		else if (typeof nameProperty === 'string') return item[nameProperty] ?? '';
		else if (typeof nameProperty === 'object' && nameProperty.length > 0)
			return nameProperty.reduce((result, currentName) => {
				return result + (item[currentName] || '') + ' ';
			}, '');
		else return '';
	};

	const selectItem = (item) => {
		if (disabled || readOnly) return;
		if (onChange && !disabled) onChange(item);
	};

	const clickHandle = (e) => {
		if (isShow && dataTable && e.target?.id === 'search-datatable') return;
		else if (ref.current && !ref.current.contains(e.target)) setShow(false);
	};

	const clickOnElementHandle = (e) => {
		if (disabled && !isShow) return;
		if (isShow && dataTable && e.target?.id === 'search-datatable') return;
		else setShow(!isShow);
	};

	useDidMount(() => {
		setSelected(
			options.find((selectedItem) => {
				if (item) return selectedItem[valueProperty] === item[valueProperty];
				else if (value) return selectedItem[valueProperty] === value;
				else return null;
			}) || null,
		);
	}, [value, item, options]);

	useDidMount(() => {
		document.addEventListener('click', clickHandle);

		return () => document.removeEventListener('click', clickHandle);
	}, []);

	const bgColorClass = (disabled && disableBgColor) || bgColor || '';
	const textColorClass = (disabled && disableTextColor) || textColor || '';

	const isSuccess = isValid === true && (value || item) && !disableValidError;
	const isDanger = isValid === false && (value || item) && !disableInvalidError;

	const borderColorClass =
		(disabled && disableBorderColor) ||
		(isSuccess && 'border-success') ||
		(isDanger && 'border-danger') ||
		(isShow && focusBorderColor) ||
		(selected && fillBorderColor) ||
		borderColor ||
		'';

	const CN = {
		el: `${elSpace} ${elClass} ${bgColorClass} ${textColorClass} ${borderColorClass} ${
			disabled || readOnly ? 'pointer-events-none' : 'cursor-pointer'
		} relative w-full h-full rounded  flex items-center border select-none whitespace-nowrap min-w-[200px]`,
		placeholder: `${placeholderClass} ${placeholderTextColor}`,
		selectedLi: `flex items-center gap-2 w-full h-full`,
		required: 'absolute top-1 left-1 text-[#822] text-[16px]',
		elIcon: `fa fa-angle-${isShow ? 'up' : 'down'} absolute left-2 transition-all`,
		//
		ul: `${optionsClass} ${optionsSpace} ${bgColorClass} ${borderColorClass} ${textColorClass} ${
			isShow ? '' : 'hidden'
		} absolute rounded w-full left-0 top-[100%] border select-none overflow-y-auto max-h-[280px] min-h-[30px] z-[3] text-md`,
		li: `${optionBorderColor} ${optionClass} ${optionSpace} w-full flex items-center gap-2 border-b opacity-80 transition-all last:border-none hover:opacity-100`,
		searchLi: 'block outline-none bg-inherit text-inherit border-dashed',
		emptyLi: 'opacity-50 border-dashed',
		notOptionLabel: `${optionSpace} opacity-50 flex w-full items-center`,
	};

	return (
		<Block boxClass={`${boxClass} relative`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={CN.el} onClick={clickOnElementHandle} ref={ref}>
				{!value && !item && <span className={CN.placeholder}>{label}</span>}
				<div className={CN.selectedLi}>
					{selected && selected[iconProperty] && <img src={selected && selected[iconProperty].src} alt='icon' />}
					{selected && <span>{generateFullname(selected)}</span>}
					{!selected && (
						<span className={placeholder ? `${CN.placeholder} text-[12px] py-1` : 'opacity-0'}>{placeholder || '-'}</span>
					)}{' '}
				</div>
				{required && <span className={CN.required}>*</span>}
				<i className={CN.elIcon} />
				<span
					className={`${
						selected ? '' : 'opacity-0'
					} transition-all duration-300 absolute inline-block top-[-14px] right-2 text-[16px] px-2 min-w-[50px] text-center`}
					style={{
						backgroundImage: `linear-gradient(
						to bottom,
						transparent calc(50% + 1px),
						${(bgColorClass || '').replace('bg-[', '').replace(']', '')} calc(50% + 1px),
						${(bgColorClass || '').replace('bg-[', '').replace(']', '')} calc(50% + 3px),
						transparent calc(50% + 4px)
					)`,
					}}
				>
					{label}
				</span>
				<ul className={CN.ul}>
					{emptyOption && options.length > 0 && (item || value) && (
						<li className={CN.li + ' ' + CN.emptyLi} onClick={() => selectItem(null)}>
							{typeof emptyOption === 'string' ? (
								emptyOption
							) : (
								<>
									<i className='fa fa-close text-danger' />
									<span className='text-danger text-sm'>پاک کردن</span>
								</>
							)}
						</li>
					)}
					{dataTable && (
						<input
							id='search-datatable'
							className={CN.li + ' ' + CN.searchLi}
							type='text'
							value={searched}
							placeholder='جستجو'
							onChange={(e) => setSearched(e.target.value)}
							autoComplete='off'
						/>
					)}
					{noOptionLabel && filteredOptions.length === 0 && <div className={CN.notOptionLabel}>{noOptionLabel}</div>}
					{filteredOptions.map((item, i) => (
						<li className={CN.li} key={i} onClick={() => selectItem(item)}>
							{item && item[iconProperty] && <img src={item[iconProperty].src} alt='icon' />}
							<span>{generateFullname(item)}</span>
						</li>
					))}
				</ul>
			</div>
		</Block>
	);
};

export default PrimarySelect;
