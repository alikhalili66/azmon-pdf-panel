import { page_userReception } from '@context';

import { PrimaryCard } from '@attom';

import { Login, FetchReceptions, GetReception } from './components';

export type UserReceptionProps = Props_Block & {};

export const UserReception = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: UserReceptionProps) => {
	const { state } = page_userReception.useContext();
	const { login, getReception } = state;

	const isSuccessAuth = login?.$login?.Success || login?.$login?.Message === 'پذیرشی برای مرکز یافت نشده است';

	//render pages
	const login_render = !isSuccessAuth;
	const fetchReceptions_render = !login_render;

	//render modals
	const getReception_render = fetchReceptions_render && getReception?.selectedItem;

	return (
		<PrimaryCard
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			loading={false}
			loadingType={() => <div className='min-h-[100px] flex items-center justify-center'>loading...</div>}
			transparent
			{...props}
		>
			{login_render && <Login />}
			{fetchReceptions_render && <FetchReceptions />}
			{getReception_render && <GetReception />}
		</PrimaryCard>
	);
};
export default UserReception;
