//Компоненты
import Form from '../Form/Form'

//Утилиты
import OtherRegister from '../OtherRegister/OtherRegister'

const Register = ({ setLoading }) => {
	return (
		<div className="container flex-center">
			<div className="w-96">
				<h2 className="title mb-10 text-green text-center">Регистрация</h2>
				<Form setLoading={setLoading} />
				<div className="flex justify-center my-5">
					<span className="subtitle text-green">или</span>
				</div>
				<OtherRegister setLoading={setLoading} />
			</div>
		</div>
	)
}

export default Register
