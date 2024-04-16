import { Block } from '@attom';
import { images } from '@data';

type PanelTemplateProps = Props_Block & {};

export const PanelTemplate = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}: PanelTemplateProps) => {
	return (
		<Block
			boxClass={`${boxClass} text-text-primary bg-background-primary overflow-y-hidden`}
			boxSize={boxSize}
			boxSpace={boxSpace}
		>
			{/* Header */}
			<div className='bg-gradient-header'>
				<div className='h-[100px] max-w-[1200px] w-[90%] mx-auto flex items-center justify-between p-2 gap-2'>
					<div className='text-white font-[500] text-[20px] md:text-[26px]'>سامانه جوابدهی آنلاین آزمایشگاه کیوان</div>
					<img alt='' src={images.logo?.src} className='max-h-[80px] max-w-[150px] md:max-w-[300px]' />
				</div>
			</div>

			{/* Body */}
			<div className='content-min-h bg-image-body'>{children}</div>
		</Block>
	);
};

export default PanelTemplate;
