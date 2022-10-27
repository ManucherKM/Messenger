import { useState } from "react"

const Input = ({ type, placeholder, styles }) => {

    const [value, setValue] = useState("")

    function change(e) {
        setValue(e.target.value)
        console.log(123);
    }
    return (
        <input onChange={change} type={type} placeholder={placeholder} value={value} className={`outline-none px-4 py-2 border font-normal ${styles}`} />
    )
}

export default Input