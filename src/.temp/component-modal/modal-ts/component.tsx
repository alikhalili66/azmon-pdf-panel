// @ts-nocheck

import { PrimaryModal } from '@attom';

export type ComponentProps = Props_Block & {};

export const Component = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: ComponentProps) => {
	return (
		<PrimaryModal boxClass={boxClass} boxSpace={boxSpace} boxSize={boxSize} onClose={() => null} {...props}>
			<div>{children}</div>
		</PrimaryModal>
	);
};
