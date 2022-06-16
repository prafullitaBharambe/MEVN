const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const BankingCustomerModel = db.banking


// Create
exports.create = (req,res,next) =>{
    let {name,mobile,address,email,password} = req.body
    BankingCustomerModel.create({
        name,
        mobile,
        address,
        email,
        password
    }, (err,result) => {
        if(err){
            res.json({
                message: "Error while saving customer",
                error: err
            })
        }
        res.json({
            status:200,
            data:result
        })
    })
}

// Get All
exports.getAll = (req,res,next) =>{
    BankingCustomerModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"Successfully Retrieved all the Customers",
            data:{
                customer:result
            }
        })
    })
}
// Get By ID
exports.getById = (req,res,next) =>{

BankingCustomerModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Customers By Id",
            data:{
                customer: result
            }
        })
    })
} 

// Get By Email
exports.getByEmail = (req,res,next) =>{
   // console.log(req.params);
    BankingCustomerModel.find({"email":req.body.email},(err,result)=> {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Customers By Email",
            data:{
                customer: result
            }
        })
    })
}
// Update
exports.updateById = (req,res,next) =>{
    BankingCustomerModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated customers By Id",
            data:{
                customer: result
            }
        })
    })

}
// Delete By Id
exports.deleteById = (req,res,next) =>{
    BankingCustomerModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted customer By Id",
            data:{
                customer: result
            }
        })
    })
}
// Delete All
exports.deleteAll = (req,res,next) =>{
    BankingCustomerModel.deleteMany((err,result)=>{
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted All Customers",
            data:{
                customer: result
            }
        })
    })

}