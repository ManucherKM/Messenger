//Компоненты
import GoogleBtn from '../../../components/GoogleBtn/GoogleBtn'
import VKbtn from '../../../components/VKbtn/VKbtn'

//Утилиты
import userController from '../../../store/user'

const OtherRegister = ({ setLoading }) => {
	//При входе через гугл
	function google(result) {
		;(async () => {
			setLoading(true)
			if (!result) {
				setLoading(false)
				console.log('Ошибка регистрация через гугл, пустой токен')
				return
			}
			const err = await userController.registerGoogle(result)
			if (err.length !== 0) {
				setLoading(false)
				console.log('Ошибка регистрация через гугл', err)
				return
			}
			console.log('Гугл', result)
			setLoading(false)
		})()
	}
	//При входе через VK
	function vk(result) {
		setLoading(true)(async () => {
			if (!result) {
				setLoading(false)
				console.log('Ошибка регистрация через VK, пустой токен')
				return
			}
			const err = await userController.registerVK(result)
			if (err.length !== 0) {
				setLoading(false)
				console.log('Ошибка регистрация через VK')
				return
			}
			console.log('Успешная регистрация через VK')
		})()
		setLoading(false)
	}
	return (
		<>
			<div>
				<GoogleBtn getResult={google} />
			</div>
			<div className="mt-3">
				<VKbtn getResult={vk} />
			</div>
		</>
	)
}

export default OtherRegister
