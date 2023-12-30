const router = require('express').Router();
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');
const gettasks = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await tasks.countDocuments();
  const todo = await  tasks.find({user:req.CurrentUser._id,status:"to-do"}).skip((page-1) * limit).limit(limit).sort({date : -1})
  const ongoing = await  tasks.find({user:req.CurrentUser._id,status:"ongoing"}).skip((page-1) * limit).limit(limit).sort({updatedAt : -1}) 
   const completed = await  tasks.find({user:req.CurrentUser._id,status:"completed"}).skip((page-1) * limit).limit(limit).sort({updatedAt : -1})
  res.json({totalData:totalData , todo : todo , ongoing , completed });

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = gettasks;

