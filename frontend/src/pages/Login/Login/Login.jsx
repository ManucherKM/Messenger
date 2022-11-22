//Компоненты
import Form from "../Form/Form"

//Утилиты
import OtherLogin from "../OtherLogin/OtherLogin";

const Login = ({ setLoading }) => {

    return (
        <div className="container flex-center">
            <div className="w-96">
                <h2 className="title mb-10 text-green text-center">
                    Вход
                </h2>
                <Form
                    setLoading={setLoading}
                />
                <div className="flex justify-center my-5">
                    <span className="subtitle text-green">
                        или
                    </span>
                </div>
                <OtherLogin
                    setLoading={setLoading}
                />
            </div>
        </div>
    )
}

export default Login