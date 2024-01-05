const router = require('express').Router();
const createError = require('http-errors');
const Cars = require('../../../models/CarModel');
const carFilter = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};
  const sortop = {
      "createdAt": -1
  }
//   cars?minPrice=25&maxPrice=500&addtime=-1&status=Available&brand=Toyota&model=RAV4
  if(req.query.minPrice && req.query.maxPrice){
    query.price = { $lte: req.query.maxPrice, $gte: req.query.minPrice };
  }   
  if(req.query.status){
   query.availabilityStatus = req.query.status
  } 
  if(req.query.addtime){ 
    sortop["createdAt"] = parseInt(req.query.addtime);
  }  
  if(req.query.brand){
    query.brand =  req.query.brand;
   if(req.query.model){
     query.model =  req.query.model;
   }
  }
  const totalData = await Cars.countDocuments(query);
  const result = await  Cars.find(query).sort(sortop).skip((page-1) * limit).limit(limit);
  res.json({totalData:totalData , Cars : result});
 }
 catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}   

module.exports = carFilter;

