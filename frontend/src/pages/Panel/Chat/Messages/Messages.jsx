//Библиотеки
import { useEffect, useRef, useLayoutEffect, useState } from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react-lite"
//Компоненты
import TextMessage from "./Message/TextMessage"
//Утилиты
import chatController from "../../../../store/chat"
import ContextMenu from "../../../../components/ContextMenu/ContextMenu"

const Messages = observer(() => {
  const chatMessages = useRef(null)
  let listMessage = chatController.chatRender.chatId !== undefined
    ? toJS(chatController.chatRender.messages)
    : []
  const [isContextMenu, setIsContextMenu] = useState(false)
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [selectMessage, setSelectMessage] = useState(null)



  function uploadContextMenu(e) {
    setX(e.pageX)
    setY(e.pageY)
    setIsContextMenu(!isContextMenu)
  }















  useEffect(() => {
    listMessage = chatController.chatRender.chatId !== undefined
      ? toJS(chatController.chatRender.messages)
      : []
  }, [toJS(chatController.chatRender.messages)])
  useLayoutEffect(() => {
    if (chatMessages.current) {
      const height = chatMessages.current.scrollHeight;
      chatMessages.current.scrollTo(0, height);
    }
  }, [listMessage])

  return (
    <div className="w-full h-[calc(100vh-152px)] flex flex-col justify-end overflow-auto bg-gray-100 dark:bg-whiteDark">
      {isContextMenu &&
        <ContextMenu
          setIsRender={setIsContextMenu}
          x={x}
          y={y}
        />
      }
      <div ref={chatMessages} className="px-5 overflow-y-scroll scroll">
        {listMessage.map(item =>
          <TextMessage
            message={item.message}
            isCheck={item.isCheck}
            isSend={item.isSend}
            time={item.time}
            isUser={item.user}
            PKM={uploadContextMenu}
            key={item.id}
          />
        )}
      </div>
    </div>
  )
})

export default Messages