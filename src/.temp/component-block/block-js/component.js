import { Block } from '@attom';

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace}>
			Component
		</Block>
	);
};

export default Component;
