//Библиотеки
import { useEffect, useState } from 'react'
//Компоненты
import Input from '../../../components/Input/Input'
//Утилиты
import { useSkipRender } from '../../../utils/useSkipRender'
import * as validator from "../../../utils/validator"

const InputPassword = ({ setIsCorrectPasswordParent, setPasswordValueParent, err }) => {
    const isSkipRender = useSkipRender()

    const [isCorrectPassword, setIsCorrectPassword] = useState(null)
    const [stylePassword, setStylePassword] = useState("")
    const [passwordErorrs, setPasswordErrors] = useState([]);

    function password(val) {
        if (val === "") {
            setStylePassword("")
            setPasswordErrors([])
            return
        }
        if (validator.password(val).result) {
            setPasswordErrors([])
            setIsCorrectPassword(true)
            setIsCorrectPasswordParent(true)
            setPasswordValueParent(val)
        } else {
            setIsCorrectPassword(false)
            setIsCorrectPasswordParent(false)
            setPasswordErrors(validator.password(val).errors)
        }
        setStylePassword(isCorrectPassword
            ? "border-green dark:border-green"
            : "border-red-400 dark:border-red-400"
        )

    }

    useEffect(() => {
        if (isSkipRender) {
            setIsCorrectPassword(false)
            setIsCorrectPasswordParent(false)
        }
    }, [err])

    useEffect(() => {
        //Пропускаем первый рендер
        if (isSkipRender) {
            setStylePassword(isCorrectPassword
                ? "border-green dark:border-green"
                : "border-red-400 dark:border-red-400"
            )
        }
    }, [isCorrectPassword])

    return (
        <label htmlFor="password">
            {passwordErorrs &&
                <p className="mb-2 text-red-400">
                    {passwordErorrs[0]}
                </p>
            }
            <Input
                id={"password"}
                func={password}
                type="password"
                placeholder="Пароль"
                styles={`w-full rounded-xl ${stylePassword}`}
            />
        </label>
    )
}

export default InputPassword