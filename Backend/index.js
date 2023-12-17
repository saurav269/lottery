
const express = require("express")
const cors = require("cors")

const { router } = require("./route/productRoute")
const connection = require("./config/db")



const app = express()

app.use(express.json())
app.use(cors())
connection()

app.use('/names',router)

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.listen(4500, async() => {
    try{
        await connection
        console.log("Server is running on port" + " "+ "connected to db")

    }catch(err){
        console.log(err)
    }
})