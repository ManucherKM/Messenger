import chatController from "../../store/chat";

const ContextMenu = ({ x, y, setIsRender, messageId }) => {

    function mouseHandler() {
        setIsRender(false)
    }

    function remove() {
        console.log("remove");
        chatController.removeMessage(messageId)
        setIsRender(false)

    }

    function copy() {
        console.log("copy");
        setIsRender(false)

    }
    return (
        <div onMouseDown={mouseHandler} className={`fixed top-0 left-0 w-full h-full bg-black/[.2] z-10`}>
            <div
                className="absolute bg-white rounded-xl"
                style={{ top: y, left: x }}
                onMouseDown={e => e.stopPropagation()}
            >
                <div onClick={remove} className="bg-white cursor-pointer px-4 py-2 hover:bg-gray-300 rounded-t-xl">
                    <span className="select-none">
                        Удалить
                    </span>
                </div>
                <div onClick={copy} className="bg-white cursor-pointer px-4 py-2 hover:bg-gray-300 rounded-b-xl">
                    <span className="select-none">
                        Копировать
                    </span>
                </div>
            </div>

        </div >
    )
}

export default ContextMenu