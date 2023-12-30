const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Tasks = require('../../../models/TaskModel');



const DeleteTask = async (req, res, next) => {
  try {
   if(req.params.id){ 
    const data = await Tasks.findOneAndDelete({_id:req.params.id})
     res.send(data);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

module.exports = DeleteTask;
