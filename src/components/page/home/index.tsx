import { page_home } from '@context';

import { PrimaryCard } from '@attom';

export type HomeProps = Props_Block & {};

export const Home = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: HomeProps) => {
	const { state } = page_home.useContext();

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
			<div>home page</div>
		</PrimaryCard>
	);
};
export default Home;
