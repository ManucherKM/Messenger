//Библиотеки
import { useEffect } from "react"

//Изображение
import vkLogo from "../../assets/Images/vk.svg"

const VKbtn = ({ styleText = "", styleWrapper = "", getResult = () => { } }) => {

    let params = {}

    async function login() {

        params = {
            client_id: "51481402",
            redirect_uri: "http://localhost:3000",
            display: "page"
        }

        window.location.href = `https://oauth.vk.com/authorize?client_id=${params.client_id}&display=${params.display}&redirect_uri=${params.redirect_uri}&scope=email&response_type=code&v=5.131`

    }

    useEffect(() => {
        if (window.location.href.includes("?code=")) {
            const result = {
                client_id: "51481402",
                client_secret: "hSRE0nagTVuZVm4kDYqC",
                redirect_uri: "http://localhost:3000",
                code: window.location.href.split("=")[1]
            }
            getResult(result)
        }
    }, [])

    return (
        <div
            onClick={login}
            className={`border py-2 cursor-pointer rounded-xl hover:opacity-70 bg-[#0077FF] border-none ${styleWrapper}`}
        >
            <div className="flex-center">
                <div className="mr-4">
                    <img
                        src={vkLogo}
                        alt="company-icon"
                        className="w-8 phon:w-7 select-none"
                    />
                </div>
                <div >
                    <span className={`text-white tracking-wide select-none ${styleText}`}>
                        Войти с помощью VK
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VKbtn