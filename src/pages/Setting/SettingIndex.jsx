import { useState } from 'react'

import { observer } from 'mobx-react-lite'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import SettingItem from '../../components/SettingItem/SettingItem'
import userController from '../../store/user'

const SettingIndex = observer(() => {
	const [darkTheme, setDarkTheme] = useState(userController.config.darkTheme)

	function saveSatting() {
		const config = { darkTheme }
		userController.updateConfig(config)
	}

	return (
		<div className="flex">
			<Navbar />
			<div className="w-[calc(100vw-80px)] h-[100vh] scroll bg-white dark:bg-dark mint:w-full">
				<div className="mx-10 mint:mx-5">
					<div className="mt-5">
						<h2 className="title">Настройки</h2>
						<div>
							<SettingItem isCheck={darkTheme} text={'Темная тема'} setCheckbox={setDarkTheme} />
							<SettingItem text={'Прочие настройки'} setCheckbox={() => {}} />
						</div>
						<div className="mt-5 mb-10">
							<Button text="Сохранить" styles="px-10 mt-5" onClick={saveSatting} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

export default SettingIndex
