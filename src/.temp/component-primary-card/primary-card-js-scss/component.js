import { PrimaryCard } from '@attom';

import CS from './component.module.scss';

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	elClass = '',
	elSpace = '',
}) => {
	return (
		<PrimaryCard
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			elClass={`${elClass} ${CS.container}`}
			elSpace={elSpace}
			rounded
		>
			Component
		</PrimaryCard>
	);
};

export default Component;
