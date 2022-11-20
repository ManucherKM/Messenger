import { makeAutoObservable } from "mobx"
import checkTheme from "../utils/themeCheck"

class Theme {
    theme = localStorage.theme

    constructor() {
        makeAutoObservable(this)
    }

    dark() {
        localStorage.theme = 'dark'
        checkTheme()
    }

    light() {
        localStorage.theme = 'light'
        checkTheme()
    }

    systemic() {
        localStorage.removeItem('theme')
        checkTheme()
    }
}

export default new Theme