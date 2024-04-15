// @ts-nocheck

import { PrimaryCard } from '@attom';

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
		<PrimaryCard boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} elClass={elClass} elSpace={elSpace} {...props}>
			Component
		</PrimaryCard>
	);
};

export default Component;
