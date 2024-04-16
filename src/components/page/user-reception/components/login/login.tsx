import { Block, PrimaryButton, PrimaryCard, PrimaryInput, PureForm } from '@attom';
import { page_userReception } from '@context';
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
	const { state, setState, overWrite } = page_userReception.useContext();
	const { login } = state;
	const { receptionCode, phone, _login } = login;

	const actions = page_userReception.useActions();

	const changeLoginScope = (values: Partial<typeof login> = {}) => overWrite({ scope: 'login', value: { ...values } });

	const validation = {
		receptionCode: { isValid: regex.receptionCode.test(receptionCode), invalidMessage: '' },
		phone: { isValid: regex.phone.test(phone), invalidMessage: '' },
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
							label='شماره پذیرش'
							placeholder='1234'
							value={receptionCode}
							onChange={(value) => changeLoginScope({ receptionCode: value })}
							numeric
							required
							disabled={_login === 'loading'}
						/>
						<PrimaryInput
							boxSize='w-full'
							label='شماره تماس'
							placeholder='09111111111'
							value={phone}
							onChange={(value) => changeLoginScope({ phone: value })}
							required
							numeric
							maxLength={11}
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
