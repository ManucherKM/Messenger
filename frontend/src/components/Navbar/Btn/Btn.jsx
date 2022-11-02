import { Link } from "react-router-dom"

const Btn = ({ children, redirect, styles }) => {
    return (
        <Link className={`bg-white flex items-center justify-center border-2 border-white/[.0] drop-shadow p-5 mx-[6px] my-[8px] rounded-3xl btn-nav dark:bg-whiteDark dark:hover:opacity-70 ${styles}`} to={redirect}>
            {children}
        </Link>
    )
}

export default Btn