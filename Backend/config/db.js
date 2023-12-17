const mongoose = require("mongoose")

const connection  = async() => {

    try{
        await mongoose.connect("mongodb+srv://saurav:mallik@cluster0.5bromki.mongodb.net/nameData")
        console.log("Connect")
    }catch(err){
        console.log(err)
    }

}

module.exports = connection