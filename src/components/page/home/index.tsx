import { useRouter } from 'next/router';

import { page_home } from '@context';
import { PrimaryButton, PrimaryCard } from '@attom';
import { LabCard } from '@molecule';

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
			<div className='pt-[70px] flex items-center justify-center gap-2 text-primary-2 text-[24px]'>
				<div className='font-[500]'>آزمایشگاه های تحت مدیریت</div>
				<div className='relative flex flex-col'>
					<span className='font-bold'>دکتر حسین کیوانی</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 500 150'
						preserveAspectRatio='none'
						// className='absolute top-[50%] left-[50%] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] overflow-visible translate-x-[-50%] translate-y-[-50%]'
						className='absolute top-[50%] w-[100%] h-[20px] opacity-50'
					>
						<path d='M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7'></path>
					</svg>
				</div>
			</div>

			<div className='pt-[50px]'>
				<div className='flex items-center justify-center text-primary-3 text-[24px] font-[500]'>
					آزمایشگاه های تخصصی پاتوبیولوژی
				</div>

				<div className='grid grid-cols-12 gap-4 py-4'>
					<LabCard boxSize='col-span-12 lg:col-span-6' />
					<LabCard boxSize='col-span-12 lg:col-span-6' />
				</div>
			</div>

			<div className='flex items-center justify-between p-10'>
				<PrimaryButton content='جوابدهی آزمایشگاه' onClick={() => changeRoute('/tests')} />
				<PrimaryButton content='جوابدهی بیمار' onClick={() => changeRoute('/test')} />
			</div>
		</PrimaryCard>
	);
};
export default Home;
