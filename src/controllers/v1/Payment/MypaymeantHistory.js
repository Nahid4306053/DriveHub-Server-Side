const router = require('express').Router();
const createError = require('http-errors');
const PaymentHistorys = require('../../../models/PaymnetHistoryModel');
const MypaymentHistory = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const totalData = await PaymentHistorys.countDocuments({payer:req.CurrentUser._id});
 
  const result = await  PaymentHistorys.find({payer:req.CurrentUser._id}).sort({"createdAt" : -1}).skip((page-1) * limit).limit(limit).populate('carData');
  res.json({totalData:totalData , PaymentHistorys : result});

  }catch(err){ 
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
} 

module.exports = MypaymentHistory;
 
