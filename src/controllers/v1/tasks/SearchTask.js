const router = require('express').Router();
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');
const SearchTask = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8 ; 
  const keyword = req.query.search;
  const query = {
    user:req.CurrentUser._id
  }

  if(keyword){
    query.name = new RegExp(keyword, 'i')
  }
  
  const todo = await  tasks.find(query).skip((page-1) * limit).limit(limit).sort({date : -1}).select("_id name date status")
  res.send(todo);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = SearchTask;

