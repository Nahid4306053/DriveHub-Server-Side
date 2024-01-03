
const Stripe = require('stripe')
const dotenv = require('dotenv');
dotenv.config()
const secret = process.env.PAYMENT_SECRET
const stripe = Stripe(secret)
const createError =  require('http-errors')
const CreateSecret = async (req,res,next) => {
  try {
  
    const totalpay = parseInt(req.body.totalpay * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalpay,
      currency: 'usd',
      payment_method_types: ['card'],
    }); 
    res.send(paymentIntent.client_secret)
  } catch (error) {
    console.error(error);
    next(createError(500,'There is a Server Side problem')) 
  }
}
 
module.exports = CreateSecret