import React from 'react';

export type BlockProps = Props_Block & {
	inlineBlock?: boolean;
};

export const Block = ({
	children,

	boxClass = '', // custom class
	boxSize = '', // width & height
	boxSpace = '', // padding & margin

	inlineBlock,
	...props
}: BlockProps) => {
	return inlineBlock ? (
		<span className={`inline-block ${boxClass} ${boxSize} ${boxSpace}`} {...props}>
			{children}
		</span>
	) : (
		<div className={`${boxClass} ${boxSize} ${boxSpace}`} {...props}>
			{children}
		</div>
	);
};

export default Block;

// import React from 'react';

// export type BlockProps = {
// 	children?: React.JSX.Element | any;
// 	boxProps?: React.HtmlHTMLAttributes<HTMLElement> & {
// 		[key: string]: any;
// 	};
// };

// export const Block = ({
// 	//
// 	children,
// 	boxProps = {},
// }: BlockProps) => {
// 	return <div {...boxProps}>{children}</div>;
// };

// export default Block;

// export type PrimaryCardProps = Props_PrimaryCard & {
// 	children?: React.JSX.Element | any;
// 	boxProps?: React.HtmlHTMLAttributes<HTMLElement> & {
// 		[key: string]: any;
// 	};
// 	elProps?: React.HtmlHTMLAttributes<HTMLElement> & {
// 		[key: string]: any;
// 	};
// };
