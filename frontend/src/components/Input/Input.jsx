import { useState } from "react"

const Input = ({ type, placeholder, styles, click, id = "input" }) => {

    const [value, setValue] = useState("")

    function change(e) {
        setValue(e.target.value)
        click(e.target.value)
    }
    return (
        <input id={id} onChange={change} type={type} placeholder={placeholder} value={value} className={`outline-none px-4 py-2 border border-gray-300 font-normal tracking-wider dark:bg-whiteDark dark:border-white/[.3] dark:text-white ${styles}`} />
    )
}

export default Input