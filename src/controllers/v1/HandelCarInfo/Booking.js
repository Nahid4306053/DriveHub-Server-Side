const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const CarModel = require('../../../models/CarModel');


const Booking = async (req, res, next) => {
  try {
   if(req.body){ 
    req.body.Renter = req.CurrentUser._id; 
    const CarId = req.body.carData
    const savedata = await Bookings(req.body).save();
    const status = await CarModel.findOneAndUpdate({_id:CarId},{availabilityStatus:"Booked"})
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



module.exports = Booking;
