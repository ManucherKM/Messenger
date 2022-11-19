//Библиотеки
import { observer } from "mobx-react-lite"
import { useState, useEffect } from "react"

//Компоненты
import FriendPanel from "./FriendPanel/FriendPanel"
import Messages from "./Messages/Messages"
import TypeMessage from "./TypeMessage/TypeMessage"
import DropZone from "../../../components/DropZone/DropZone"

//Утилиты
import chatController from "../../../store/chat"

const Chat = observer(() => {

  const [isRender, setIsRender] = useState(chatController.chatRender.chatId !== undefined ? true : false)

  useEffect(() => {
    setIsRender(chatController.chatRender.chatId === undefined ? false : true)
  }, [chatController.chatRender.chatId])

  const [isDrop, setIsDrop] = useState(false)

  function dropFile() {
    setIsDrop(!isDrop)
  }

  return (
    <div className="w-full h-[100vh] relative">

      <div className='bg-blue w-full h-full'>
        {!isRender &&
          <div className="w-full h-full flex-center bg-dark/[.1] dark:bg-dark">
            <span className="text-xl text-green">
              Чтобы просматривать сообщения перейдите в чат
            </span>
          </div>
        }
        {isRender && !isDrop &&
          <div className="w-full h-full dark:bg-whiteDark">
            <div>
              <FriendPanel />
            </div>
            <div>
              <Messages />
            </div>
            <div>
              <TypeMessage dropFile={dropFile} />
            </div>
          </div>
        }

        {isRender && isDrop &&
          <div className="w-full h-full dark:bg-whiteDark relative">
            <div>
              <FriendPanel />
            </div>
            <div>
              <Messages />
            </div>
            <div>
              <TypeMessage dropFile={dropFile} />
            </div>
            <div className="absolute top-0 z-10 w-full h-full bg-black/[.4] dark:bg-white/[.1]">
              <DropZone uploadDropZone={dropFile} stylesWrapper="flex-center h-full" stylesDropZone="w-3/4 h-[500px]" />
            </div>
          </div>
        }
      </div>

    </div>
  )
})

export default Chat