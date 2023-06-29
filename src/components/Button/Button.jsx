const Button = ({ styles = '', type = 'text', onClick, text, disabled = false }) => {
	function btn() {
		onClick()
	}

	return (
		<button
			onClick={btn}
			type={type}
			className={`outline-none bg-green rounded-xl py-3 text-white text-base mint:text-sm hover:opacity-70 mint:hover:opacity-100 disabled:opacity-60 ${styles}`}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
