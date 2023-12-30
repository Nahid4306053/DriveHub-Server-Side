const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');


const AddStory = async (req, res, next) => {
  try {
   if(req.body){ 
    req.body.user = req.CurrentUser._id; 
    const savedata = await tasks(req.body).save();
     res.send(savedata);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = AddStory;
