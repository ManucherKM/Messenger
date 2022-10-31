
const AuthBtn = ({ click, logo, text, styleWrapper, styleText }) => {
    function auth() {
        click()
    }
    return (
        <div onClick={auth} className={`border py-2 bg-white cursor-pointer rounded-xl hover:opacity-70 ${styleWrapper}`}>
            <div className="flex items-center justify-center">
                <div className="mr-4">
                    <img src={logo} alt="company-icon" className="w-8" />
                </div>
                <div >
                    <span className={`text-white tracking-wide ${styleText}`}>{text}</span>
                </div>
            </div>
        </div>
    )
}

export default AuthBtn