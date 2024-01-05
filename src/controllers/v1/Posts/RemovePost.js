const router = require('express').Router();
const createError = require('http-errors');
const Comments = require('../../../models/CommentModel');
const Posts = require('../../../models/PostModel');
const RemovePost = async (req,res,next)=>{
 try{
  const id = req.params.id;
  const result = await Posts.findOneAndDelete({_id:id});
  const CommentsData = await Comments.find({blog_id:id});
  
  if(CommentsData.length > 0){
    await Comments.deleteMany({blog_id:id})
  }

  res.json(result);
  
 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = RemovePost;

