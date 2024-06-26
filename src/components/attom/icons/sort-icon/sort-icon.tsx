import { Block } from '@attom';

export type SortIconProps = Props_Block & {
	value?: string;
	ascName?: string;
	descName?: string;
	onChange?: ((value?: string) => any) | null;
	inlineBlock?: boolean;
	class_icon?: string;
};

export const SortIcon = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	value = '',
	ascName = '',
	descName = '',
	onChange = null,
	inlineBlock = false,

	class_icon = 'ml-2',

	...props
}: SortIconProps) => {
	const sortIcon =
		(value && value === ascName && 'fa-sort-asc') || (value && value === descName && 'fa-sort-desc') || 'fa-sort opacity-70';

	const sortAction = () => {
		if (!onChange) return;
		if ((!value || (value !== ascName && value !== descName)) && ascName) onChange(ascName);
		else if (!value && descName) onChange(descName);
		else if (value === ascName && descName) onChange(descName);
		else if (value === ascName && !descName) onChange('');
		else if (value === descName) onChange('');
	};

	return (
		<Block
			boxClass={`${boxClass} cursor-pointer select-none`}
			boxSize={boxSize}
			boxSpace={boxSpace}
			inlineBlock={inlineBlock}
			onClick={sortAction}
			{...props}
		>
			<i className={`fa ${sortIcon} ${class_icon}`} onClick={() => onChange && sortAction()} />
			{children}
		</Block>
	);
};

export default SortIcon;
