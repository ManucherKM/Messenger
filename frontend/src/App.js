import { Route, Routes } from 'react-router-dom'
import LoginIndex from './pages/Login/LoginIndex'
import Panel from './pages/Panel/Panel'
import RegisterIndex from './pages/Register/RegisterIndex'
import SettingIndex from './pages/Setting/SettingIndex'
import checkTheme from './utils/themeCheck'

const App = () => {
  checkTheme()
  return (
    <div className='flex'>
      <Routes>
        <Route path='/panel/chat' element={<Panel />} />
        <Route path='/' element={<LoginIndex />} />
        <Route path='/register' element={<RegisterIndex />} />
        <Route path='/panel/setting' element={<SettingIndex />} />
      </Routes>
    </div>
  )
}

export default App