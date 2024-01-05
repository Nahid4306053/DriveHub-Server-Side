const { default: mongoose } = require('mongoose');
const comments = require('../../../models/CommentModel');
const createError = require('http-errors');


const GetComment = async (req, res, next) => {
  try {
   if(req.params.id){  
    const result = await comments.find({post_id:req.params.id}).populate({
      path: 'commenter',
      select: '_id displayName photoURL' 
    })
    .populate({
      path: 'replays.replayer',
      select: '_id displayName photoURL' 
    });
    res.send(result);
   }
   else{
    next(createError(400, "Please provide all required data")) }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

 
module.exports = GetComment;
