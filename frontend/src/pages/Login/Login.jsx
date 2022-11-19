//Библиотеки
import { useState } from "react"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"

//Компоненты
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner"
import { Link } from "react-router-dom"
import VKbtn from "../../components/VKbtn/VKbtn"
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn"

//Утилиты
import * as validator from "../../utils/validator"
import userController from "../../store/user"

const Login = observer(() => {

  //Состояние спинера
  const [loading, setLoading] = useState(false)

  const [isCorrectEmail, setIsCorrectEmail] = useState(null)

  const [emailValue, setEmailValue] = useState("")

  const [styleEmail, setStyleEmail] = useState("")

  const [emailErorrs, setEmailErrors] = useState([]);

  //При вводе почты
  function email(val) {

    setEmailValue(val)

    //Если почта валидная
    if (validator.email(val).result) {

      setEmailErrors([])

      setIsCorrectEmail(true)

    } else {

      setIsCorrectEmail(false)

      setEmailErrors(validator.email(val).errors);
    }

    if (val === "") {

      setStyleEmail("")

      setEmailErrors([])

    } else {

      setStyleEmail(isCorrectEmail ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

    }

  }

  useEffect(() => {
    //Пропускаем первый рендер
    if (styleEmail) {
      setStyleEmail(isCorrectEmail ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")
    }
  }, [isCorrectEmail])

  const [isCorrectPassword, setIsCorrectPassword] = useState(null)

  const [passwordValue, setPasswordValue] = useState("")

  const [stylePassword, setStylePassword] = useState("")

  const [passwordErorrs, setPasswordErrors] = useState([]);

  //То же самое что и с почтаой
  function password(val) {

    setPasswordValue(val)

    if (validator.password(val).result) {

      setPasswordErrors([])

      setIsCorrectPassword(true)

    } else {

      setIsCorrectPassword(false)

      setPasswordErrors(validator.password(val).errors)

    }
    if (val === "") {

      setStylePassword("")

      setPasswordErrors([])

    } else {

      setStylePassword(isCorrectPassword ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

    }

  }

  useEffect(() => {
    //Пропускаем первый рендер
    if (stylePassword) {
      setStylePassword(isCorrectPassword ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")
    }
  }, [isCorrectPassword])

  //При отправке формы
  function formSend(e) {
    e.preventDefault()
  }

  //При обычном логине
  function login() {
    setLoading(true)

    const obj = {
      email: emailValue,
      password: passwordValue
    }

    const err = userController.login(obj)

    if (err.length !== 0) {
      setLoading(false)

      console.log("Неверный логин или пароль");

      setEmailErrors(["Неверный логин или пароль"])
      setIsCorrectEmail(false)
      setStyleEmail(isCorrectEmail ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

      setPasswordErrors(["Неверный логин или пароль"])
      setIsCorrectPassword(false)
      setStylePassword(isCorrectPassword ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

      return
    }

    console.log("Вход", obj);

    setLoading(false)
  }

  //При входе через гугл
  function google(result) {
    setLoading(true)

    const err = userController.loginGoogle(result)

    if (err) {
      setLoading(false)

      console.log("Ошибка авторизации через гугл");

      return
    }

    console.log("Гугл", result);

    setLoading(false)
  }

  //При входе через VK
  function vk() {
    setLoading(true)

    console.log("VK");

    setLoading(false)

  }

  return (
    <div className="w-[100vw] h-[100vh] flex-center bg-white dark:bg-dark">
      {loading && < Spinner />}
      {!loading &&
        <div className="container flex-center">
          <div className="w-96">
            <h2 className="title mb-10 text-green text-center">
              Вход
            </h2>
            <form
              onClick={formSend}
              className="flex flex-col"
            >
              <div>
                <label htmlFor="email">
                  {emailErorrs &&
                    <p className="mb-2 text-red-400">
                      {emailErorrs[0]}
                    </p>
                  }
                  <Input
                    id={"email"}
                    func={email}
                    type="text"
                    placeholder="Почта"
                    styles={`w-full rounded-xl ${styleEmail}`}
                  />
                </label>
              </div>
              <div className="mt-5">
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
              </div>
              <Button
                text={"Вход"}
                click={login}
                type={"submit"}
              />
              <Link className="text-green text-sm font-medium mt-3 ml-auto hover:opacity-60" to="/register">
                Регистрация
              </Link>
            </form>
            <div className="flex justify-center my-5">
              <span className="subtitle text-green">
                или
              </span>
            </div>
            <div>
              <GoogleBtn getResult={google} />
            </div>
            <div className="mt-3">
              <VKbtn getResult={vk} />
            </div>
          </div>
        </div>
      }
    </div>
  )
})

export default Login