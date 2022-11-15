import { makeAutoObservable, toJS } from "mobx"

class chatController {

    chats = [
        {
            chatId: 23423425441234,
            friend: {
                id: 1,
                name: "I am",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 76543,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 345345,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 675645342,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 234234,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 433122131212,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 9765,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 65356,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 123123,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 0,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
        {
            chatId: 2,
            friend: {
                id: 1,
                name: "I am",
                isOnline: false,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            info: {
                endMessage: "How are you doing?",
                timeLastMessage: "16:44",
                messages: [
                    {
                        id: 1,
                        user: true,
                        message: "How are you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                    {
                        id: 2,
                        user: false,
                        message: "Good, and you?",
                        isSend: true,
                        isCheck: false,
                        time: "12:00"
                    },
                ]
            }
        },
    ]

    chatRender = {}

    workerChats = [...this.chats]

    constructor() {
        makeAutoObservable(this)
    }

    search(val) {
        this.workerChats = [...this.chats].filter(item => {
            if (item.friend.name.toUpperCase().includes(val.toUpperCase())) {
                return item
            }
        })
    }

    sort(val) {
        if (val === "Не прочитанному") {
            this.workerChats = [...this.chats].filter(item => {
                if (item.user.noCheck !== 0) {
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

    updateChatRender(obj) {
        this.chatRender = { ...obj }
    }

    sendMessage(message) {
        if (this.chatRender.chatId === undefined) {
            return
        }
        // Отправляем запрос на бекенд и полученое сообщение вставляем в список сообщений 
        const newMessage = {
            id: 1,
            user: true,
            message: message.message,
            isSend: true,
            isCheck: false,
            time: "12:00"
        }
        this.chatRender.info.messages = [...this.chatRender.info.messages, newMessage]
    }
}

export default new chatController