//Библиотеки
import { makeAutoObservable } from "mobx"

class chatController {

    chats = [
        {
            chatId: 23423425441234,
            friend: {
                id: 1,
                name: "Message",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 5,
            },
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 4234,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 234234,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 56757,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 768,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 567,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 234651435245,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 345676583,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 980980980,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 345543,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 321213321,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 354321342,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 5234345345,
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
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
            }
        },
        {
            chatId: 12341234,
            friend: {
                id: 1,
                name: "I am",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            },
            user: {
                noCheck: 0,
            },
            message: {
                text: "How are you doing?",
                time: "16:44",
                id: 2,
                user: false,
                isSend: true,
                isCheck: false,
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
                const [hourA, minA] = a.message.time.split(":")
                const [hourB, minB] = b.message.time.split(":")
                const isMilsecA = dateNow - ((Number(hourA) * 60) + Number(minA)) * 60 * 1000
                const isMilsecB = dateNow - ((Number(hourB) * 60) + Number(minB)) * 60 * 1000
                return isMilsecA - isMilsecB
            })
        }
    }
    updateChatRender(chatId) {
        /*
        
        Запрос на бекенд

        */

        const response = {
            chatId: chatId,
            friend: {
                id: 12,
                urlImg: "https://images.unsplash.com/photo-1668915658566-59bc6514a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                name: "Tom Smith",
                isOnline: true,
                isTyping: false
            },
            messages: [
                {
                    id: 321,
                    message: "How Are Yput",
                    isSend: true,
                    isCheck: false,
                    time: "16:00",
                    isUser: true
                },
                {
                    id: 123,
                    message: "How Are Yput",
                    isSend: true,
                    isCheck: false,
                    time: "16:00",
                    isUser: true
                },
                {
                    id: 6547,
                    message: "How Are Yput",
                    isSend: true,
                    isCheck: false,
                    time: "16:00",
                    isUser: true
                }
            ]
        }
        this.chatRender = { ...response }
    }
    sendMessage(message) {
        // Отправляем запрос на бекенд и полученое сообщение вставляем в список сообщений 
        const newMessage = {
            id: Date.now(),
            user: true,
            message: message,
            isSend: true,
            isCheck: false,
            time: "12:00"
        }

        this.chatRender.messages.push(newMessage)
    }
    removeMessage(messageId) {
        this.chatRender.messages = this.chatRender.messages.filter(item => item.id !== messageId);
        /*
        Запрос на бекенд
        */
    }
}

export default new chatController