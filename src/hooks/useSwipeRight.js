import { useState } from 'react'

export function useSwipeRight() {
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)
	const [touch, setTouch] = useState(false)

	const handlerTouchStart = e => {
		setTouchStart(e.targetTouches[0].clientX)
	}

	const handlerTouchMove = e => {
		setTouchEnd(e.targetTouches[0].clientX)
		checkSwipe()
	}

	window.addEventListener('touchstart', handlerTouchStart)
	window.addEventListener('touchmove', handlerTouchMove)

	function checkSwipe() {
		if (touchEnd - touchStart > 120) {
			setTouch(true)
		} else {
			setTouch(false)
		}
	}

	return touch
}
