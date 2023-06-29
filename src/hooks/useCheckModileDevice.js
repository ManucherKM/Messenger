import { useEffect, useState } from 'react'

export function useCheckModileDevice() {
	const [isMobile, setIsModile] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsModile(true)
		} else {
			setIsModile(false)
		}
	}, [])

	return isMobile
}
