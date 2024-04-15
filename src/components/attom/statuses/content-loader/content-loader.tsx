import { icons } from '@data';

export type ContentLoaderProps = Props_Block & {
	boxPosition?: 'absolute' | 'fixed' | 'relative' | 'static';
	boxBackdropBlur?: string;
	boxOpacity?: string;
	boxBgColor?: string;
	elClass?: string;
	elSize?: string;
	elSpace?: string;
	elOpacity?: string;
};

export const ContentLoader = ({
	// Box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	boxPosition = 'absolute',
	boxBackdropBlur = 'backdrop-blur-[1px]',
	boxOpacity = '',
	boxBgColor = '',
	// Loader Control
	elClass = '',
	elSize = 'max-h-[40%] min-h-[50px]',
	elSpace = 'm-[20px]',
	elOpacity = 'opacity-60',

	...props
}: ContentLoaderProps) => {
	return (
		<div
			className={`${boxClass} ${boxSize} ${boxSpace} ${boxPosition} ${boxOpacity} ${boxBgColor} ${boxBackdropBlur} top-0 right-0 left-0 bottom-0 pointer-events-none flex flex-col items-center justify-center select-none z-[3]`}
			{...props}
		>
			<img className={`${elClass} ${elSize} ${elSpace} ${elOpacity}`} alt='loader' src={icons.primaryLoader.src} />
		</div>
	);
};

export default ContentLoader;
