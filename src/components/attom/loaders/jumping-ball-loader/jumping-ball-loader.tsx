import { Block } from '@attom';

import CS from './jumping-ball-loader.module.scss';

export type JumpingBallLoaderProps = Props_Block & {};

export const JumpingBallLoader = ({
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: JumpingBallLoaderProps) => {
	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={CS.loader}>
				<div className={CS.loader__bar}></div>
				<div className={CS.loader__bar}></div>
				<div className={CS.loader__bar}></div>
				<div className={CS.loader__bar}></div>
				<div className={CS.loader__bar}></div>
				<div className={CS.loader__ball}></div>
			</div>
		</Block>
	);
};

export default JumpingBallLoader;
