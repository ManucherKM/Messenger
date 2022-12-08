//Библиотеки
import { useState, useEffect } from "react";

//Компоненты
import List from "../List/List"

const DropDownList = ({ list, click }) => {

    //При изменении списка проверяем его на пустоту
    useEffect(() => {
        if (list.length === 0) {
            return console.log("Пустой массив");
        }
    }, [list]);

    //Значение по умолчанию
    const [selected, setSelected] = useState(list[0].text);

    //Булевое значение для рендеринага выподающего списка
    const [visible, setVisible] = useState(false)

    //При выборе одного из полей
    function newSelected(selected) {
        setVisible(false)
        setSelected(selected)
        click(selected)
    }

    //Изменение видимости выподающего меню
    function uploadVisible() {
        setVisible(!visible)
    }

    //Блокируем изменение видимости выподающего меню
    function blockUploadVisible(e) {
        e.stopPropagation()
    }

    return (
        <div className="relative">
            <div className="absolute">
                <div className="text-myblue cursor-pointer hover:opacity-60 flex items-center text-sm">
                    <span
                        onClick={uploadVisible}
                        className="mr-2 select-none whitespace-nowrap"
                    >
                        {selected}
                    </span>
                </div>
                {visible &&
                    <div
                        onClick={blockUploadVisible}
                        className="border rounded-xl bg-white border-gray-300 mt-2 relative z-20 dark:bg-whiteDark dark:border-gray-600"
                    >
                        <List
                            mass={list}
                            render={item =>
                                <div
                                    onClick={() => newSelected(item.text)}
                                    key={item.id}
                                    className="cursor-pointer hover:opacity-60"
                                >
                                    <div className="p-3">
                                        <span className="select-none whitespace-nowrap dark:text-white">
                                            {item.text}
                                        </span>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                }
                {visible &&
                    <div
                        onClick={uploadVisible}
                        className="fixed w-[100vw] h-[100vh] top-0 left-0 z-10">
                    </div>
                }
            </div>
        </div>
    )
}

export default DropDownList