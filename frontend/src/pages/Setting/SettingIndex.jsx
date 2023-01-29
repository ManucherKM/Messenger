import { useState } from "react"

import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import userController from "../../store/user"
import SettingItem from "../../components/SettingItem/SettingItem"
import { observer } from "mobx-react-lite"

const SettingIndex = observer(() => {
    const [darkTheme, setDarkTheme] = useState(false);
    //Прочие настройки
    const [example, setExample] = useState(false);

    function saveSatting() {
        const config = {
            darkTheme: darkTheme
        }
        userController.updateConfig(config)
    }

    return (
        <div className="flex">
            <Navbar />
            <div className="w-[calc(100vw-80px)] h-[100vh] scroll bg-white dark:bg-dark">
                <div className="mx-10">
                    <div className="mt-5">
                        <h2 className="title">
                            Настройки
                        </h2>
                        <div>
                            <SettingItem
                                isCheck={userController.config.darkTheme}
                                text={"Темная тема. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores omnis magnam impedit modi fugiat."}
                                setCheckbox={setDarkTheme}
                            />
                            <SettingItem
                                text={"Прочее. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores omnis magnam impedit modi fugiat."}
                                setCheckbox={setExample}
                            />
                            <SettingItem
                                text={"Прочее. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores omnis magnam impedit modi fugiat."}
                                setCheckbox={setExample}
                            />
                            <SettingItem
                                text={"Прочее. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores omnis magnam impedit modi fugiat."}
                                setCheckbox={setExample}
                            />
                            <SettingItem
                                text={"Прочее. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores omnis magnam impedit modi fugiat."}
                                setCheckbox={setExample}
                            />
                        </div>
                        <div className="mt-10 mb-10">
                            <Button
                                text="Сохранить"
                                styles="px-10 mt-5"
                                onClick={saveSatting}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default SettingIndex
