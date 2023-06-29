//Библиотеки
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

//Компоненты
import UserLogo from '../../UserLogo/UserLogo'

//Изображения
import logo from '../../../assets/Images/logo.svg'

//Утилиты
import userControll from '../../../store/user'

const NavigateTop = observer(() => {
	const userAvatar = userControll.info.avatar

	return (
		<div className="mx-[11px] mt-[27px] border-b border-black/[.1] dark:border-white/[.3]">
			<div className="flex-center cursor-pointer">
				<Link to="/chat" className="w-4/6">
					<img src={logo} alt="Logo" className="w-full" />
				</Link>
			</div>
			<UserLogo path={`/profile/${userControll.info.id}`} stylesWrapper={'mt-7 pb-[23px]'} srcImg={userAvatar} />
		</div>
	)
})

export default NavigateTop
