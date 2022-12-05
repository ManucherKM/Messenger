import { makeAutoObservable } from "mobx"

class Profile {

    profile = {}

    constructor() {
        makeAutoObservable(this)
    }

    getProfile(id) {
        /*
        Запрос на бекенд
        */
        this.profile = {
            id: 12
        }
    }
}

export default new Profile