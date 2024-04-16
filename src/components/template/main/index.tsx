import { Block } from '@attom';
import { template_main } from '@context';
import { images } from '@data';
import { useRouter } from 'next/router';

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
	const goToPath = () => {};

	const linkClassname =
		'px-6 min-h-[40px] min-w-[80px] flex items-center rounded-full justify-center hover-link text-text-secondary hover:text-primary-2 cursor-pointer';

	return (
		<Block
			boxClass={`${boxClass} text-text-primary bg-background-tertiary overflow-y-hidden min-h-[100vh]`}
			boxSize={boxSize}
			boxSpace={boxSpace}
		>
			{/* Header */}
			<div className='home-container pt-[20px]'>
				<div className='rounded-[22px] min-h-[100px] header-shadow flex items-center justify-between gap-4 p-4'>
					<img
						alt=''
						src={images.logo_homezhans?.src}
						className=' cursor-pointer h-[60px]'
						onClick={() => goToLink('https://homzhans.com/')}
					/>

					<div className='grow flex items-center justify-center gap-2'>
						<div
							className={`${linkClassname}`}
							onClick={() =>
								goToLink(
									'https://www.homzhans.com/services/?_gl=1*ldjj9m*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjAuMTcxMzI2NTI4My4wLjAuMA..',
								)
							}
						>
							خدمات
						</div>
						<div
							className={`${linkClassname}`}
							onClick={() =>
								goToLink(
									'https://www.homzhans.com/labs/?_gl=1*14eqc6p*_ga*NjM1MDE4MjE5LjE3MTMyNjUyODQ.*_ga_ZE3HE6CNNY*MTcxMzI2NTI4My4xLjAuMTcxMzI2NTI4My4wLjAuMA..',
								)
							}
						>
							جوابدهی
						</div>
						<div className={`${linkClassname}`} onClick={() => goToLink('https://homzhans.com/services/test-at-home/')}>
							تست در منزل
						</div>
						<div className={`${linkClassname}`} onClick={() => goToLink('https://homzhans.com/services/doctor-at-home/')}>
							پزشک در منزل
						</div>
						<div className={`${linkClassname}`} onClick={() => goToLink('https://homzhans.com/services/counseling/')}>
							مشاوره رایگان
						</div>
						<div className={`${linkClassname}`} onClick={() => goToLink('https://keyvanlab.com/blog')}>
							مجله سلامت
						</div>
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
		</Block>
	);
};

export default MainTemplate;
