const Button = ({ text, style, click, type = "text" }) => {

    function btn() {
        click()
    }

    return (
        <button onClick={btn} type={type} className={`mt-5 bg-green rounded-xl py-3 text-white text-base hover:opacity-70 ${style}`}>{text}</button>
    )
}

export default Button