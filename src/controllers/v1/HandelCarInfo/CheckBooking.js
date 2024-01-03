const router = require('express').Router();
const createError = require('http-errors');
const bookings = require('../../../models/BookingModel');
const CheckBooking = async (req,res,next)=>{
 try{
  const bookid = req.params.id;
  const result = await bookings.findOne({_id:bookid}).populate('carData');
  res.json(result);


 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = CheckBooking;

