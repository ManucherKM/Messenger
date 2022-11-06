import { makeAutoObservable } from "mobx"

class chatController {

    chats = [
        {
            chatId: 1,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: true,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:44",
                name: "I am",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 2,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "18:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 3,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "9:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 4,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "11:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 5,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 6,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 7,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 8,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 9,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        },
        {
            chatId: 10,
            info: {
                isTyping: false,
                isCheckFriend: false,
                isCheckMe: false,
                isSend: true,
                isOnline: false,
                timeLastMessage: "16:40",
                name: "John Doe",
                visibleMessage: "How are you doing?",
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                noCheck: 5
            }
        }
    ]

    workerChats = [...this.chats]

    constructor() {
        makeAutoObservable(this)
    }

    search(val) {
        this.workerChats = [...this.chats].filter(item => {
            if (item.info.name.toUpperCase().includes(val.toUpperCase())) {
                return item
            }
        })
    }

    sort(val) {
        if (val === "Не прочитанному") {
            this.workerChats = [...this.chats].filter(item => {
                if (!(item.info.isCheckMe)) {
                    return item
                }
            })
        } else if (val === "Последнему") {
            const dateNow = Date.now()
            this.workerChats = [...this.chats].sort((a, b) => {
                const [hourA, minA] = a.info.timeLastMessage.split(":")
                const [hourB, minB] = b.info.timeLastMessage.split(":")
                const isMilsecA = dateNow - ((Number(hourA) * 60) + Number(minA)) * 60 * 1000
                const isMilsecB = dateNow - ((Number(hourB) * 60) + Number(minB)) * 60 * 1000
                return isMilsecA - isMilsecB
            })
        }
    }
}

export default new chatController