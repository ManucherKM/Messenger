//Библиотеки
import { makeAutoObservable } from "mobx"

class Profile {

    constructor() {
        makeAutoObservable(this)
    }

    getProfile(id) {
        /*
        Запрос на бекенд
        */
       
        const data = {
            id: Date.now(),
            fullName: "Manucher Kurbanov",
            wallpaper: "https://img1.akspic.ru/crops/8/1/9/7/6/167918/167918-anime_pejzazh-anime-pejzazhnaya_zhivopis-zhivopis-art-3840x2160.jpg",
            photo: "https://images.unsplash.com/photo-1669058665299-d6f81125dce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            friends: [
                {
                    id: 123,
                    photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                    fullName: "Manucher Kurbanov"
                },
                {
                    id: 543,
                    photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                    fullName: "Manucher Kurbanov"
                },
                {
                    id: 2345632,
                    photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                    fullName: "Manucher Kurbanov"
                },
                {
                    id: 54,
                    photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                    fullName: "Manucher Kurbanov"
                },
                {
                    id: 367864324302,
                    photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                    fullName: "Manucher Kurbanov"
                }
            ]
        }

        return data
    }

    getFriends() {
        const data = [
            {
                id: 136421324534,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 543,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 2345632,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 54,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 367864324302,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 1364221325624534,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 34258578,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 34302,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
            {
                id: 1364213265624534,
                photo: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
                fullName: "Manucher Kurbanov"
            },
        ]
        return data
    }
}

export default new Profile
