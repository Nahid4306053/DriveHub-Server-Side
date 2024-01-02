const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Cars = require('../../../models/CarModel');


const CarDetails = async (req, res, next) => {
  try {
   if(req.params.id){ 
    const data = await Cars.findOne({_id:req.params.id})
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

module.exports = CarDetails;
