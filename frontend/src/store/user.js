import { makeAutoObservable } from "mobx"

class User {

    register = true

    info = {}

    constructor() {
        makeAutoObservable(this)
    }

    login(obj) {

        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [132]

        if (err) {
            return err
        }

        //Ответ
        const result = {
            id: 4321123,
            name: "Mike",
            age: 22,
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        }

        this.info = { ...result }

        return err
    }

    logout() {

        /*
        Тут нужно будет отправить запрос на бекенд
        */
        this.register = false
        this.info = {}
    }
}

export default new User()