//Библиотеки
import { useEffect, useState } from 'react'

const CheckBox = ({ checked, isCheck = false }) => {
	const [styleBg, setStyleBg] = useState('bg-gray-300 dark:bg-gray-600')
	const [styleElips, setStyleElips] = useState('')

	function changeHandler(e) {
		checked(e.target.checked)

		if (e.target.checked) {
			setStyleBg('bg-green')
			setStyleElips('ml-auto')
			return
		}

		setStyleBg('bg-gray-300 dark:bg-gray-600')
		setStyleElips('')
	}

	useEffect(() => {
		if (isCheck) {
			setStyleBg('bg-green')
			setStyleElips('ml-auto')
		}
	}, [isCheck])

	return (
		<label className={`w-16 rounded-full p-1 relative cursor-pointer ${styleBg}`}>
			<span className={`w-5 h-5 rounded-full bg-white flex flex-col ${styleElips}`}></span>
			<input onChange={changeHandler} type="checkbox" className="absolute top-0 left-0 w-0 h-0 opacity-0" />
		</label>
	)
}

export default CheckBox
