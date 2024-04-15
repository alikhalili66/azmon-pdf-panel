import { ReactNode } from 'react';

import { Block, ContentFailed, ContentLoader, PageLoader } from '@attom';

export type PrimaryCardProps = Props_PrimaryCard & {
	bgColor?: string;
	textColor?: string;
	loading?: boolean;
	status?: 'init' | 'loading' | 'fail' | 'ok' | undefined;
	loadingType?: 'pageLoader' | 'container' | (() => ReactNode) | null;
	onReload?: (() => any) | null;
	notFound?: boolean;
	notFoundEl?: (() => ReactNode) | string | null;
	transparent?: boolean;
	shadow?: boolean;
	border?: boolean;
	rounded?: boolean;
	hoverStyle?: boolean;
};

export const PrimaryCard = ({
	children,
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// el control
	elClass = '',
	elSpace = '',
	bgColor = 'bg-background-secondary',
	textColor = '',
	// status control:
	status = undefined,
	loading = false,
	loadingType = 'container',
	onReload = null,
	notFound = false,
	notFoundEl = 'موردی یافت نشد',
	//features
	transparent = false,
	shadow = false,
	border = false,
	rounded = false,
	hoverStyle = false,

	...props
}: PrimaryCardProps) => {
	//__________** ClassNames **__________//
	const features = {
		loading: { enable: loading || status === 'loading', classname: `${loadingType ? 'pointer-events-none' : ''}` },
		fail: { enable: status === 'fail', classname: 'opacity-50' },
		shadow: { enable: shadow, classname: 'shadow-md' },
		border: { enable: border, classname: 'border' },
		rounded: { enable: rounded, classname: 'rounded-lg' },
		hoverStyle: { enable: hoverStyle, classname: '' },
	};

	const featuresClassnames = Object.values(features).reduce(
		(result = '', currentValue) => (currentValue.enable ? `${result} ${currentValue.classname}` : result),
		'',
	);

	//__________** Loading **__________//
	const isLoading = loading || status === 'loading';
	const loadingEl = isLoading
		? (loadingType === 'container' && <ContentLoader />) || (loadingType === 'pageLoader' && <PageLoader />) || null
		: null;

	//__________** Fail **__________//
	const isFail = !loading && status === 'fail';
	const failEl = isFail ? <ContentFailed onReload={onReload} /> : null;

	//__________** Not Found **__________//
	const isNotFound =
		status && status === 'ok' && notFound && (typeof notFoundEl === 'string' || typeof notFoundEl === 'function');
	const notFoundElRender =
		(typeof notFoundEl === 'string' && <div className='h-[100px] flex items-center justify-center'>{notFoundEl}</div>) ||
		(typeof notFoundEl === 'function' && notFoundEl());

	//__________** Children **__________//
	const childrenEl = isLoading && typeof loadingType === 'function' ? loadingType() : children;

	return (
		<Block boxClass={`${boxClass} relative`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			{loadingEl}
			{failEl}
			<div
				className={`${elClass} ${elSpace} ${textColor} ${transparent ? 'bg-transparent' : bgColor} ${featuresClassnames} w-full `}
			>
				{isNotFound ? notFoundElRender : childrenEl}
			</div>
		</Block>
	);
};

export default PrimaryCard;
