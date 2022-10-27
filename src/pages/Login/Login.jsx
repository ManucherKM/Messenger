import OrOther from "../../components/Auth/OrOther"
import Input from "../../components/Input/Input"

const Login = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-2/6">
        <h2 className="title mb-10 text-green text-center">Вход</h2>
        <form className="flex flex-col">
          <div>
            <Input type="text" placeholder="Почта" styles={"w-full rounded-xl"} />
          </div>
          <div className="mt-5">
            <Input type="password" placeholder="Пароль" styles={"w-full rounded-xl"} />
          </div>
          <OrOther />
        </form>
      </div>
    </div>
  )
}

export default Login