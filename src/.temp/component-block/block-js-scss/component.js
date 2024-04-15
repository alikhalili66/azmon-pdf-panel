import { Block } from '@attom';

import CS from './component.module.scss';

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSize={boxSize} boxSpace={boxSpace}>
			Component
		</Block>
	);
};

export default Component;
