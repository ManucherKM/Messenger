//Библиотеки
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { toJS } from "mobx"

//Компоненты
import FriendPanel from "../../../components/FriendPanel/FriendPanel"
import Messages from "./Messages/Messages"
import TypeMessage from "./TypeMessage/TypeMessage"

//Утилиты
import chatController from "../../../store/chat"
import { useEffect } from "react"

const Chat = observer(() => {

  const [isRender, setIsRender] = useState(chatController.chatRender.chatId === undefined ? false : true)

  useEffect(() => {
    setIsRender(chatController.chatRender.chatId === undefined ? false : true)
  }, [chatController.chatRender.chatId])

  const chat = toJS(chatController.chatRender)

  const [messages, setMessages] = useState(toJS(chat))

  return (
    <div className='bg-blue w-full h-[100vh]'>
      {!isRender &&
        <div className="w-full h-full flex-center bg-gray-100">
          <span className="text-xl text-green">
            Чтобы просматривать сообщения перейдите в чат
          </span>
        </div>
      }
      {
        isRender &&
        <div className="w-full h-full">
          <div>
            <FriendPanel
              avatar={chat.info.urlImg}
              name={chat.info.name}
            />
          </div>
          <div>
            <div className="px-5">
            <Messages />
            </div>
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