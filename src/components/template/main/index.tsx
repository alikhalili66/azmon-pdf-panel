import { useRouter } from 'next/router';

import { Block } from '@attom';
import { template_main } from '@context';
import { images } from '@data';

type MainTemplateProps = Props_Block & {};

export const MainTemplate = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}: MainTemplateProps) => {
	const { state } = template_main.useContext();
	const {} = state;

	const router = useRouter();

	const goToLink = (link: string) => {
		window?.open(link, '_blank');
	};
	const goToPath = (path: string) => {
		router.push(`${path}${window?.location?.search || ''}`);
	};

	const linkClassname =
		'px-6 min-h-[40px] min-w-[80px] flex items-center rounded-full justify-center hover-link text-text-secondary hover:text-primary-2 cursor-pointer';

	const navLinks = [
		//
		{
			name: 'خدمات',
			url: "'https://www.homzhans.com/services/?_gl=1*ldjj9m*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjAuMTcxMzI2NTI4My4wLjAuMA..',",
			path: '',
		},
		{
			name: 'جوابدهی',
			url: 'https://www.homzhans.com/labs/?_gl=1*14eqc6p*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjAuMTcxMzI2NTI4My4wLjAuMA..',
			subLinks: [
				{ name: 'جوابدهی گروهی', path: '/tests' },
				{ name: 'جوابدهی شخصی', path: '/test' },
			],
		},
		{ name: 'تست در منزل', url: 'https://homzhans.com/services/test-at-home/' },
		{ name: 'پزشک در منزل', url: 'https://homzhans.com/services/doctor-at-home/' },
		{
			name: 'مشاوره رایگان',
			url: 'https://homzhans.com/services/counseling/',
			subLinks: [
				{ name: 'مشاوره پزشکی', url: 'https://homzhans.com/services/medical-counseling/' },
				{ name: 'مشاوره روانشناسی', url: 'https://homzhans.com/services/psychological-counseling/' },
			],
		},
		{ name: 'مجله سلامت', url: 'https://keyvanlab.com/blog' },
	];

	return (
		<Block
			boxClass={`${boxClass} text-text-primary bg-background-tertiary overflow-y-hidden min-h-[100vh]`}
			boxSize={boxSize}
			boxSpace={boxSpace}
		>
			{/* Header */}
			<div className='home-container pt-[20px]'>
				<div className='rounded-[28px] min-h-[100px] header-shadow flex items-center justify-between gap-4 py-2 px-5'>
					<img
						alt=''
						src={images.logo_homezhans?.src}
						className=' cursor-pointer h-[55px] pr-[30px]'
						onClick={() => goToLink('https://homzhans.com/')}
					/>

					<div className='grow flex items-center justify-center gap-2'>
						{navLinks.map((item, i) => (
							<div key={i} className='relative [&:hover_:last-child]:flex'>
								<div
									className='px-6 min-h-[40px] min-w-[80px] flex items-center rounded-full justify-center hover-link text-text-secondary hover:text-primary-2 cursor-pointer'
									onClick={() => {
										if (item?.url) goToLink(item?.url || '');
										if (item?.path) goToPath(item?.path || '');
									}}
								>
									<span>{item?.name || ''}</span>

									{item?.subLinks && item?.subLinks.length > 0 && <i className=' px-2 fa fa-angle-down !text-[20px]' />}
								</div>

								{item?.subLinks && item?.subLinks.length > 0 && (
									<div className='z-[2] hidden absolute top-[40px] min-w-full right-0 bg-background-tertiary border border-[#0001] rounded-[12px] p-4 flex-col items-center justify-center gap-3'>
										{item?.subLinks.map((item2, i2) => (
											<div
												key={i2}
												className='text-[14px] text-primary-3 cursor-pointer hover:font-bold py-3'
												onClick={() => {
													if (item2?.url) goToLink(item2?.url || '');
													if (item2?.path) goToPath(item2?.path || '');
												}}
											>
												{item2?.name || ''}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>

					<div
						className='rounded-full cursor-pointer bg-primary-2-20 hover:bg-primary-2 text-primary-2 hover:text-[#fff] p-2 min-w-[140px] min-h-[40px] flex items-center justify-center text-[16px]'
						onClick={() => goToLink('https://homzhans.com/contact')}
					>
						تماس با ما
					</div>
				</div>
			</div>

			{/* Body */}
			<div className='home-container'>{children}</div>

			{/* Footer */}
			<div>
				<div className='home-container'>
					{/* 1 */}
					<div className='rounded-[28px] min-h-[100px] bg-[#f7f7f7] flex items-center justify-around gap-4 p-4'>
						<div className='flex items-center justify-center flex-col gap-2'>
							<img alt='' src={images.service1?.src} className='h-[50px]' />
							<div className='text-[16px] font-[500] text-primary-3'>انجام مراحل در منزل</div>
						</div>
						<div className='flex items-center justify-center flex-col gap-2'>
							<img alt='' src={images.service2?.src} className='h-[50px]' />
							<div className='text-[16px] font-[500] text-primary-3'>تحویل سریع</div>
						</div>
						<div className='flex items-center justify-center flex-col gap-2'>
							<img alt='' src={images.service3?.src} className='h-[50px]' />
							<div className='text-[16px] font-[500] text-primary-3'>پشتیبانی تمام وقت</div>
						</div>
						<div className='flex items-center justify-center flex-col gap-2'>
							<img alt='' src={images.service4?.src} className='h-[50px]' />
							<div className='text-[16px] font-[500] text-primary-3'>پزشک در منزل</div>
						</div>
					</div>
					{/* 2 */}
					<div className='pt-[30px] grid grid-cols-12 gap-6'>
						<div className='col-span-12 md:col-span-6'>
							<img alt='' src={images.logo_homezhans?.src} className='h-[80px]' />
							<div className='font-bold text-[20px] text-primary-3 pt-[10px]'>هومژانس؛ همراه شما در بیماری</div>
							<div className='pt-[16px] text-[14px] text-text-tertiary'>
								تمامی خدمات پزشکی در منزل، اعم از تمامی آزمایشات، مشاوره آنلاین با پزشک، ویزیت پزشک در منزل، تزریقات در منزل و
								هرچیزی که فکر می‌کنید را از هومژانس بخواهید. تمامی خدمات به صورت آنلاین یا تلفنی و در کمترین زمان ممکن انجام خواهد
								شد.
							</div>
						</div>
						<div className='col-span-12 md:col-span-3'>
							<div className='text-[18px] font-[500] text-primary-3'>دسترسی سریع</div>

							<div className='flex flex-col gap-3 pt-[18px]'>
								{[
									{ name: 'صفحه اصلی', url: 'http://homzhans.com/' },
									{ name: 'تماس با ما', url: 'https://homzhans.com/contact/' },
									{ name: 'جوابدهی', url: 'https://homzhans.com/labs/' },
									{ name: 'مجله سلامت', url: 'http://homzhans.com/blog' },
									{ name: 'خدمات', url: 'https://homzhans.com/services/' },
								].map((item, i) => {
									return (
										<div
											key={i}
											className='flex items-center cursor-pointer gap-2 hover:font-bold'
											onClick={() => goToLink(item?.url)}
										>
											<i className='fa fa-dot-circle-o !text-[14px]' />
											<span className='text-text-tertiary text-[14px]'>{item.name || ''}</span>
										</div>
									);
								})}
							</div>
						</div>
						<div className='col-span-12 md:col-span-3'>
							<div className='text-[18px] font-[500] text-primary-3'>نماد های اعتماد</div>

							<div className='grid grid-cols-12 gap-6 pt-[20px]'>
								<div className='col-span-6 header-shadow rounded-[26px] bg-background-tertiary'>
									<img
										className='col-span-6 w-full'
										alt=''
										src='https://www.p30web.org/wp-content/uploads/2016/12/enamad_icon_text_color_blue_1024.png'
										loading='lazy'
									/>
								</div>
								<div className='col-span-6 header-shadow rounded-[26px] bg-background-tertiary'>
									<img
										className='col-span-6 w-full'
										alt=''
										src='https://www.p30web.org/wp-content/uploads/2016/12/enamad_icon_text_color_blue_1024.png'
										loading='lazy'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-[30px]'></div>
			</div>
		</Block>
	);
};

export default MainTemplate;
