import { Block } from '@attom';

type Spans = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type RowProps = Props_Block & {
	cols?: Spans;
};

export const Row = ({
	children,

	boxClass = '',
	boxSize = '',
	boxSpace = '',

	cols = 12,

	...props
}: RowProps) => {
	const colsCls =
		(cols === 12 && 'grid-cols-12') ||
		(cols === 11 && 'grid-cols-11') ||
		(cols === 10 && 'grid-cols-10') ||
		(cols === 9 && 'grid-cols-9') ||
		(cols === 8 && 'grid-cols-8') ||
		(cols === 7 && 'grid-cols-7') ||
		(cols === 6 && 'grid-cols-6') ||
		(cols === 5 && 'grid-cols-5') ||
		(cols === 4 && 'grid-cols-4') ||
		(cols === 3 && 'grid-cols-3') ||
		(cols === 2 && 'grid-cols-2') ||
		(cols === 1 && 'grid-cols-1') ||
		'grid-cols-12';

	return (
		<Block boxClass={`${boxClass} grid ${colsCls}`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			{children}
		</Block>
	);
};

export default Row;
