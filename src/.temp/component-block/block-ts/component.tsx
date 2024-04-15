// @ts-nocheck

import { Block } from '@attom';

export type ComponentProps = Props_Block & {};

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: ComponentProps) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			Component
		</Block>
	);
};
export default Component;
