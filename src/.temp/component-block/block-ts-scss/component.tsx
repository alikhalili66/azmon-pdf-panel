// @ts-nocheck

import { Block } from '@attom';

import CS from './component.module.scss';

export type ComponentProps = Props_Block & {};

export const Component = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: ComponentProps) => {
	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			Component
		</Block>
	);
};

export default Component;
