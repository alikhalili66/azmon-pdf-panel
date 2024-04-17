//@ts-nocheck

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

import { Block } from '@attom';
import { Dates } from '@utils';

export type PrimaryDatepickerProps = Props_Block & {
	//
	label?: string;
	value?: string | null;
	onChange?: null | ((geo: string, jalali: string) => any);
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	isValid?: boolean | null;
	//
	is24Hours?: boolean;
	dateTimePicker?: boolean;
	disablePast?: boolean;
};

export const PrimaryDatepicker = ({
	// box Control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// custom props:
	is24Hours = true,
	disabled = false,
	readOnly = false,
	value = '',
	onChange = null,
	dateTimePicker = false,
	placeholder = '',
	isValid = null,
	label = '',
	required = false,
	disablePast = false,
	...props
}: PrimaryDatepickerProps) => {
	const mask = dateTimePicker ? '____/__/__ __:__:__' : '____/__/__';

	const changeHandler = (geoDate) => {
		const geo = Date.parse(geoDate) ? geoDate : geoDate === null ? null : 'invalid';
		const jalali = Date.parse(geoDate) ? Dates.gregorianToJalaali(geoDate)?.standardDate : geoDate === null ? null : 'invalid';

		if (onChange) onChange(geo, jalali);
	};

	const formattedValue = !value || value === 'invalid' || !Date.parse(value) ? null : new Date(value);

	const validationClass = (isValid && value && 'picker-valid') || (isValid === false && value && 'picker-invalid') || '';

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace}>
			<div className='min-h-[35px] pb-[5px] flex items-start text-[18px] font-bold'>
				{label || ''}

				{required && <span className='font-bold text-[18px] px-1'>*</span>}
			</div>
			<LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
				{dateTimePicker ? (
					<DateTimePicker
						ampm={!is24Hours}
						leftArrowButtonText='ماه قبل'
						rightArrowButtonText='ماه بعد'
						minDate={new Date('1921-03-21')}
						maxDate={new Date('2121-03-20')}
						disabled={disabled}
						readOnly={readOnly}
						mask={mask}
						value={formattedValue || null}
						inputFormat='yyyy/MM/dd HH:mm:ss'
						onChange={changeHandler}
						disablePast={disablePast}
					/>
				) : (
					<DatePicker
						className={`w-full ${validationClass}`}
						leftArrowButtonText='ماه قبل'
						rightArrowButtonText='ماه بعد'
						minDate={new Date('1921-03-21')}
						maxDate={new Date('2121-03-20')}
						disabled={disabled}
						readOnly={readOnly}
						mask={mask}
						value={formattedValue || null}
						inputFormat='yyyy/MM/dd'
						onChange={changeHandler}
						disablePast={disablePast}
						// {...props}
					/>
				)}
			</LocalizationProvider>
		</Block>
	);
};
