import vkLogo from "../../assets/Images/vk.svg"


const VKbtn = ({ styleText = "", styleWrapper = "", getResult = () => { } }) => {

    function login() {
        const result = null
        getResult(result)
    }

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