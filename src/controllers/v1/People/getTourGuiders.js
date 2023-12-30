const router = require('express').Router();
const createError = require('http-errors');
const Peoples = require('../../../models/PeopleModel');
const getTourGuiders = async (req,res,next)=>{
 try{
  const result = await  Peoples.find({role:'tour guider'});
  res.json({users : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getTourGuiders;

