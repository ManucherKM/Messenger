//Библиотеки
import { useEffect, useRef } from 'react'

export function useSkipRender() {
	const ref = useRef(false)
	useEffect(() => {
		ref.current = true
	}, [])
	return ref.current
}
