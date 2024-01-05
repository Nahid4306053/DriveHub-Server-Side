const { default: mongoose } = require('mongoose');
const Comments = require('../../../models/CommentModel');
const createError = require('http-errors');


const replay = async (req, res, next) => {
 
  try {
    req.body.replayer = req.CurrentUser._id; 
    const result = await Comments.findOneAndUpdate({_id:req.params.id},{$push:{replays:req.body}});
    res.send(result);
    
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = replay;
