

   const express = require("express")
const { createProductController, getProductController } = require("../controller/productController")

   
   const router = express.Router()

    router.post("/post", createProductController)

    router.get("/", getProductController)

    module.exports = {router}