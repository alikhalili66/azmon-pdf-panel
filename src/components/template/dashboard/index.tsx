import { useRouter } from 'next/router';

import { useAccessibility } from '@hooks';
import { PageLoader } from '@attom';
import { template_dashboard } from '@context';

import { Render } from './render';

export const DashboardTemplate = ({ children }) => {
	// const { allow } = useAccessibility(['A', 'S', 'U'], {});
	const allow = true;

	const router = useRouter();

	return (
		<template_dashboard.Provider>{allow === true ? <Render>{children}</Render> : <PageLoader />} </template_dashboard.Provider>
	);
};

export default DashboardTemplate;
