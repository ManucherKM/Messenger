export function email(val) {
	const regexp =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	const errors = []
	if (!regexp.test(val)) errors.push('Некорректная почта')
	return {
		errors: errors,
		result: regexp.test(val),
	}
}

export function password(val) {
	const errors = []
	if (val.length < 8 || val.length >= 30) errors.push('Некорректный пароль')
	return {
		errors: errors,
		result: errors.length === 0 ? true : false,
	}
}
