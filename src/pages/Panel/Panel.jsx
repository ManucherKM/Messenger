//Навигационное меню
import Navbar from '../../components/Navbar/Navbar'

//Список сообщений
import PanelList from './PanelList/PanelList'

//Компоненты
import Chat from './Chat/Chat'

// utils
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useCheckModileDevice } from '../../hooks/useCheckModileDevice'
import chatController from '../../store/chat'

const Panel = observer(() => {
	const [isVisiblePanel, setIsVisiblePanel] = useState(true)
	const isMobile = useCheckModileDevice()

	useEffect(() => {
		if (chatController.chatRender.chatId) {
			setIsVisiblePanel(false)
		} else {
			setIsVisiblePanel(true)
		}
	}, [chatController.chatRender.chatId])
	return (
		<div className="flex">
			<Navbar />
			<div className="flex w-[calc(100vw-80px)] mint:w-full">
				{/* Desktop Devices */}
				{!isMobile && (
					<div className="border-r bg-white dark:bg-dark dark:border-gray-600 mint:w-full">
						<PanelList />
					</div>
				)}
				{!isMobile && <Chat />}

				{/* Mobile Devices */}
				{isMobile && isVisiblePanel && (
					<div className="border-r bg-white dark:bg-dark dark:border-gray-600 mint:w-full">
						<PanelList />
					</div>
				)}

				{isMobile && !isVisiblePanel && <Chat />}
			</div>
		</div>
	)
})

export default Panel
