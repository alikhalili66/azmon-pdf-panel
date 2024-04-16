import { useRouter } from 'next/router';

import { page_home } from '@context';
import { PrimaryButton, PrimaryCard } from '@attom';

export type HomeProps = Props_Block & {};

export const Home = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: HomeProps) => {
	const { state } = page_home.useContext();

	const router = useRouter();

	const changeRoute = (route: string) => {
		router.push(`${route}${window?.location?.search || ''}`);
	};

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
			<div className='flex items-center justify-between p-10'>
				<PrimaryButton content='جوابدهی آزمایشگاه' onClick={() => changeRoute('/tests')} />
				<PrimaryButton content='جوابدهی بیمار' onClick={() => changeRoute('/test')} />
			</div>
		</PrimaryCard>
	);
};
export default Home;
