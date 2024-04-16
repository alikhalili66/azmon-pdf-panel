import { Block } from '@attom';
import { template_main } from '@context';
import { images } from '@data';

type MainTemplateProps = Props_Block & {};

export const MainTemplate = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}: MainTemplateProps) => {
	const { state } = template_main.useContext();
	const {} = state;

	return (
		<Block
			boxClass={`${boxClass} text-text-primary bg-background-primary overflow-y-hidden`}
			boxSize={boxSize}
			boxSpace={boxSpace}
		>
			{/* Header */}
			<div className='bg-gradient-header min-h-[100px]'></div>

			{/* Body */}
			<div className='content-min-h bg-image-body'>{children}</div>
		</Block>
	);
};

export default MainTemplate;
