const AuthBtn = ({ click = () => { }, styleWrapper = "", styleText = "", logo, text, }) => {

    function auth() {
        click()
    }

    return (
        <div
            onClick={auth}
            className={`border py-2 bg-white cursor-pointer rounded-xl hover:opacity-70 ${styleWrapper}`}
        >
            <div className="flex-center">
                <div className="mr-4">
                    <img
                        src={logo}
                        alt="company-icon"
                        className="w-8 phon:w-7 select-none"
                    />
                </div>
                <div >
                    <span className={`text-white tracking-wide select-none ${styleText}`}>
                        {text}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthBtn