//Библиотеки
import { observer } from "mobx-react-lite"
import { useState } from "react"

//Компоненты
import FriendPanel from "../../../components/FriendPanel/FriendPanel"
import Messages from "./Messages/Messages"
import TypeMessage from "./TypeMessage/TypeMessage"

//Утилиты
import chatController from "../../../store/chat"
import { useEffect } from "react"

const Chat = observer(() => {

  const [isRender, setIsRender] = useState(chatController.chatRender.chatId !== undefined ? true : false)

  useEffect(() => {
    setIsRender(chatController.chatRender.chatId === undefined ? false : true)
  }, [chatController.chatRender.chatId])


  return (
    <div className='bg-blue w-full h-[100vh]'>
      {!isRender &&
        <div className="w-full h-full flex-center bg-dark/[.1] dark:bg-dark">
          <span className="text-xl text-green">
            Чтобы просматривать сообщения перейдите в чат
          </span>
        </div>
      }
      {
        isRender &&
        <div className="w-full h-full dark:bg-whiteDark">
          <div>
            <FriendPanel />
          </div>
          <div>
            <Messages />
          </div>
          <div>
            <TypeMessage />
          </div>
        </div>
      }
    </div>

  )
})

export default Chat