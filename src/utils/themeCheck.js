function checkTheme() {
    //Проверка темы в сторе
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export default checkTheme