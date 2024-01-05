const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const CommentsColletion = require('../../../models/CommentModel');
const { cloneDeep, merge } = require('lodash');
const getSingelPosts = async (req,res,next)=>{
 try{

  const result = await  Posts.findOne({_id:req.params.id}).populate({path:'author',select:'_id displayName photoURL'})
  const comments = await CommentsColletion.countDocuments({post_id:req.params.id})
  const finalResult = merge({}, result.toObject(), { comments });
  res.json(finalResult);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
} 

module.exports = getSingelPosts;

