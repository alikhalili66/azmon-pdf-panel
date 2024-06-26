/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

type Devices = 'sm' | 'md' | 'lg' | 'xl';
type Config = { mobileFirst: boolean; exact: boolean };

export const useBreakpoint = (allowDevice: Devices | null = null, config: Config = { mobileFirst: true, exact: false }) => {
	const breakPoints = {
		sm: { name: 'sm', value: 576 },
		md: { name: 'md', value: 768 },
		lg: { name: 'lg', value: 992 },
		xl: { name: 'xl', value: 1200 },
	};

	const breakPointsArray = Object.values(breakPoints).map((item) => item);

	const mobileFirst = config?.mobileFirst || null;
	const exact = config?.exact || null;

	const calcWidth = () => document.body.clientWidth;

	const calcBreakPoint = () => {
		for (let i = breakPointsArray.length - 1; i >= 0; i--) {
			if (breakPointsArray[i] && calcWidth() >= breakPointsArray[i].value) return breakPointsArray[i].name;
		}
		return breakPointsArray[0];
	};

	const calcAllowDevice = (w, br) => {
		if (allowDevice && breakPoints[allowDevice] && br) {
			if (exact) return br === allowDevice;
			else if (mobileFirst) return w >= breakPoints[allowDevice].value;
			else return w < breakPoints[allowDevice].value;
		}
	};

	const calc = () => {
		const w = calcWidth();
		if (w) setWidth(w);

		const br = calcBreakPoint();
		if (br) setBreakPoint(br);

		const allow = calcAllowDevice(w, br);
		setAllowToDevice(allow);
	};
	const [breakPoint, setBreakPoint] = useState(typeof window !== 'undefined' ? calcBreakPoint : null);
	const [width, setWidth] = useState(typeof window !== 'undefined' ? calcWidth : 0);
	const [allowToDevice, setAllowToDevice] = useState(
		typeof window !== 'undefined' ? () => calcAllowDevice(calcWidth(), calcBreakPoint()) : null,
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const resizeEventListener = window.addEventListener('resize', calc);

			return () => {
				(window as any).removeEventListener('resize', resizeEventListener, false);
			};
		}
	}, []);

	return { breakPoint, width, allowToDevice };
};
