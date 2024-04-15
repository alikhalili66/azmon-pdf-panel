import { Block } from '@attom';
import { icons } from '@data';
import { universal_app } from '@context';

import CS from './toggle-theme-button.module.scss';

export const ToggleThemeButton = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	const { state } = universal_app.useContext();
	const { theme } = state;

	const { setTheme } = universal_app.useActions();

	const toggleTheme = () => {
		const changedTo = (theme === 'dark' && 'light') || (theme === 'light' && 'dark') || '';
		setTheme({ theme: changedTo });
	};
	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSize={boxSize} boxSpace={boxSpace}>
			<span>شب</span>
			<div className={CS.toggleButton} data-theme={theme} onClick={toggleTheme}>
				<span className={CS.icon}>
					<img src={theme === 'dark' ? icons.moon.src : icons.sun.src} alt='icon' height={20} />
				</span>
			</div>
			<span>روز</span>
		</Block>
	);
};
