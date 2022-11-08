//Библиотеки
import { Link } from "react-router-dom"

//Компоненты
import UserLogo from "../../UserLogo/UserLogo"

//Изображения
import logo from "../../../assets/Images/logo.svg"
import userAvatar from "../../../assets/Images/userAvatar.avif"

const NavigateTop = () => {
    return (
        <div className='mx-[11px] mt-[27px] border-b border-black/[.1] dark:border-white/[.3]'>
            <div className='flex-center cursor-pointer'>
                <Link
                    to="/panel"
                    className='w-4/6'
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full"
                    />
                </Link>
            </div>
            <UserLogo
                path={"/"}
                stylesWrapper={"mt-7 pb-[23px]"}
                srcImg={userAvatar}
            />
        </div>
    )
}

export default NavigateTop