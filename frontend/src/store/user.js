import { makeAutoObservable } from "mobx"

class User {

    isRegister = true

    token = {}

    info = {}

    constructor() {
        makeAutoObservable(this)
    }
    
    login(obj) {

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
            idToken: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.register = true

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

        if (err) {
            return err
        }

        //Ответ

        const token = {
            idToken: 123,
            token: "asdldjfkjdsghshdgfbvjghdbjv"
        }

        this.token = { ...token }
        this.register = true

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
    }
}

export default new User()