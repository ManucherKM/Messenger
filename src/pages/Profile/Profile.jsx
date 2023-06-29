import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import Spinner from '../../components/Spinner/Spinner'
import profileController from '../../store/profile'
import userController from '../../store/user'

const Profile = () => {
	const { id } = useParams()
	const [user, setUser] = useState([])

	const [isLoading, setIsLoading] = useState(true)
	const [isLoadingFriend, setIsLoadingFriend] = useState(false)

	const [isFriendMore, setIsFriendMore] = useState(false)
	const [friends, setFriends] = useState([])

	const [isUser, setIsUser] = useState(false)

	const styleWallpaper = {
		backgroundImage: `url(${user.wallpaper})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}

	function updateFriend() {
		setIsFriendMore(true)
		fetchFrined()
	}

	function fetchFrined() {
		;(async () => {
			setIsLoadingFriend(true)
			const friends = profileController.getFriends()
			delay(3000)
				.then(() => {
					setFriends(friends)
				})
				.finally(() => {
					setIsLoadingFriend(false)
				})
		})()
	}

	function updateProfile() {
		console.log('Обновить профиль')
	}

	function message() {
		console.log('Сообщение')
	}

	function moreInfo() {
		console.log('Подробная информация')
	}

	useEffect(() => {
		clearInfo()
		if (id === userController.info.id) {
			setIsUser(true)
		}
		;(async () => {
			const user = await profileController.getProfile(id)
			setUser(user)
			setFriends(user.friends)
			setIsLoading(false)
		})()
	}, [id])

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	function clearInfo() {
		setIsLoading(true)
		setIsLoadingFriend(false)
		setIsFriendMore(false)
		setUser([])
		setFriends([])
	}
	return (
		<div className="flex">
			<Navbar />
			<div className="w-[calc(100vw-80px)] h-[100vh] scroll bg-white dark:bg-dark mint:w-full">
				{isLoading ? (
					<div className="w-full h-full flex-center">
						<Spinner />
					</div>
				) : (
					<>
						<div className="w-full h-[400px] mint:h-[200px] bg-no-repeat bg-center bg-cover" style={styleWallpaper}>
							{isUser && (
								<div className="flex justify-end p-2">
									<Button text="Изменить" onClick={() => {}} styles="px-4 py-2 mt-5" />
								</div>
							)}
						</div>
						<div className="w-[1170px] mx-auto mint:w-full">
							<div className="flex mint:flex-col mint:items-center mint:px-5">
								<div className="w-1/5 mint:w-full mint:h-[60px]">
									<div className="bg-white -translate-y-20 mint:-translate-y-12 h-44 w-44 mint:h-24 mint:w-24 flex-center rounded-full mint:m-auto dark:bg-dark">
										<img
											className="w-40 h-40 rounded-full object-cover mint:w-[90px] mint:h-[90px]"
											src={user.photo}
											alt="photo"
										/>
									</div>
								</div>
								<div className="flex justify-between mint:flex-col mint:p-0 pl-5 pt-5 w-4/5">
									<div>
										<p className="text-2xl font-bold cursor-default dark:text-white mint:text-lg mint:text-center">
											{user.fullName}
										</p>
										<div onClick={moreInfo} className="flex items-center mint:justify-center mt-2">
											<div className="mr-2">
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														className="dark:fill-white"
														d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2ZM8.1 4.5H9.9V6.3H8.1V4.5ZM8.1 8.1H9.9V13.5H8.1V8.1Z"
														fill="black"
														fillOpacity="0.45"
													/>
												</svg>
											</div>
											<span className="hover:underline cursor-pointer opacity-[0.45] dark:text-white">Подробнее</span>
										</div>
									</div>
									<div>
										<div className="mint:flex mint:justify-center mint:mt-2">
											{isUser ? (
												<Button text="Редактировать профиль" onClick={updateProfile} styles="px-4 py-2" />
											) : (
												<Button text="Сообщение" onClick={message} styles="px-4 py-2" />
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="mint:px-5 mint:mt-2">
								<p className="text-2xl font-medium dark:text-white mint:text-lg">Друзья</p>
								<div className="flex mt-10 mb-10 gap-10 flex-wrap mint:gap-3 mint:justify-center">
									{isLoadingFriend ? (
										<div className="w-full h-80 flex-center">
											<Spinner />
										</div>
									) : (
										friends.map(item => (
											<Link key={item.id} to={`/profile/${item.id}`}>
												<div className="border rounded-xl p-5 flex-center flex-col hover:opacity-60 dark:bg-whiteDark dark:border-black/[.0] select-none">
													<img className="w-28 h-28 mint:w-10 mint:h-10" src={item.photo} alt="photo" />
													<span className="w-full text-center text-lg font-medium mt-2 dark:text-white mint:text-sm">
														{item.fullName}
													</span>
												</div>
											</Link>
										))
									)}
									{}
								</div>
								{!isFriendMore && (
									<div className="mb-10 flex-center mint:mb-16">
										<Button text="Смотреть еще" onClick={updateFriend} styles="px-4 py-2" />
									</div>
								)}
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Profile
