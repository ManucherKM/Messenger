import { Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import LoginIndex from './pages/Login/LoginIndex'
import Panel from './pages/Panel/Panel'
import RegisterIndex from './pages/Register/RegisterIndex'
import SettingIndex from './pages/Setting/SettingIndex'

import userController from './store/user'
import checkTheme from './utils/themeCheck'
import Profile from './pages/Profile/Profile'

const App = observer(() => {
  //Если цветовая тема меняется - перерендериваем все приложение
  useEffect(() => {
    checkTheme()
  }, [userController.config.darkTheme])
  return (
    <div>
      <Routes>
        <Route path='/chat' element={<Panel />} />
        <Route path='/' element={<LoginIndex />} />
        <Route path='/register' element={<RegisterIndex />} />
        <Route path='/setting' element={<SettingIndex />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/me' element={<Profile />} />
      </Routes>
    </div>
  )
})

export default App