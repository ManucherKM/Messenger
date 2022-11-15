//Библиотеки
import { toJS } from "mobx"
import { observer } from "mobx-react-lite"
import { useEffect, useRef, useState, useLayoutEffect } from "react"

//Компоненты
import TextMessage from "./Message/TextMessage"

//Утилиты
import chatController from "../../../../store/chat"

const Messages = observer(() => {

  const chatMessages = useRef(null)

  const [listMessage, setListMessages] = useState(
    chatController.chatRender.chatId !== undefined
      ? toJS(chatController.chatRender.info.messages)
      : []
  )
  useEffect(() => {
    setListMessages(
      chatController.chatRender.chatId !== undefined
        ? toJS(chatController.chatRender.info.messages)
        : []
    )
  }, [chatController.chatRender.info?.messages])

  useLayoutEffect(() => {
    if (chatMessages.current) {
      const height = chatMessages.current.scrollHeight;
      chatMessages.current.scrollTo(0, height);
    }
  }, [listMessage])

  return (
    <div className="w-full h-[calc(100vh-152px)] flex flex-col justify-end overflow-auto bg-gray-100 dark:bg-whiteDark">
      <div ref={chatMessages} className="px-5 overflow-y-scroll scroll">
        {listMessage.map(item =>
          <TextMessage
            message={item.message}
            isCheck={item.isCheck}
            isSend={item.isSend}
            time={item.time}
            isUser={item.user}
            key={item.id}
          />
        )}
      </div>
    </div>

  )
})

export default Messages