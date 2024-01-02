const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const CarModel = require('../../../models/CarModel');


const AddCar = async (req, res, next) => {
  try {
   if(req.body){ 
  
    const savedata = await CarModel(req.body).save();
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



module.exports = AddCar;
