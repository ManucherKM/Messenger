import { makeAutoObservable } from "mobx"

class Config {
    config = {
        register: true,
        user: {
            name: "Mike",
            age: 22,
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    login(data) {
        this.config = data
    }

    logout() {
        this.config = {
            register: false,
            user: {}
        }
    }
}

export default new Config()