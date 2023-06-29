//Библиотеки
import { useEffect, useState } from 'react'
//Компоненты
import Input from '../../../components/Input/Input'
//Утилиты
import { useSkipRender } from '../../../utils/useSkipRender'
import * as validator from '../../../utils/validator'

const InputEmail = ({ setEmailValueParent, setIsCorrectEmailParent, err = false }) => {
	const isSkipRender = useSkipRender()

	const [isCorrectEmail, setIsCorrectEmail] = useState(null)
	const [styleEmail, setStyleEmail] = useState('')
	const [emailErorrs, setEmailErrors] = useState([])

	function email(val) {
		if (val === '') {
			setStyleEmail('')
			setEmailErrors([])
			return
		}
		if (validator.email(val).result) {
			setEmailErrors([])
			setIsCorrectEmail(true)
			setIsCorrectEmailParent(true)
			setEmailValueParent(val)
		} else {
			setIsCorrectEmail(false)
			setIsCorrectEmailParent(false)
			setEmailErrors(validator.email(val).errors)
		}
		setStyleEmail(isCorrectEmail ? 'border-green dark:border-green' : 'border-red-400 dark:border-red-400')
	}

	useEffect(() => {
		if (isSkipRender) {
			setIsCorrectEmail(false)
			setIsCorrectEmailParent(false)
		}
	}, [err])

	useEffect(() => {
		//Пропускаем первый рендер
		if (isSkipRender) {
			setStyleEmail(isCorrectEmail ? 'border-green dark:border-green' : 'border-red-400 dark:border-red-400')
		}
	}, [isCorrectEmail])

	return (
		<label htmlFor="email">
			{emailErorrs && <p className="mb-2 text-red-400">{emailErorrs[0]}</p>}
			<Input id={'email'} func={email} type="text" placeholder="Почта" styles={`w-full rounded-xl ${styleEmail}`} />
		</label>
	)
}

export default InputEmail
