import { Block } from '@attom';

export type PureBreadcrumbProps = Props_Block & {
	nameProperty?: string;
	onClickProperty?: string;
	separator?: string;
	paths: any[];

	class_path?: string;
	class_name?: string;
	class_separator?: string;
};

export const PureBreadcrumb: React.FC<PureBreadcrumbProps> = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	nameProperty = 'name',
	onClickProperty = 'onClick',
	separator = '/',
	paths = [],
	//styles
	class_path = '',
	class_name = '',
	class_separator = '',

	...props
}) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			{paths.map((item, i) => (
				<span
					key={i}
					className={`${class_path} ${item[onClickProperty] ? 'cursor-pointer' : ''}`}
					onClick={item[onClickProperty] ?? null}
				>
					<span className={class_name}>{item[nameProperty] ?? ''}</span>
					{i + 1 < paths.length && <span className={class_separator}>{separator}</span>}
				</span>
			))}
		</Block>
	);
};

export default PureBreadcrumb;
