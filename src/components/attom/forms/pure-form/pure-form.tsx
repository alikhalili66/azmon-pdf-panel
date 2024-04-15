export type PureFormProps = Props_Block & {};

export const PureForm = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	...props
}: PureFormProps) => {
	return (
		<form className={`${boxClass} ${boxSize} ${boxSpace}`} onSubmit={(e) => e.preventDefault()} {...props}>
			{children}
		</form>
	);
};

export default PureForm;
