//Библиотеки
import { useState } from "react"

//Компоненты
import Spinner from "../../components/Spinner/Spinner"
import Login from "./Login/Login"

const LoginIndex = () => {
    //Состояние спинера
    const [loading, setLoading] = useState(false)
    return (
        <div className="w-[100vw] h-[100vh] flex-center bg-white dark:bg-dark">
            {loading && < Spinner />}
            {!loading && <Login setLoading={setLoading} />}
        </div>
    )
}

export default LoginIndex