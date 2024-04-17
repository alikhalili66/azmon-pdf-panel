import { useRouter } from 'next/router';

import { page_home } from '@context';
import { PrimaryButton, PrimaryCard } from '@attom';
import { LabCard } from '@molecule';
import { images } from '@data';

export type HomeProps = Props_Block & {};

export const Home = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = 'pb-[80px]',

	...props
}: HomeProps) => {
	const { state } = page_home.useContext();

	const router = useRouter();

	const changeRoute = (route: string) => {
		router.push(`${route}${window?.location?.search || ''}`);
	};

	const goToLink = (link: string) => {
		window?.open(link, '_blank');
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

			<div className='pt-[40px]'>
				<div className='flex items-center justify-center text-primary-3 text-[24px] font-[500]'>
					آزمایشگاه های تخصصی پاتوبیولوژی
				</div>

				<div className='grid grid-cols-12 gap-4 py-4'>
					<LabCard
						boxSize='col-span-12 lg:col-span-6'
						logo={images.labNegin?.src || ''}
						name='آزمایشگاه تخصصی نگین آزادی'
						phone='58717 021'
						address='تهران، تقاطع خیابان آزادی، نبش کوچه اسکندری شمالی، پلاک 149، طبقه-5'
						testOnClick={() => changeRoute('/test')}
						testsOnClick={() => changeRoute('/tests')}
						bioOnClick={() =>
							goToLink(
								'https://www.homzhans.com/neginazadi/?_gl=1*2cyfbc*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjEuMTcxMzI2ODkyOS4wLjAuMA..',
							)
						}
					/>
					<LabCard
						boxSize='col-span-12 lg:col-span-6'
						logo={images?.labEmdad?.src || ''}
						name='آزمایشگاه تخصصی پاتوبیولوژی امدادگران'
						address='تهران، بزرگراه شهید سلیمانی( رسالت)غرب به شرق، پیش از دور برگردان دنیای نور، نبش کوچه ترک، مجتمع پزشکی امدادگران، طبقه پنجم'
						phone='58717 021'
						testOnClick={() => changeRoute('/test')}
						testsOnClick={() => changeRoute('/tests')}
						bioOnClick={() =>
							goToLink(
								'https://www.homzhans.com/bio/?_gl=1*2cyfbc*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjEuMTcxMzI2ODkyOS4wLjAuMA..',
							)
						}
					/>
				</div>
			</div>

			<div className='pt-[40px]'>
				<div className='flex items-center justify-center text-primary-3 text-[24px] font-[500]'>
					آزمایشگاه های تخصصی ویروس شناسی
				</div>

				<div className='grid grid-cols-12 gap-4 py-4'>
					<LabCard
						boxSize='col-span-12 lg:col-span-6'
						logo={images.labKeyvan?.src || ''}
						name='آزمایشگاه تخصصی ویروس شناسی کیوان'
						phone='58717 021'
						address='تهران، خیابان شهید بهشتی (عباس‌آباد)، بعد از سینما آزادی، به طرف خیابان ولیعصر، پلاک 498 طبقه همکف'
						testOnClick={() => changeRoute('/test')}
						testsOnClick={() => changeRoute('/tests')}
						bioOnClick={() =>
							goToLink(
								'https://www.homzhans.com/keyvan/?_gl=1*3ma4v6*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI3MTAyNy4yLjEuMTcxMzI3MTM5Ni4wLjAuMA..',
							)
						}
					/>
					<LabCard
						boxSize='col-span-12 lg:col-span-6'
						logo={images?.labMihan?.src || ''}
						name='آزمایشگاه تخصصی ویروس شناسی میهن'
						address='تهران، خیابان شهید کلاهدوز( دولت)، بین دیباجی جنوبی و چهارراه قنات، ساختمان پزشکان مهر، پلاک 221، واحد 12'
						phone='58717 021'
						testOnClick={() => changeRoute('/test')}
						testsOnClick={() => changeRoute('/tests')}
						bioOnClick={() =>
							goToLink(
								'https://www.homzhans.com/bio/?_gl=1*1t5z5gl*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI3MTAyNy4yLjEuMTcxMzI3MTM5Ni4wLjAuMA..',
							)
						}
					/>
				</div>

				{/*  */}

				<div className='grid grid-cols-12 pt-[50px]'>
					<div className='col-span-12 md:col-span-6 relative pt-[5%]'>
						<div className='min-h-[90%] rounded-r-[26px] p-4 bg-[#f7f7f7]'>
							<div className='text-center flex flex-col gap-2 items-center justify-center'>
								<img className='h-[100px]' alt='' src={images?.logo_homezhansName?.src} />
								<div className='text-primary-3 text-[20px] font-[500]'>هومژانس؛ همراه شما در روز های سخت</div>
							</div>

							<div className='flex items-center justify-center pt-[20px]'>
								<div
									className='text-[16px] flex items-center justify-center gap-5 px-5 bg-primary-1 hover:bg-primary-2 min-h-[50px] rounded-full  text-[#fff] cursor-pointer'
									onClick={() => changeRoute('/test')}
								>
									<span>مشاهده نتیجه آزمایشگاه</span>
									<i className='fa fa-send' />
								</div>
							</div>

							<div className='text-center pt-[25px] text-text-secondary'>به راهنمایی نیاز داری؟ با ما تماس بگیر.</div>

							<div className='grid grid-cols-12 gap-2 text-text-secondary pt-[10px]'>
								<div className='col-span-12 md:col-span-4 flex items-center justify-center gap-2'>
									<i className='fa fa-phone text-primary-3 !text-[16px]' />
									<span className='text-[14px]'>58717 021</span>
								</div>
								<div className='col-span-12 md:col-span-4 flex items-center justify-center gap-2 border-r border-r-[#0003]'>
									<i className='fa fa-inbox text-primary-3 !text-[16px]' />
									<span className='text-[14px]'>info@homzhans.com</span>
								</div>
								<div className='col-span-12 md:col-span-4 flex items-center justify-center gap-2 border-r border-r-[#0003]'>
									<i className='fa fa-dot-circle-o text-primary-3 !text-[16px]' />
									<span className='text-[14px]'>HomZhans@</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-12 md:col-span-6 relative'>
						<img className='w-full rounded-[26px]' alt='' src={images.mapLabs?.src || ''} />

						<span className='bg-danger w-4 h-4 rounded-full absolute top-[7%] right-[39%] flex items-center justify-center'>
							<span className='bg-danger rounded-full w-4 h-4 animate-ping'></span>
						</span>
						<span className='bg-danger w-4 h-4 rounded-full absolute top-[39%] right-[31%] flex items-center justify-center'>
							<span className='bg-danger rounded-full w-4 h-4 animate-ping'></span>
						</span>
						<span className='bg-danger w-4 h-4 rounded-full absolute top-[49%] right-[60%] flex items-center justify-center'>
							<span className='bg-danger rounded-full w-4 h-4 animate-ping'></span>
						</span>
						<span className='bg-danger w-4 h-4 rounded-full absolute top-[68%] right-[73%] flex items-center justify-center'>
							<span className='bg-danger rounded-full w-4 h-4 animate-ping'></span>
						</span>
					</div>
				</div>
			</div>
		</PrimaryCard>
	);
};
export default Home;
