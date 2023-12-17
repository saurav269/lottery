const { myModel }  = require("../model/productModel")

const express = require("express")



 const createProductController= async(req,res)=>{

    const payload = req.body
    try{
        const data = new myModel(payload)
        await data.save()
        res.status(200).send({
            status : true,
            msg : "data created successfully"
        })
    }catch(err){
        console.log(err)
        res.status(201).send({
            status: false,
            msg : "Error in Create API",
            err
        })
    }
}

 const getProductController = async(req,res) => {
      const todo = req.query
    try{
        const pro = await myModel.find(todo)
        res.status(200).send({
            status : true,
            pro,
        })
    }catch(err){
        console.log(err)
    }
}
module.exports = {createProductController, getProductController}