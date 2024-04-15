import { Block } from '@attom';
import { template_dashboard } from '@context';
import { ToggleThemeButton } from '@molecule';

type HeaderProps = Props_Block & {};

export const Header = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}: HeaderProps) => {
	const { state, overWrite } = template_dashboard.useContext();
	const { collapseNav, collapseMobileNav } = state;

	const toggleCollapseNav = () => overWrite({ scope: '', value: { collapseNav: !collapseNav } });
	const toggleCollapseMobileNav = () => overWrite({ scope: '', value: { collapseMobileNav: !collapseMobileNav } });

	return (
		<Block boxClass={`${boxClass}`} boxSize={boxSize} boxSpace={boxSpace}>
			<div className={`select-none h-[80px] flex items-center justify-start app-wrapper`}>
				{/* Desktop icon Box */}
				<div
					className={`h-full w-[85px] shrink-0 hidden items-center justify-center md:flex md:border-l-[5px] md:border-background-primary md:w-[90px] ${
						collapseNav ? '' : 'lg:border-l-0 w-[85px]'
					}`}
				>
					<i
						className={`fa fa-align-justify cursor-pointer text-text-secondary !text-[25px] ${
							collapseNav ? '' : 'lg:text-text-primary'
						}`}
						onClick={toggleCollapseNav}
					/>
				</div>
				{/* Mobile icon Box */}
				<div className={`h-full w-[85px] shrink-0 flex items-center justify-center md:hidden`}>
					<i
						className={`fa fa-align-justify cursor-pointer text-text-secondary !text-[25px] ${
							collapseMobileNav ? '' : 'text-text-primary'
						}`}
						onClick={toggleCollapseMobileNav}
					/>
				</div>
				{/* Other */}
				<div className='px-4 grow flex items-center justify-start'>
					<span>لگو و نام سایت</span>
					<ToggleThemeButton boxClass='mr-auto' />
				</div>
			</div>
		</Block>
	);
};
