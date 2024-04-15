import { createContext } from '../../create-context';

export type InitState = {
	[key: string]: any;

	type: string | null;
	token: null | string;
};

export const initState: InitState = {
	type: null,
	token: null,
};

export const { useContext, Provider } = createContext<InitState>(initState);

export * from './actions';
