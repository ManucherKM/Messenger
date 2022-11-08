import { makeAutoObservable } from "mobx"

class User {
    config = {
        register: true,
        info: {
            name: "Mike",
            age: 22,
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    login(obj) {

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        this.config = { ...data }
    }

    logout() {

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        this.config = {
            register: false,
            info: {}
        }
    }
}

export default new User()