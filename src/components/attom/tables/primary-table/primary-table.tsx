import { ReactElement } from 'react';

import { PrimarySkeleton, PureTable } from '@attom';

import CS from './primary-table.module.scss';

export type PrimaryTableProps = Props_Block & { loading?: boolean };

export const PrimaryTable = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	loading = false,

	...props
}: PrimaryTableProps) => {
	const header: ReactElement = children?.[0] || null;
	const tdArray: ReactElement[] = header?.props?.children ?? [];
	const tdCount = tdArray?.length || 0;

	return (
		<PureTable boxClass={`${CS.container} ${boxClass}`} boxSpace={boxSpace} boxSize={boxSize} {...props}>
			{loading ? (
				<>
					{header}
					<div className='min-h-[500px]'>
						{new Array(9).fill({}).map((item, i) => {
							return (
								<div key={i}>
									{new Array(tdCount).fill({}).map((item, i2) => (
										<div key={i2} data-grow={tdArray?.[i2]?.props?.['data-grow'] ?? ''}>
											<PrimarySkeleton boxSize='w-[50%] h-[10px] mx-auto' />
										</div>
									))}
								</div>
							);
						})}
					</div>
				</>
			) : (
				children
			)}
		</PureTable>
	);
};

export default PrimaryTable;

// __________ EXAMPLE : __________ //

/* <PrimaryTable boxClass={CS.table}>
	<div className={CS.th}>
		<div className={CS.td}>1</div>
		<div className={CS.td}>2</div>
		<div className={CS.td}>3</div>
	</div>
	<div className={CS.tbody}>
		<div className={CS.tr}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
</PrimaryTable>; */

// __________ EXAMPLE : __________ //

/* <PrimaryTable boxClass={CS.table}>
	<div className={CS.th}>
		<div className={CS.td}>1</div>
		<div className={CS.td}>2</div>
		<div className={CS.td}>3</div>
	</div>
	<div className={CS.tbody}>
		<div className={CS.tr}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
</PrimaryTable>; */
