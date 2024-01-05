const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const MyPosts = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 

  const totalData = await Posts.countDocuments({author:req.CurrentUser._id});
 
  const result = await  Posts.find({author:req.CurrentUser._id}).sort({createdAt: -1}).skip((page-1) * limit).limit(limit)
  res.json({totalData:totalData , Posts : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = MyPosts;

