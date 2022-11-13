//Библиотеки
import { useState } from "react"

const Input = ({ type = "text", styles = "", id = "input", placeholder, func, pressEnter = () => { } }) => {

    const [value, setValue] = useState("")

    function change(e) {
        setValue(e.target.value)
        func(e.target.value)
    }

    function keyDown(e) {
        if (e.key === "Enter") {
            pressEnter()
            setValue("")
        }
    }

    return (
        <input
            id={id}
            onChange={change}
            type={type}
            placeholder={placeholder}
            value={value}
            onKeyDown={keyDown}
            className={`outline-none px-4 py-2 border text-black font-normal tracking-wider border-gray-300 dark:bg-whiteDark dark:border-gray-600 dark:text-white ${styles}`}
        />
    )
}

export default Input