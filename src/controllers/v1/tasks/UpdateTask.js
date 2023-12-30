const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Tasks = require('../../../models/TaskModel');



const UpdateTask = async (req, res, next) => {
  try {
   if(req.params.id){ 
    const data = await Tasks.findOneAndUpdate({_id:req.params.id},req.body)
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

module.exports = UpdateTask;
