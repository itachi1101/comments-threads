import express from "express";
import dotenv from 'dotenv'
import postRouter from "./routes/postRoutes.js";
const app = express()
dotenv.config()


app.use("/post",postRouter)



app.listen(process.env.PORT, (req, res) => {
    console.log("Server up and running")
})

