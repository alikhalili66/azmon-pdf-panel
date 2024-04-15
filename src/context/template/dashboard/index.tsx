import { createContext } from '../../create-context';

export type InitState = { activeSubRoute: string; collapseNav: boolean; collapseMobileNav: boolean };

export const initState: InitState = {
	activeSubRoute: '',
	collapseMobileNav: false,
	collapseNav: false,
};

export const { useContext, Provider } = createContext<InitState>(initState);

export * from './actions';
