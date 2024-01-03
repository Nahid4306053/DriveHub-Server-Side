const express  = require('express');
const User = require('../../routes/People/User');
const logOut = require('../../routes/auth/logOut');
// const task = require('../../routes/Task/Tasks');
const car = require('../../routes/Car/car');
const Payment = require('../../routes/Payment/Payment');
const router = express.Router()

router.get("/",(req,res)=>{
      res.send("listennig api version 01...")              
})
 

//--- /api/v1/user
router.use("/user" , User)

//--- /api/v1/logOut
router.use("/logout" , logOut)

//--- /api/v1/Package
// router.use("/task" , task);

//--- /api/v1/Package
router.use("/car" , car);

//--- /api/v1/Package
router.use("/payment" , Payment);






 

module.exports = router