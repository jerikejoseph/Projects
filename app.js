import express from "express"
import env from "dotenv"
import { Connection } from "./connection.js"
import router from "./router.js"

env.config()
const app=express()


app.use(express.json({limit:'50mb'}))
app.use(express.static("front-end"))
app.use("/api",router)

Connection().then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server connected at http://localhost:3000`);
    })

}).catch((error)=>{
    console.log(error);
})
