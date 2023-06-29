//Библиотеки
import { Link } from 'react-router-dom'

const Btn = ({ children, redirect, styles = '', onClick = () => {} }) => {
	function start() {
		onClick()
	}

	return (
		<Link
			onClick={start}
			id="btn-nav"
			className={`bg-white flex-center border-2 border-white/[.0] drop-shadow p-5 mx-[6px] my-[8px] rounded-3xl dark:bg-whiteDark dark:hover:opacity-70 ${styles}`}
			to={redirect}
		>
			{children}
		</Link>
	)
}

export default Btn
