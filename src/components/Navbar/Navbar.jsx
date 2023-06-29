//Компоненты
import { useSwipeRight } from '../../hooks/useSwipeRight'
import NavigateBottom from './NavigateBottom/NavigateBottom'
import NavigateCenter from './NavigateCenter/NavigateCenter'
import NavigateTop from './NavigateTop/NavigateTop'

const Navbar = () => {
	const touch = useSwipeRight()

	return (
		<>
			{touch && (
				<div className="w-20 h-[100vh] flex flex-col justify-between bg-gray-100 dark:bg-dark">
					<div>
						<NavigateTop />
						<NavigateCenter />
					</div>
					<NavigateBottom />
				</div>
			)}
		</>
	)
}

export default Navbar
