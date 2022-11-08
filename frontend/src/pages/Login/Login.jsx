//Библиотеки
import { useState } from "react"
import { observer } from "mobx-react-lite"

//Компоненты
import AuthBtn from "../../components/AuthBtn/AuthBtn"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner"

//Утилиты
import * as validator from "../../utils/validator"

//Изображения
import googleLogo from "../../assets/Images/google.svg"
import vkLogo from "../../assets/Images/vk.svg"

const Login = observer(() => {

  //Состояние спинера
  const [loading, setLoading] = useState(false)

  let isCorrectEmail = false

  const [styleEmail, setStyleEmail] = useState("")

  const [emailErorrs, setEmailErrors] = useState([]);

  //При вводе почты
  function email(val) {

    //Если почта валидная
    if (validator.email(val).result) {

      //Очищаем массив ошибок
      setEmailErrors([])

      isCorrectEmail = true

    }

    //Меняем стили для почты
    setStyleEmail(isCorrectEmail ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

    //Меняет массив ошибок
    setEmailErrors(validator.email(val).errors);

  }

  let isCorrectPassword = false

  const [stylePassword, setStylePassword] = useState("")

  const [passwordErorrs, setPasswordErrors] = useState([]);

  //То же самое что и с почтаой
  function password(val) {

    if (validator.password(val).result) {

      setPasswordErrors([])

      isCorrectPassword = true

    }

    setPasswordErrors(validator.password(val).errors)

    setStylePassword(isCorrectPassword ? "border-green dark:border-green" : "border-red-400 dark:border-red-400")

  }

  //При отправке формы
  function formSend(e) {
    e.preventDefault()
  }

  //При обычном логине
  function login() {
    setLoading(true)

    console.log("Вход");

    setLoading(false)
  }

  //При входе через гугл
  function google() {
    console.log("Гугл");
  }

  //При входе через VK
  function vk() {
    console.log("VK");
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
            </form>
            <div className="flex justify-center my-5">
              <span className="subtitle text-green">
                или
              </span>
            </div>
            <div>
              <AuthBtn
                click={google}
                text={"Войти с помощью Google"}
                logo={googleLogo}
                styleWrapper={"bg-white"}
                styleText={"text-black"}
              />
            </div>
            <div className="mt-3">
              <AuthBtn
                click={vk}
                text={"Войти с помощью VK"}
                logo={vkLogo}
                styleWrapper={"bg-[#0077FF] border-none"}
                styleText={""}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
})

export default Login