const router = require('express').Router();
const createError = require('http-errors');
const Peoples = require('../../../models/PeopleModel');
const getPeoples = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await Peoples.countDocuments();
  const result = await  Peoples.find({email:{$ne:req.CurrentUser.email}}).skip((page-1) * limit).limit(limit);
  res.json({totalData:totalData - 1 , users : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getPeoples;

