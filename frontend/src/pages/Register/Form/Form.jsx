//Библиотеки
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
//Компоненты
import Button from "../../../components/Button/Button"
//Утилиты
import InputEmail from "../InputEmail/InputEmail"
import InputPassword from "../InputPassword/InputPassword"
import userController from "../../../store/user"

const Form = observer(({ setLoading }) => {
    const navigate = useNavigate();
    const [disableBtn, setDisableBtn] = useState(true);

    const [isCorrectEmail, setIsCorrectEmail] = useState(false)
    const [emailValue, setEmailValue] = useState("")
    const [emailErr, setEmailErr] = useState(false)


    const [isCorrectPassword, setIsCorrectPassword] = useState(false)
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordErr, setPasswordErr] = useState(false)

    //При обычном логине
    function register() {
        setLoading(true)
        const obj = {
            email: emailValue,
            password: passwordValue
        }
        const err = userController.register(obj)
        if (err.length !== 0) {
            setLoading(false)
            console.log("Неверный логин или пароль");
            setEmailErr(true)
            setPasswordErr(false)
            return
        }
        console.log("Регистрация", obj);
        setLoading(false)
        navigate("/chat")
    }

    function updateBtn() {
        const isCorrect = isCorrectEmail && isCorrectPassword
        setDisableBtn(isCorrect ? false : true)
    }

    useEffect(() => {
        updateBtn()
    }, [isCorrectEmail, isCorrectPassword])

    //При отправке формы
    const formSend = e => e.preventDefault()
    return (
        <form
            onClick={formSend}
            className="flex flex-col"
        >
            <div>
                <InputEmail
                    setIsCorrectEmailParent={setIsCorrectEmail}
                    setEmailValueParent={setEmailValue}
                    err={emailErr}
                />
            </div>
            <div className="mt-5">
                <InputPassword
                    setIsCorrectPasswordParent={setIsCorrectPassword}
                    setPasswordValueParent={setPasswordValue}
                    err={passwordErr}
                />
            </div>
            <Button
                text={"Вход"}
                click={register}
                type={"submit"}
                disabled={disableBtn}
            />
            <Link
                className="text-green text-sm font-medium mt-3 ml-auto hover:opacity-60"
                to="/"
            >
                Авторизация
            </Link>
        </form>
    )
})

export default Form