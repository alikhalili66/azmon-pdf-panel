import { Block, PrimaryButton, PrimaryCard, PrimaryInput, PureForm } from '@attom';
import { page_labReception } from '@context';
import { useFormValidation } from '@hooks';
import { regex } from '@utils';

export type LoginProps = Props_Block & {};

export const Login = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',

	...props
}: LoginProps) => {
	const { state, setState, overWrite } = page_labReception.useContext();
	const { login } = state;
	const { labId, password, _login } = login;

	const actions = page_labReception.useActions();

	const changeLoginScope = (values: Partial<typeof login> = {}) => overWrite({ scope: 'login', value: { ...values } });

	const validation = {
		labId: { isValid: regex.labId.test(labId), invalidMessage: '' },
		password: { isValid: regex.password.test(password), invalidMessage: '' },
	};

	const { isValidForm } = useFormValidation(validation);

	const loginHandler = () => actions.login();

	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className='content-min-h flex items-center justify-center p-[3%]'>
				<PrimaryCard
					boxSize='w-full max-w-[600px]'
					elClass='px-[10%] py-[50px]'
					// loading={_login === 'loading'}
					rounded
					shadow
				>
					<PureForm boxClass='min-h-[300px] flex flex-col items-center justify-center gap-[30px]'>
						<PrimaryInput
							boxSize='w-full'
							label='شماره آزمایشگاه'
							placeholder='1234'
							value={labId}
							onChange={(value) => changeLoginScope({ labId: value })}
							numeric
							required
							disabled={_login === 'loading'}
						/>
						<PrimaryInput
							boxSize='w-full'
							type='password'
							label='رمز عبور'
							placeholder='****'
							value={password}
							onChange={(value) => changeLoginScope({ password: value })}
							required
							disabled={_login === 'loading'}
						/>

						<PrimaryButton
							boxSize='w-full'
							boxSpace='pt-[10px]'
							bgColor='bg-tertiary-1'
							elClass='min-h-[60px] text-[18px]'
							content='ورود'
							onClick={loginHandler}
							disabled={!isValidForm}
							loading={_login === 'loading'}
						/>
					</PureForm>
				</PrimaryCard>
			</div>
		</Block>
	);
};

export default Login;
