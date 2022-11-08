//Навигационное меню
import Navbar from "../../components/Navbar/Navbar"

//Список сообщений
import PanelList from "./PanelList/PanelList"

//Чат
import Chat from './Chat/Chat'

const Panel = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className='flex w-[calc(100vw-80px)]'>
        <PanelList />
        <Chat />
      </div>
    </div>
  )
}

export default Panel