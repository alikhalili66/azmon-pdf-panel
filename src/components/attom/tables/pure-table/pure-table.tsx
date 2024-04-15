import { Block } from '@attom';

import CS from './pure-table.module.scss';

export type PureTableProps = Props_Block & {};

export const PureTable = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: PureTableProps) => {
	return (
		<Block boxClass={`${CS.container} ${boxClass}`} boxSpace={boxSpace} boxSize={boxSize} {...props}>
			{children}
		</Block>
	);
};

export default PureTable;

/* <PureTable boxClass={CS.table}>
	<div className={CS.thead}>
		<div className={CS.th}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
	<div className={CS.tbody}>
		<div className={CS.tr}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
</PureTable>; */
