import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { toJS } from "mobx"
import DropDownList from "../../../components/DropDownList/DropDownList"
import Input from "../../../components/Input/Input"
import ItemList from "../../../components/ItemMessage/ItemMessage"
import chatController from "../../../store/chat"

const PanelList = observer(() => {

    const listDropDown = [
        {
            id: 1,
            text: "Не прочитанному"
        },
        {
            id: 2,
            text: "Последнему"
        }
    ]

    const [labelStyle, setLabelStyle] = useState("")

    function searchMessage(val) {
        chatController.search(val)
        setListChats(toJS(chatController.workerChats))
    }

    function sortMessage(select) {
        chatController.sort(select)
        setListChats(toJS(chatController.workerChats))
    }

    function clickMessage() {
        console.log(123);
    }

    const [listChats, setListChats] = useState(toJS(chatController.workerChats))


    const isRenderList = chatController.chats.length !== 0 ? true : false

    let [notFound, setNotFound] = useState(false)

    useEffect(() => {
        setNotFound(listChats.length === 0 ? true : false)
    }, [listChats])

    return (
        <div className='w-1/4 bg-white dark:bg-dark'>
            <div className="mb-5 mt-[25px] px-5">
                <h3 className="title text-black">
                    Сообщения
                </h3>
            </div>
            {isRenderList &&
                <div>
                    <div className="px-5">
                        <div>
                            <label onBlur={() => setLabelStyle("")} onFocus={() => setLabelStyle("border-gray-400 hover:border-gray-400 dark:border-gray-500 dark:hover:border-gray-500")} className={`bg-white flex rounded-xl border hover:border-gray-300 dark:bg-whiteDark dark:border-gray-600 dark:hover:border-gray-500 ${labelStyle}`}>
                                <div className="flex items-center px-2">
                                    <svg width="21" height="21" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8815 10.8817C10.9574 10.8055 11 10.7025 11 10.595C11 10.4875 10.9574 10.3845 10.8815 10.3083L7.96103 7.38889C8.5294 6.69132 8.83911 5.81869 8.83769 4.91889C8.83651 3.8799 8.42325 2.88379 7.68858 2.14912C6.95391 1.41444 5.95782 1.00118 4.91884 1C3.87986 1.00118 2.88377 1.41444 2.1491 2.14912C1.41443 2.88379 1.00118 3.8799 1 4.91889C1.00118 5.95788 1.41443 6.95398 2.1491 7.68866C2.88377 8.42334 3.87986 8.8366 4.91884 8.83778C5.81864 8.8392 6.69125 8.52948 7.38881 7.96111L10.3093 10.8817C10.3851 10.9573 10.4878 10.9999 10.5949 11C10.6481 11.0001 10.7008 10.9897 10.75 10.9694C10.7992 10.9491 10.8439 10.9193 10.8815 10.8817ZM8.02714 4.91889C8.02626 5.74285 7.69855 6.53281 7.11593 7.11544C6.5333 7.69807 5.74335 8.02578 4.9194 8.02667C4.09535 8.02593 3.30525 7.69829 2.72251 7.11564C2.13977 6.53299 1.81198 5.74295 1.8111 4.91889C1.81198 4.09493 2.13969 3.30496 2.72231 2.72233C3.30494 2.1397 4.09489 1.81199 4.91884 1.81111C5.74289 1.81185 6.53299 2.13949 7.11573 2.72214C7.69848 3.30478 8.02626 4.09483 8.02714 4.91889Z" fill="#676767" stroke="#676767" strokeWidth="0.5" />
                                    </svg>
                                </div>
                                <Input type={"text"} func={searchMessage} placeholder={"Найти"} styles={"w-full rounded-xl border-none"} />
                            </label>
                        </div>
                        <div className="mt-4 flex ml-2">
                            <span className="mr-2 text-sm cursor-default text-black opacity-60 dark:text-white">Сортировать по</span>
                            <DropDownList click={sortMessage} list={listDropDown} />
                        </div>
                    </div>
                    <div className="mt-5 scroll overflow-auto h-[calc(100vh-185px)]">
                        {!notFound && listChats.map(item =>
                            <div onClick={clickMessage} key={item.chatId} className="py-3 px-5 hover:bg-gray-400">
                                <ItemList
                                    isTyping={item.info.isTyping}
                                    time={item.info.timeLastMessage}
                                    isCheckFriend={item.info.isCheckFriend}
                                    isSend={item.info.isSend}
                                    visibleMessage={item.info.visibleMessage}
                                    name={item.info.name}
                                    isOnline={item.info.isOnline}
                                    img={item.info.urlImg}
                                    isCheckMe={item.info.isCheckMe}
                                    noCheck={item.info.noCheck}
                                />
                            </div>
                        )}
                        {notFound &&
                            <div className="px-5 flex items-center justify-center h-[80%]">
                                <p className="text-base text-black/[.6] text-center">Ничего не найдено</p>
                            </div>
                        }
                    </div>
                </div>
            }
            {!isRenderList &&
                <div className="px-5 flex items-center justify-center h-[calc(100vh-185px)]">
                    <p className="text-base text-black/[.6] text-center">Похоже что у вас еще нет ни одного сообщения</p>
                </div>
            }
        </div >
    )
})

export default PanelList