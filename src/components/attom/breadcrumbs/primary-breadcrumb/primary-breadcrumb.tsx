import { PureBreadcrumb, PureBreadcrumbProps } from '@attom';

export type PrimaryBreadcrumbProps = PureBreadcrumbProps;

export const PrimaryBreadcrumb: React.FC<PureBreadcrumbProps> = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	paths = [],
	class_path = 'mx-[2px] text-text-secondary last:text-primary-1 text-xs',
	class_name = 'mx-1',
	class_separator = 'mx-1',

	...props
}) => {
	return (
		<PureBreadcrumb
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			paths={paths}
			class_path={class_path}
			class_name={class_name}
			class_separator={class_separator}
			{...props}
		/>
	);
};

export default PrimaryBreadcrumb;
