import { useRef, useState } from 'react';

import { useDidMount } from '@hooks';

export type PureModalProps = {
	backdropClass?: string;
	backdropSpace?: string;
	backdropBgColor?: string;
	boxClass?: string;
	boxSize?: string;
	boxSpace?: string;
	boxBgColor?: string;
	closeIconClass?: string;
	closeIconPosition?: string;
	closeIconTextColor?: string;
	fullscreenIconClass?: string;
	fullscreenIconPosition?: string;
	fullscreenIconTextColor?: string;
	enterAnimation?: string;
	leaveAnimation?: string;
	onClose?: null | (() => any);
	onCloseDisabled?: boolean;
	render?: (onClose: () => any) => any;
	backdropDisable?: boolean;
	hideCloseIcon?: boolean;
	disableOverflowY?: boolean;
	fullscreenEnable?: boolean;

	[key: string]: any;
};

export const PureModal = ({
	children,

	backdropClass = '',
	backdropSpace = '',
	backdropBgColor = 'bg-[#4448]',

	boxClass = '',
	boxSize = 'max-h-[90vh] min-h-[50px] max-w-[95vw] min-w-[90vw] sm:min-w-[90vw] md:min-w-[80vw] lg:min-w-[50vw]',
	boxSpace = '',
	boxBgColor = 'bg-background-secondary',

	closeIconClass = '',
	closeIconPosition = 'left-4 top-4',
	closeIconTextColor = '',
	fullscreenIconClass = '',
	fullscreenIconPosition = 'left-10 top-4',
	fullscreenIconTextColor = '',

	enterAnimation = 'animate-modal-enter',
	leaveAnimation = 'animate-modal-leave',

	onClose = null,
	onCloseDisabled = false,
	render = undefined,
	backdropDisable = false,
	hideCloseIcon = false,
	disableOverflowY = false,
	fullscreenEnable = false,

	...props
}: PureModalProps) => {
	const ref: any = useRef();

	const [fullscreen, setFullscreen] = useState(false);

	const backdropCloseHandler = (e) => {
		if (!onCloseDisabled && !backdropDisable && ref.current && !ref.current.contains(e.target) && onClose) closeHandler();
	};

	const closeHandler = () => {
		if (!onClose || onCloseDisabled) return;
		ref?.current?.parentElement && leaveAnimation && ref.current.parentElement.classList.add(leaveAnimation);
		setTimeout(() => {
			onClose();
		}, 500);
	};

	useDidMount(() => {
		const body: any = document.querySelector('body');
		body.classList.add('overflow-hidden');
		return () => {
			body.classList.remove('overflow-hidden');
		};
	});

	return (
		<div
			className={`${backdropClass} ${backdropSpace} ${backdropBgColor} ${enterAnimation} fixed z-[999] top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center overflow-hidden backdrop-blur-md`}
			onClick={backdropCloseHandler}
		>
			<div
				className={`${boxClass} ${fullscreen ? 'w-[100vw] h-[100vh] top-0 left-0' : boxSize} ${boxSpace} ${boxBgColor}  ${
					disableOverflowY ? '' : 'overflow-y-auto'
				} ${fullscreen ? 'fixed' : 'relative'} rounded app-scrollbar`}
				ref={ref}
				{...props}
			>
				{!hideCloseIcon && onClose && (
					<i
						className={`${closeIconClass} ${closeIconPosition} ${closeIconTextColor} fa fa-close absolute z-[999] text-lg font-normal opacity-50 cursor-pointer hover:opacity-100 select-none`}
						onClick={closeHandler}
					/>
				)}
				{fullscreenEnable && (
					<i
						className={`${fullscreenIconClass} ${fullscreenIconPosition} ${fullscreenIconTextColor} fa ${
							fullscreen ? 'fa-window-restore' : 'fa-window-maximize'
						} absolute z-[999] text-lg font-normal opacity-50 cursor-pointer hover:opacity-100 select-none`}
						onClick={() => setFullscreen(!fullscreen)}
					/>
				)}
				{children}
				{render && render(closeHandler || undefined)}
			</div>
		</div>
	);
};

export default PureModal;
