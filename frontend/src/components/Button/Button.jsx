const Button = ({ style = "", type = "text", click, text, disabled = false }) => {

    function btn() {
        click()
    }

    return (
        <button
            onClick={btn}
            type={type}
            className={`mt-5 outline-none bg-green rounded-xl py-3 text-white text-base hover:opacity-70 disabled:opacity-60 ${style}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button