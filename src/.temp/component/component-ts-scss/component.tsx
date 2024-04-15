import React from 'react';

import CS from './component.module.scss';

export type ComponentProps = {
	children?: React.JSX.Element[] | null;
	// ui
	boxProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
};

export const Component = ({
	children,
	//ui
	boxProps,
}: ComponentProps) => {
	return (
		<div {...boxProps} className={`${boxProps?.className || ''} ${CS.container}`}>
			Component
			{children}
		</div>
	);
};
