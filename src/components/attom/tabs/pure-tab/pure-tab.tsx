import { ReactNode, useEffect, useState } from 'react';

import { Block } from '@attom';

export type PureTabProps = Props_Block & {
	headers?: string[] | (() => ReactNode)[];
	activeTabIndex?: number | null;
	controlledTab?: boolean;
	onSelect?: null | ((index: number) => any);
	headerClass?: string;
	headerBgColor?: string;
	headerItemClass?: string;
	headerItemDeactiveClass?: string;
	headerItemActiveClass?: string;
	bodyClass?: string;
};

export const PureTab = ({
	children,
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// custom props:
	headers = [],
	activeTabIndex = 0,
	controlledTab = false,
	onSelect = null,
	// styles
	headerClass = '',
	headerBgColor = '',

	headerItemClass = '',
	headerItemDeactiveClass = '',
	headerItemActiveClass = '',

	bodyClass = '',

	...props
}: PureTabProps) => {
	//
	const [activeIndex, setActiveIndex] = useState(activeTabIndex || (controlledTab ? null : 0));

	useEffect(() => {
		if (controlledTab) setActiveIndex(activeTabIndex);
	}, [activeTabIndex, controlledTab]);

	const selectHandler = (i) => {
		if (!controlledTab) setActiveIndex(i);
		else if (controlledTab && onSelect) onSelect(i);
	};

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={`${headerClass} ${headerBgColor}`}>
				{headers.map((title, i) => (
					<div
						key={i}
						onClick={() => selectHandler(i)}
						className={`${headerItemClass} ${i === activeIndex ? headerItemActiveClass : headerItemDeactiveClass}`}
					>
						{typeof title === 'function' ? title() : title}
					</div>
				))}
			</div>
			<div className={bodyClass}>{(children && activeIndex !== null && children[activeIndex]) || null}</div>
		</Block>
	);
};

export default PureTab;
