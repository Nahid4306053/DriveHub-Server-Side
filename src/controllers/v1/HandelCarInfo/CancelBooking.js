const router = require('express').Router();
const createError = require('http-errors');
const cars = require('../../../models/CarModel');
const Bookings = require('../../../models/BookingModel');
const CancelBooking = async (req,res,next)=>{
 try{
  const bookid = req.params.id;
  const result = await Bookings.findOneAndDelete({_id:bookid});
  await cars.findOneAndUpdate({_id:result.carData},{availabilityStatus:"Available"});
  res.json(result);
  

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = CancelBooking;

