import { useState, useEffect } from "react";

const DropDownList = ({ list, click }) => {

    useEffect(() => {
        if (list.length === 0) {
            return console.log("Пустой массив");
        }
    }, [list]);

    //Значение по умолчанию
    const [selected, setSelected] = useState(list[0].text);

    const [visible, setVisible] = useState(false)

    function newSelected(selected) {
        setVisible(false)
        setSelected(selected)
        click(selected)
    }

    return (
        <div className="relative">
            <div className="text-myblue cursor-pointer hover:opacity-60 flex items-center text-sm">
                <span onClick={() => setVisible(!visible)} className="mr-2 select-none">
                    {selected}
                </span>
            </div>

            {visible &&
                <div onClick={e => e.stopPropagation()} className="border-2 rounded-xl bg-white border-gray-300 mt-2 relative z-20">
                    {list.map(item =>
                        <div onClick={() => newSelected(item.text)} key={item.id} className="cursor-pointer hover:opacity-60">
                            <div className="p-3">
                                <span className="select-none">
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            }
            {visible && <div onClick={() => setVisible(false)} className="fixed w-[100vw] h-[100vh] top-0 left-0 z-10"></div>}
        </div>
    )
}

export default DropDownList