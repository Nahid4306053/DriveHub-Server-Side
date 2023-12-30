const router = require('express').Router();
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');
const ChangeStatus = async (req,res,next)=>{
 try{
  const taskid = req.params.id;
  const user = req.CurrentUser._id; 
  const result = await tasks.findOneAndUpdate({_id:taskid,user:user},{status:req.body.status});
  res.json(result);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = ChangeStatus;

