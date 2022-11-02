import google from "../../assets/Images/google.png"

const OrOther = () => {
    
    function authGoogle() {
        console.log(123);
    }
    
    return (
        <>
            <div className="flex justify-center my-5">
                <span className="subtitle text-green">или</span>
            </div>
            <div onClick={authGoogle} className="border rounded-xl bg-blue-500 hover:bg-blue-600">
                <div className="px-4 py-3 flex items-center" >
                    <div><img src={google} alt="company-icon" className="w-10 rounded-xl" /></div>
                    <div className="flex items-center justify-center w-[85%]">
                        <span className="text-white tracking-wide">Войти с помощью Google</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrOther