//Библиотеки
import { useGoogleLogin } from '@react-oauth/google'

//Изображения
import googleLogo from '../../assets/Images/google.svg'

const GoogleBtn = ({ styleWrapper = '', styleText = '', getResult = () => {} }) => {
	const login = useGoogleLogin({
		flow: 'auth-code',
		onSuccess: tokenResponse => getResult(tokenResponse),
	})

	return (
		<div onClick={login} className={`border py-2 bg-white cursor-pointer rounded-xl hover:opacity-70 ${styleWrapper}`}>
			<div className="flex-center">
				<div className="mr-4">
					<img src={googleLogo} alt="company-icon" className="w-8 phon:w-7 select-none" />
				</div>
				<div>
					<span className={`text-dark tracking-wide select-none ${styleText}`}>Войти с помощью Google</span>
				</div>
			</div>
		</div>
	)
}

export default GoogleBtn
