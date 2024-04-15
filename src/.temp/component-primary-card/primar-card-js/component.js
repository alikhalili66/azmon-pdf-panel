import { PrimaryCard } from '@attom';

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	elClass = '',
	elSpace = '',
}) => {
	return (
		<PrimaryCard boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} elClass={elClass} elSpace={elSpace} rounded>
			Component
		</PrimaryCard>
	);
};

export default Component;
