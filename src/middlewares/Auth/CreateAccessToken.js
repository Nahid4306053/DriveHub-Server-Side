const createError = require('http-errors');
const { sign } = require('jsonwebtoken');
const router = require('express').Router()
const dotenv = require('dotenv');
dotenv.config()
const CreateAccessToken = async (req,res,next) =>{
  try{
    const {displayName,uid,_id,email,role} = req.CurrentUser
    const token = sign({displayName,uid,_id,email,role},process.env.SECRETKEY_KEY_F_JWT,{expiresIn:process.env.EXPIRE_TIME})

    res.cookie(process.env.COOKIE_NAME,token,{maxAge:process.env.EXPIRE_TIME,sameSite:'none',httpOnly:true,secure:true,signed:true}).send(req.CurrentUser)
  }
  
  catch(err){
  console.log(err)
  next(createError(500,'There is server Side Error'))
  }
}



module.exports = CreateAccessToken