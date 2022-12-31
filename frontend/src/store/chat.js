//Библиотеки
import { makeAutoObservable } from "mobx"

class chatController {

    chats = [
        {
            chatId: 23423425441234,
            friend: {
                id: 1,
                name: "Tom Smith",
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
                name: "Ivan Petrov",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Aaron Orv",
                isOnline: true,
                isTyping: false,
                urlImg: "https://plus.unsplash.com/premium_photo-1667511131806-5907723694fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Benjamin Fr",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Antonio Q",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Andrew G",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Alex X",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Albert T",
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
                name: "Aidan N",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Alan N",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Blake E",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Christopher R",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Douglas S",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                name: "Evan V",
                isOnline: true,
                isTyping: false,
                urlImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
