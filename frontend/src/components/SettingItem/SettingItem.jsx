import CheckBox from "../CheckBox/CheckBox"

const SettingItem = ({ text, setCheckbox, isCheck = false }) => {
    function clickHandler(val) {
        setCheckbox(val)
    }
    return (
        <div className="flex mt-10">
            <div className="w-1/2 mr-10">
                <p className="text-base dark:text-white/[.8]">
                    {text}
                </p>
            </div>
            <div className="w-1/2 ">
                <div className="flex items-center justify-center h-full ml-10">
                    <CheckBox
                        isCheck={isCheck}
                        checked={clickHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default SettingItem