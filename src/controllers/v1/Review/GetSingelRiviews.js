const { default: mongoose } = require('mongoose');
const reviews = require('../../../models/Review');
const createError = require('http-errors');


const getSingelRiview = async (req, res, next) => {
  try {
  
   if(req.params.id){  
    const result = await reviews.find({carData:req.params.id}).populate('reviewer');
    res.send(result);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

 

module.exports = getSingelRiview;
