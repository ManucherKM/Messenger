const Button = ({ text, style, click, type = "text" }) => {

    function btn() {
        click()
    }

    return (
        <button onClick={btn} type={type} className={`mt-5 bg-green rounded-xl py-3 text-white text-base  ${style}`}>{text}</button>
    )
}

export default Button