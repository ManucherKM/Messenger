//Библиотеки
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

//Компоненты
import LoginIndex from './pages/Login/LoginIndex'
import Panel from './pages/Panel/Panel'
import Profile from './pages/Profile/Profile'
import RegisterIndex from './pages/Register/RegisterIndex'
import SettingIndex from './pages/Setting/SettingIndex'

//Утилиты
import userController from './store/user'
import checkTheme from './utils/themeCheck'

const App = observer(() => {
	const theme = userController.config.darkTheme

	//Если цветовая тема меняется - перерендериваем все приложение
	useEffect(() => {
		checkTheme()
	}, [theme])
	return (
		<div>
			<Routes>
				<Route path="/chat" element={<Panel />} />
				<Route path="/" element={<LoginIndex />} />
				<Route path="/register" element={<RegisterIndex />} />
				<Route path="/setting" element={<SettingIndex />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/me" element={<Profile />} />
			</Routes>
		</div>
	)
})

export default App
