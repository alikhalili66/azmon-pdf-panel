import { Block } from '@attom';
import { template_dashboard } from '@context';

import { Header, MobileNav, SideNav } from './components';

type RenderProps = Props_Block & {};

export const Render = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}: RenderProps) => {
	const { state } = template_dashboard.useContext();
	const { collapseNav, collapseMobileNav } = state;

	const routes = [
		{
			name: 'داشبورد',
			path: '/dashboard',
			awesomeIcon: 'dashboard',
			activePath: /^\/dashboard\W$/,
			inSideNav: true,
			subRoutes: null,
		},
		{
			name: 'داشبورد',
			path: '/dashboard',
			awesomeIcon: 'dashboard',
			activePath: /^\/dashboard2\W$/,
			inSideNav: true,
			subRoutes: null,
		},
		{
			name: 'example',
			path: '/example',
			awesomeIcon: 'dashboard',
			activePath: /^\/example\W$/,
			inSideNav: true,
			subRoutes: null,
		},
	];

	return (
		<Block boxClass={`${boxClass} text-text-primary bg-background-primary overflow-hidden`} boxSize={boxSize} boxSpace={boxSpace}>
			<Header boxClass={`bg-background-secondary fixed top-[0px] right-[0px] left-[0px] z-[997]`} />
			<div className={`pt-[80px] min-h-[100vh] flex app-wrapper`}>
				<SideNav
					boxClass={`bg-background-secondary w-[0px] md:w-[85px] shrink-0 ${collapseNav ? '' : 'lg:w-[225px]'}`}
					routes={routes}
				/>

				<div
					className={`py-[20px] px-[15px] w-[100vw] md:w-[calc(100vw_-_85px)] ${collapseNav ? 'lg:w-[calc(100vw_-_225px)' : ''}`}
				>
					{children}
				</div>
			</div>
			{!collapseMobileNav && (
				<MobileNav boxClass={`fixed z-[997] top-[80px] right-0 h-[calc(100vh_-_80px)] w-[100vw]`} routes={routes} />
			)}
		</Block>
	);
};

export default Render;
