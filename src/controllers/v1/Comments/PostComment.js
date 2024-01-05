const { default: mongoose } = require('mongoose');
const Comments = require('../../../models/CommentModel');
const createError = require('http-errors');


const PostComment = async (req, res, next) => {
  try {
   const {post_id} = req.body;  
   if(post_id){ 
    req.body.commenter = req.CurrentUser._id; 
    const savedata = await Comments(req.body).save();
    res.send(savedata);
   }
   else{
    
    next(createError(404, "Please provide all required data")) }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = PostComment;
