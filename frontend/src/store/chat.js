import { makeAutoObservable } from "mobx"

class Chat {

    chats = [
        {
            chatId: 1,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        },
        {
            chatId: 2,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        }, {
            chatId: 3,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        }
        , {
            chatId: 4,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        }, {
            chatId: 5,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        }, {
            chatId: 6,
            messages: [
                {
                    id: 123432,
                    user: false,
                    message: "Hi"
                },
                {
                    id: 123432,
                    user: true,
                    message: "Hi, how are you?"
                },
            ],
            visibleMessage: "Hi, how are you?"
        }
    ]

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    uploadChats() {
        this.chats = [...[
            {
                chatId: 1,
                messages: [
                    {
                        id: 123432,
                        user: false,
                        message: "Hi"
                    },
                    {
                        id: 123432,
                        user: true,
                        message: "Hi, how are you?"
                    },
                ],
                visibleMessage: "Hi, how are you?"
            }
        ]]
    }
}

export default new Chat