import { Block } from '@attom';

export type PrimaryBarChartProps = Props_Block & {
	percent?: string | number;
	emptyBgColor?: string;
	fullBgColor?: string;
	barHeight?: string;
	[key: string]: any;
};

export const PrimaryBarChart = ({
	// box Control
	boxClass = '',
	boxSize = 'w-full',
	boxSpace = 'py-2',

	percent = 0,
	emptyBgColor = 'bg-primary-1',
	fullBgColor = 'bg-secondary-1',
	barHeight = 'h-4',

	...props
}: PrimaryBarChartProps) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={`${barHeight} ${emptyBgColor} relative overflow-hidden rounded-xl`}>
				<div className={`${barHeight} ${fullBgColor}`} style={{ width: `${+percent || 0}%` }} />
			</div>
		</Block>
	);
};

export default PrimaryBarChart;
