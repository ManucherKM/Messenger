const ContextMenu = ({ x = 500, y = 500, setIsRender }) => {


    function clickHandler() {
        setIsRender(false)
    }

    return (
        <div onClick={clickHandler} className={`fixed w-full h-full bg-black/[.0]`}>
            <div
                className={`absolute top-[${x}] left-[${y}] bg-pink-400`}
                onClick={e => e.stopPropagation()}
            >
                <div>
                    Удалить
                </div>
                <div>
                    Копировать
                </div>
            </div>

        </div>
    )
}

export default ContextMenu