//Библиотеки
import { toJS } from "mobx"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"

//Компоненты
import TextMessage from "./Message/TextMessage"

//Утилиты
import chatController from "../../../../store/chat"

const Messages = observer(() => {
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
  }, [chatController.chatRender, chatController.chatRender.info.messages])

  return (
    <div className="w-full h-[calc(100vh-152px)] flex flex-col justify-end overflow-auto">
      <div className="px-5 pb-5">
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