const router = require('express').Router();
const createError = require('http-errors');
const Cars = require('../../../models/CarModel');
const getCarsData = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};
  if(req.query.tour_type){
   query.tour_type = req.query.tour_type;
  } 
  const totalData = await Cars.countDocuments(query);
  const result = await  Cars.find(query).skip((page-1) * limit).limit(limit);
  res.json({totalData:totalData , Cars : result});

 }
 catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getCarsData;

