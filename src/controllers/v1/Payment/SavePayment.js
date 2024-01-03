const {
  default: mongoose
} = require('mongoose');
const createError = require('http-errors');
const Bookings = require('../../../models/BookingModel');
const paymentHistory = require('../../../models/PaymnetHistoryModel');

const SavePayment = async (req, res, next) => {
  try {
    if (req.body.booking_id && req.body.transectionId) {
      req.body.payer = req.CurrentUser._id;
      const removeBooking = await Bookings.findOneAndDelete({
        _id: req.body.booking_id
      });
      if (removeBooking) {
        const savedata = await paymentHistory(req.body).save();
        res.send(savedata);
      } else {
        next(createError(500, "Please provide all required data"))
      }

    } else {
      next(createError(500, "Please provide all required data"))
    }
  } catch (err) {
    console.log(err)
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = SavePayment;
