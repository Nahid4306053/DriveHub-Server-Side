const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const upcomingBoookings = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentDate = today.toISOString();
  const Renter = req.CurrentUser._id; 
  const totalData = await Bookings.countDocuments({Renter:Renter ,PickUpDate :{ $gte: currentDate }});
  const result = await  Bookings.find({Renter:Renter ,PickUpDate :{ $gte: currentDate }}).sort({PickUpDate : -1}).skip((page-1) * limit).limit(limit).populate('carData');
  res.json({totalData:totalData , Cars : result});
 }
 catch(err){  
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = upcomingBoookings;

