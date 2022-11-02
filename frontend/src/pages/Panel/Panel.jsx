import Navbar from "../../components/Navbar/Navbar"
import PanelList from "../../components/PanelList/PanelList"
import Chat from './Chat/Chat'

const Panel = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className='flex'>
        <PanelList />
        <Chat />
      </div>
    </div>
  )
}

export default Panel