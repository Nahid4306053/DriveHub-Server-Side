const router = require('express').Router();
const createError = require('http-errors');
const cars = require('../../../models/CarModel');
const ChangeStatus = async (req,res,next)=>{
 try{
  const carid = req.params.id;
  const result = await cars.findOneAndUpdate({_id:carid},{availabilityStatus:req.body.availabilityStatus});
  res.json(result);
  console.log(result,req.body.availabilityStatus)

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = ChangeStatus;

