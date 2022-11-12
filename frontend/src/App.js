import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Panel from './pages/Panel/Panel'
import Register from './pages/Register/Register'
import checkTheme from './utils/themeCheck'

const App = () => {
  checkTheme()
  return (
    <div className='flex'>
      <Routes>
        <Route path='/panel/chat' element={<Panel />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App