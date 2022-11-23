//Компоненты
import GoogleBtn from "../../../components/GoogleBtn/GoogleBtn"
import VKbtn from "../../../components/VKbtn/VKbtn"

//Утилиты
import userController from "../../../store/user"

const OtherLogin = ({ setLoading }) => {
    //При входе через гугл
    function google(result) {
        (async () => {
            setLoading(true)

            if (!result) {
                setLoading(false)

                console.log("Ошибка авторизации через гугл, пустой токен");

                return
            }

            const err = await userController.loginGoogle(result)

            if (err.length !== 0) {
                setLoading(false)

                console.log("Ошибка авторизации через гугл", err);

                return
            }

            console.log("Гугл", result);

            setLoading(false)
        })()
    }
    //При входе через VK
    function vk(result) {

        setLoading(true)


        if (!result) {
            setLoading(false)

            console.log("Ошибка авторизации через VK, пустой токен");

            return
        }


        const err = userController.loginVK(result)

        if (err.length !== 0) {
            setLoading(false)

            console.log("Ошибка авторизации через VK");

            return
        }

        console.log("Успешная авторизация через VK");

        setLoading(false)


    }
    return (
        <>
            <div>
                <GoogleBtn getResult={google} />
            </div>
            <div className="mt-3">
                <VKbtn getResult={vk} />
            </div>
        </>
    )
}

export default OtherLogin