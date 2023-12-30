const logOut = require('express').Router();
const dotenv = require('dotenv');
dotenv.config()

logOut.delete('/',(req,res,next)=>{
  res.cookie(process.env.COOKIE_NAME,'',{ maxAge: 0 ,signed:true ,httpOnly: true , secure: true ,sameSite:'none'})
  res.send('User log out succssfully')              
})

module.exports  = logOut;

