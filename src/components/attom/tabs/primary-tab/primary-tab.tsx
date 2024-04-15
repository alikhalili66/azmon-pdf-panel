import { PureTab, PureTabProps } from '@attom';

export const PrimaryTab = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	// custom props:
	headers = [],
	activeTabIndex = 0,
	controlledTab = false,
	//style
	headerClass = 'gap-3 p-3',
	headerBgColor = 'bg-[#aaa]',
	headerItemClass = 'p-3 border-b',
	headerItemActiveClass = 'border-[#00f]',
	headerItemDeactiveClass = 'border-[#f00]',
	bodyClass = '',

	...props
}: PureTabProps) => {
	return (
		<PureTab
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			headers={headers}
			activeTabIndex={activeTabIndex}
			controlledTab={controlledTab}
			headerClass={`${headerClass} flex items-center`}
			headerBgColor={headerBgColor}
			headerItemActiveClass={headerItemActiveClass}
			headerItemDeactiveClass={headerItemDeactiveClass}
			headerItemClass={`${headerItemClass} grow cursor-pointer select-none`}
			bodyClass={`${bodyClass}`}
			{...props}
		>
			{children}
		</PureTab>
	);
};

export default PrimaryTab;
