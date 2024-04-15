import React from 'react';

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
		<div {...boxProps} className={`${boxProps?.className || ''}`}>
			Component
			{children}
		</div>
	);
};
