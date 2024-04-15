import { PrimaryModal } from '@attom';

export const Component = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}) => {
	return (
		<PrimaryModal boxClass={boxClass} boxSpace={boxSpace} boxSize={boxSize} onClose={() => null} {...props}>
			<div>{children}</div>
		</PrimaryModal>
	);
};
