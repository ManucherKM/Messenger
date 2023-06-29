//Библиотеки
import { useState } from 'react'

//Компоненты
import Spinner from '../../components/Spinner/Spinner'
import Register from './Register/Register'

const RegisterIndex = () => {
	//Состояние спинера
	const [loading, setLoading] = useState(false)
	return (
		<div className="w-[100vw] h-[100vh] flex-center bg-white dark:bg-dark">
			{loading && <Spinner />}
			{!loading && <Register setLoading={setLoading} />}
		</div>
	)
}

export default RegisterIndex
