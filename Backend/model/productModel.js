const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : String,
},{
    versionKey : false
});

const myModel = mongoose.model("friendName", productSchema)

module.exports = {myModel}