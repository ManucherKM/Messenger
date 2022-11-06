import Navbar from "../../components/Navbar/Navbar"
import PanelList from "./PanelList/PanelList"
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