const router = require('express').Router();
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');
const getTodayTask = async (req,res,next)=>{
 try{
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await tasks.countDocuments();
  const todo = await  tasks.find({user:req.CurrentUser._id,date: { $gte: today.toISOString(), $lt: tomorrow.toISOString()} ,status:"to-do"}).skip((page-1) * limit).limit(limit).sort({date : -1})
  const ongoing = await  tasks.find({user:req.CurrentUser._id,date: { $gte: today.toISOString(), $lt: tomorrow.toISOString()},status:"ongoing"}).skip((page-1) * limit).limit(limit).sort({updatedAt : -1}) 
   const completed = await  tasks.find({user:req.CurrentUser._id,date: { $gte: today.toISOString(), $lt: tomorrow.toISOString()},status:"completed"}).skip((page-1) * limit).limit(limit).sort({updatedAt : -1})
  res.json({totalData:totalData , todo : todo , ongoing , completed });


 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getTodayTask;

