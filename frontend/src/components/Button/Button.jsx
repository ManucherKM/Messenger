const Button = ({ styles = "", type = "text", onClick, text, disabled = false }) => {

    function btn() {
        onClick()
    }

    return (
        <button
            onClick={btn}
            type={type}
            className={`outline-none bg-green rounded-xl py-3 text-white text-base hover:opacity-70 disabled:opacity-60 ${styles}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button