import { Block } from '@attom';

export type PrimaryPaginationProps = Props_Block & {
	onChange?: null | ((index: number) => any);
	pageSize?: number;
	pageIndex?: number;
	itemIndex?: number;
	total?: number;
	elClass?: string;
	bgColor?: string;
	borderColor?: string;
	buttonClass?: string;
	buttonBgColor?: string;
	buttonTextColor?: string;
	currentButtonBgColor?: string;
	currentTextColor?: string;
	jumpButtonBgColor?: string;
	jumpButtonTextColor?: string;
};

export const PrimaryPagination = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	onChange = null,
	pageSize = 10,
	pageIndex = 0,
	itemIndex = 0,
	total = 0,

	elClass = '',
	bgColor = 'bg-transparent',
	borderColor = 'border-[#6666]',

	buttonClass = 'p-1',

	buttonBgColor = 'bg-transparent',
	buttonTextColor = 'text-inherit',

	currentButtonBgColor = 'bg-[#669]',
	currentTextColor = 'text-[#fff]',

	jumpButtonBgColor = 'bg-[#fff3]',
	jumpButtonTextColor = 'text-inherit',

	...props
}: PrimaryPaginationProps) => {
	//

	const pageCount = Math.ceil(total / pageSize);
	const currentPage = pageIndex || Math.floor((itemIndex + pageSize - 1) / pageSize);

	const prevPageCount = currentPage - 1 > 4 ? 4 : currentPage - 1;
	const nextPageCount = pageCount - 4 >= currentPage ? 4 : pageCount - currentPage;

	if (!total || total < 1 || pageCount <= 1) return null;
	if (!pageIndex && !itemIndex) return null;

	const changeHandler = (index) => {
		if (onChange) onChange(index);
	};

	const CN = {
		el: `${elClass} ${borderColor} ${bgColor} inline-flex items-center justify-center rounded border`,
		button: `${buttonClass} ${borderColor} flex items-center justify-center min-w-[50px] min-h-[50px] outline-none border-l last:border-none`,
		currentButton: `${currentButtonBgColor || buttonBgColor}  ${currentTextColor || buttonTextColor}`,
		jumpButton: `${jumpButtonBgColor || buttonBgColor} ${jumpButtonTextColor || buttonTextColor}`,
		deactiveButton: `${buttonBgColor} ${buttonTextColor}`,
	};

	return (
		<Block boxClass={`${boxClass} text-center`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={CN.el}>
				{currentPage > 1 && (
					<>
						<button className={`${CN.button} ${CN.jumpButton}`} onClick={() => changeHandler(1)}>
							<i className='fa fa-angle-double-right' />
						</button>
						<button
							className={`${CN.button} ${CN.jumpButton}`}
							onClick={() => changeHandler(pageIndex ? currentPage - 1 : itemIndex - pageSize)}
						>
							<i className='fa fa-angle-right' />
						</button>
					</>
				)}
				{new Array(prevPageCount).fill('').map((item, i) => (
					<button
						onClick={() =>
							changeHandler(
								pageIndex ? i + currentPage - prevPageCount : (i + currentPage - prevPageCount) * pageSize - pageSize + 1,
							)
						}
						key={i}
						className={`${CN.button} ${CN.deactiveButton}`}
					>
						{i + currentPage - prevPageCount}
					</button>
				))}

				<button className={`${CN.button} ${CN.currentButton}`}>{currentPage}</button>
				{new Array(nextPageCount).fill('').map((item, i) => (
					<button
						onClick={() => changeHandler(pageIndex ? currentPage + i + 1 : pageSize * (currentPage + i) + 1)}
						key={i}
						className={`${CN.button} ${CN.deactiveButton}`}
					>
						{currentPage + i + 1}
					</button>
				))}
				{currentPage < pageCount && (
					<>
						<button
							className={`${CN.button} ${CN.jumpButton}`}
							onClick={() => changeHandler(pageIndex ? currentPage + 1 : itemIndex + pageSize)}
						>
							<i className='fa fa-angle-left' />
						</button>
						<button
							className={`${CN.button} ${CN.jumpButton}`}
							onClick={() => changeHandler(pageIndex ? pageCount : pageCount * pageSize - pageSize + 1)}
						>
							<i className='fa fa-angle-double-left' />
						</button>
					</>
				)}
			</div>
		</Block>
	);
};

export default PrimaryPagination;
