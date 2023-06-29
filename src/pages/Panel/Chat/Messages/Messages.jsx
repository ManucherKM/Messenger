//Библиотеки
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect,useLayoutEffect,useRef,useState } from 'react'
//Утилиты
import ContextMenu from '../../../../components/ContextMenu/ContextMenu'
import chatController from '../../../../store/chat'
//Компоненты
import TextMessage from './Message/TextMessage'

const Messages = observer(() => {
	const chatMessages = useRef(null)
	let listMessage = chatController.chatRender.chatId !== undefined ? toJS(chatController.chatRender.messages) : []
	const [isContextMenu, setIsContextMenu] = useState(false)
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	const [selectMessage, setSelectMessage] = useState(null)

	function uploadContextMenu(e, id) {
		setSelectMessage(id)
		setX(e.pageX)
		setY(e.pageY)
		setIsContextMenu(!isContextMenu)
	}

	useEffect(() => {
		listMessage = chatController.chatRender.chatId !== undefined ? toJS(chatController.chatRender.messages) : []
	}, [toJS(chatController.chatRender.messages)])
	useLayoutEffect(() => {
		if (chatMessages.current) {
			const height = chatMessages.current.scrollHeight
			chatMessages.current.scrollTo(0, height)
		}
	}, [listMessage])

	return (
		<>
			{listMessage.length === 0 ? (
				<div className="w-full h-[calc(100vh-152px)] mint:h-[calc(90vh-152px)] bg-gray-100 dark:bg-whiteDark flex-center">
					<span className="text-xl text-green">Похоже что у вас нет ни одного сообщения</span>
				</div>
			) : (
				<div className="w-full h-[calc(100vh-152px)] mint:h-[calc(100vh-192px)] flex flex-col justify-end overflow-auto bg-gray-100 dark:bg-whiteDark">
					{isContextMenu && <ContextMenu setIsRender={setIsContextMenu} x={x} y={y} messageId={selectMessage} />}
					<div ref={chatMessages} className="px-5 overflow-y-scroll scroll">
						{listMessage.map(item => (
							<TextMessage
								message={item.message}
								isCheck={item.isCheck}
								isSend={item.isSend}
								time={item.time}
								isUser={item.user}
								PKM={uploadContextMenu}
								key={item.id}
								id={item.id}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
})

export default Messages
