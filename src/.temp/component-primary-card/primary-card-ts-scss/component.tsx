// @ts-nocheck

import { PrimaryCard } from '@attom';

import CS from ' ./component.module.scss';

export type ComponentProps = Props_PrimaryCard & {};

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	elClass = '',
	elSpace = '',

	...props
}: ComponentProps) => {
	return (
		<PrimaryCard
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			elClass={`${elClass} ${CS.container}`}
			elSpace={elSpace}
			{...props}
		>
			Component
		</PrimaryCard>
	);
};

export default Component;
