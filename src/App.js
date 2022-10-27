import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Panel from './pages/Panel/Panel'
import Register from './pages/Register/Register'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/panel' element={<Panel />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App