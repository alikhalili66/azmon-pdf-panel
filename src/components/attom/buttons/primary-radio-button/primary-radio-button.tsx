import { Block } from '@attom';

type ListItem = { name: string; value: string; [key: string]: any };

export type PrimaryRadioButtonProps = Props_Block & {
	bgColor?: string;
	activeBgColor?: string;
	borderColor?: string;
	labelClass?: string;
	list?: ListItem[];
	value?: any;
	onChange?: ((item: ListItem) => void) | null;
	inlineBlock?: boolean;
	readOnly?: boolean;
	isVertical?: boolean;
};

export const PrimaryRadioButton: React.FC<PrimaryRadioButtonProps> = ({
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',

	bgColor = 'bg-[#fff]',
	activeBgColor = 'bg-primary-1',
	borderColor = 'border-primary-1',

	labelClass = '',
	value = '',
	list = [],
	onChange = null,
	inlineBlock = false,
	readOnly = false,
	isVertical = false,

	...props
}) => {
	const changeHandle = (item: ListItem) => {
		if (!onChange || readOnly) return;
		onChange(item);
	};

	// return jsx
	return (
		<Block boxClass={`${boxClass} select-none`} boxSize={boxSize} boxSpace={boxSpace} inlineBlock={inlineBlock} {...props}>
			<div className={`flex flex-wrap w-full gap-2 ${isVertical ? 'flex-col' : 'items-center'}`}>
				{list.map((item, i) => (
					<div key={i} className='cursor-pointer flex items-center gap-2' onClick={() => changeHandle(item)}>
						<span className={`rounded-full w-5 h-5 border-2 flex items-center justify-center ${borderColor} ${bgColor}`}>
							<span className={`h-3 w-3 ${value === item.value ? activeBgColor : ''} rounded-full`}></span>
						</span>
						<span className={labelClass}>{item.name || ''}</span>
					</div>
				))}
			</div>
		</Block>
	);
};

export default PrimaryRadioButton;
