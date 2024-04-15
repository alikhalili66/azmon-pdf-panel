import Link from 'next/link';
import { useRouter } from 'next/router';

import { Block } from '@attom';
import { template_dashboard } from '@context';

type MobileNavProps = Props_Block & { routes: any[] };

export const MobileNav = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	routes = [],
}: MobileNavProps) => {
	const { state, overWrite } = template_dashboard.useContext();
	const { collapseNav, collapseMobileNav, activeSubRoute } = state;

	const router = useRouter();

	const Li = ({ item, isSubItem = false, boxClass = '' }) => {
		const isActiveItem = item?.activePath.test(router.asPath) && item.name !== activeSubRoute;

		return (
			<>
				<li
					className={`${boxClass} flex min-h-[50px] relative cursor-pointer items-center gap-[10px] mt-[15px] py-[5px] justify-start pr-[5px] ${
						isActiveItem ? 'bg-background-primary' : ''
					}`}
					onClick={() =>
						item.subRoutes && overWrite({ scope: '', value: { activeSubRoute: item.name === activeSubRoute ? '' : item.name } })
					}
				>
					{item?.awesomeIcon && (
						<span
							className={`flex items-center justify-center h-12 w-12 ${
								isActiveItem ? 'text-text-primary bg-primary-1' : 'text-primary-1 bg-background-primary'
							} rounded-full border p-1 border-primary-1`}
						>
							<i className={`fa fa-${item.awesomeIcon} !text-[22px] ${collapseNav ? 'md-child-hidden' : ''} `} />
						</span>
					)}

					<span className={`inline-block`}>{item?.name || ''}</span>

					{item.subRoutes?.length > 0 && !collapseNav && (
						<span
							className={`hidden lg:flex h-[30px] w-[30px] text-center items-center justify-center font-bold absolute left-1 top-[calc(50%_-_15px)]`}
						>
							<i className={`fa ${item.name === activeSubRoute ? 'fa-angle-up' : 'fa-angle-down'}`} />
						</span>
					)}
				</li>

				{item.name === activeSubRoute && item.subRoutes?.length > 0 && (
					<div className={`contents`}>
						{item.subRoutes.map((subItem, i) => (
							<Link key={i} href={subItem?.path || ''} passHref>
								<Li
									item={subItem}
									isSubItem={true}
									boxClass={`opacity-80 ${collapseNav ? '' : 'lg:translate-x-[-5%] lg:scale-95'}`}
								/>
							</Link>
						))}
					</div>
				)}
			</>
		);
	};

	return (
		<Block boxClass={`${boxClass} backdrop-blur-[5px] bg-[#0002] md:hidden`} boxSize={boxSize} boxSpace={boxSpace}>
			<ul className={`w-[70vw] h-full overflow-y-auto py-[10px] bg-background-secondary border-[5px] border-background-primary`}>
				{routes.map(
					(item: any, i) =>
						item?.inSideNav && (
							<div key={i} className='contents'>
								{item?.path && !item?.subRoutes ? (
									<Link href={item?.path || ''} passHref>
										<Li item={item} />
									</Link>
								) : (
									<Li item={item} />
								)}
							</div>
						),
				)}
			</ul>
		</Block>
	);
};
