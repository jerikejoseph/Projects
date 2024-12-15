import express from "express"
import env from "dotenv"
import Connection from "./connection.js";
import router from "./router.js";

env.config()
const app=express()
app.use(express.json())


app.use(express.static("frond-end"))
app.use('/api',router)

Connection().then(()=>{
    console.log("Database connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`);
        
    })
    
}).catch((error)=>{
    console.log(error);
    
})