import { useState } from "react"
import AuthBtn from "../../components/AuthBtn/AuthBtn"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner"
import * as validator from "../../utils/validator"
import googleLogo from "../../assets/Images/google.svg"
import vkLogo from "../../assets/Images/vk.svg"
import { observer } from "mobx-react-lite"

const Register = observer(() => {
  const [loading, setLoading] = useState(false)

  let isEmail = false
  const [styleEmail, setStyleEmail] = useState("w-full rounded-xl")
  const [emailErorrs, setEmailErrors] = useState([]);

  function email(val) {
    if (validator.email(val).result) {
      setEmailErrors([])
      isEmail = true
    }
    setStyleEmail(isEmail ? "w-full rounded-xl border-green dark:border-green" : "w-full rounded-xl border-red-400 dark:border-red-400")
    setEmailErrors(validator.email(val).errors);
  }

  let isPassword = false
  const [stylePassword, setStylePassword] = useState("w-full rounded-xl")
  const [passwordErorrs, setPasswordErrors] = useState([]);

  function password(val) {
    if (validator.password(val).result) {
      setPasswordErrors([])
      isPassword = true
    }
    setPasswordErrors(validator.password(val).errors)
    setStylePassword(isPassword ? "w-full rounded-xl border-green dark:border-green" : "w-full rounded-xl border-red-400 dark:border-red-400")
  }


  function register() {
    console.log("Регистрация");
  }

  function google() {
    console.log("Гугл");
  }

  function vk() {
    console.log("VK");
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-white dark:bg-dark">
      {loading && < Spinner />}
      {!loading &&
        <div className="container flex items-center justify-center">
          <div className="w-96">
            <h2 className="title mb-10 text-green text-center">Регистрация</h2>
            <form onClick={e => e.preventDefault()} className="flex flex-col">
              <div>
                <label htmlFor="email">
                  {emailErorrs && <p className="mb-2 text-red-400">{emailErorrs[0]}</p>}
                  <Input id={"email"} func={email} type="text" placeholder="Почта" styles={styleEmail} />
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="password">
                  {passwordErorrs && <p className="mb-2 text-red-400">{passwordErorrs[0]}</p>}
                  <Input id={"password"} func={password} type="password" placeholder="Пароль" styles={stylePassword} />
                </label>
              </div>
              <Button text={"Регистрация"} click={register} type={"submit"} />
            </form>
            <div className="flex justify-center my-5">
              <span className="subtitle text-green">или</span>
            </div>
            <div>
              <AuthBtn click={google} text={"Войти с помощью Google"} logo={googleLogo} styleWrapper={"bg-white"} styleText={"text-black"} />
            </div>
            <div className="mt-3">
              <AuthBtn click={vk} text={"Войти с помощью VK"} logo={vkLogo} styleWrapper={"bg-[#0077FF] border-none"} styleText={""} />
            </div>
          </div>
        </div>
      }
    </div>
  )
})

export default Register