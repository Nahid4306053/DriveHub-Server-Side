const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const UserPosts = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};

  const totalData = await Posts.countDocuments();
  const result = await  Posts.find({}).sort({createdAt : -1}).skip((page-1) * limit).limit(limit).populate({path:"author",select:"displayName photoURL _id"});
  res.json({totalData:totalData , Posts : result});
 }
 catch(err){  
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = UserPosts;

