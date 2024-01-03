const { default: mongoose } = require('mongoose');
const reviews = require('../../../models/Review');
const createError = require('http-errors');


const PostReview = async (req, res, next) => {
  try {
   const {carData} = req.body;  
   if(carData){ 
    req.body.reviewer = req.CurrentUser._id; 
    const savedata = await reviews(req.body).save();
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



module.exports = PostReview;
