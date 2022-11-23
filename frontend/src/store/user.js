import { makeAutoObservable } from "mobx"

class User {

    isRegister = true

    token = {}

    info = {
        avatar: "https://images.unsplash.com/photo-1669058665299-d6f81125dce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }

    constructor() {
        makeAutoObservable(this)
    }

    login(obj) {

        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err.length !== 0) {
            return err
        }

        //Ответ

        const token = {
            idToken: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.isRegister = true
        return err
    }
    loginGoogle(obj) {
        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err) {
            return err
        }

        //Ответ

        const token = {
            id: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.register = true

        return err
    }
    loginVK(obj) {
        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err) {
            return err
        }

        //Ответ

        const token = {
            id: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }



        this.token = { ...token }
        this.register = true

        return err
    }
    register(obj) {

        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err.length !== 0) {
            return err
        }

        //Ответ

        const token = {
            idToken: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.isRegister = true

        return err
    }
    registerGoogle(obj) {
        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err) {
            return err
        }
        console.log(123);
        //Ответ

        const token = {
            id: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.register = true

        return err
    }
    registerVK(obj) {
        let err = []

        /*
        Тут нужно будет отправить запрос на бекенд
        */

        err = [] //Есть ли ошибки при работе с сервером?

        if (err) {
            return err
        }

        //Ответ

        const token = {
            id: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }



        this.token = { ...token }
        this.register = true

        return err
    }
    logout() {

        /*
        Тут нужно будет отправить запрос на бекенд
        */
        this.register = false
        this.token = {}
        this.info = {}
        console.log("exit", this.register);
    }
}

export default new User()