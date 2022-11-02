import express from "express"
import mongoose from "mongoose"

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: "Сервер работает"
        })
    } catch (e) {
        res.status(500).json({
            message: "Ошибка сервера"
        })
    }
})

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер запустился на ${PORT} порту`);
        })
    } catch (e) {
        console.log(e), "\n\nСервер не запустился";
    }
}

start()