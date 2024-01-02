const router = require('express').Router();
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const AllBookings = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};

  const totalData = await Bookings.countDocuments();
  const result = await  Bookings.find().sort({PickUpDate : -1}).skip((page-1) * limit).limit(limit).populate('carData').populate({path:"Renter",select:"displayName photoURL _id"});
  res.json({totalData:totalData , Cars : result});
 }
 catch(err){  
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = AllBookings;

