const CreateSecret = require("../../controllers/v1/Payment/CreateSecret");
const MypaymentHistory = require("../../controllers/v1/Payment/MypaymeantHistory");
const SavePayment = require("../../controllers/v1/Payment/SavePayment");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const Payment = require("express").Router()

Payment.get("/payment-history" , VerifyUser , MypaymentHistory)
Payment.post("/create-secret" , VerifyUser , CreateSecret)
Payment.post("/save" , VerifyUser , SavePayment)


module.exports = Payment;