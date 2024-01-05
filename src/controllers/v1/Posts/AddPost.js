const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const AddPost = async (req,res,next)=>{
 try{
  const author = req.CurrentUser._id
  const result = await Posts({...req.body , author : author}).save() ;
  res.send(result);
 
 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = AddPost;

