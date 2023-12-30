const router = require('express').Router();
const createError = require('http-errors');
const Peoples = require('../../../models/PeopleModel');
const TourGuiderDetails = async (req,res,next)=>{
 try{
  const result = await  Peoples.findOne({_id:req.params.id});
  res.send(result);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = TourGuiderDetails;

