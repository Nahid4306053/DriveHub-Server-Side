const statistics = require('express').Router();
const creteError = require("http-errors");
const VerifyUser = require('../../middlewares/Auth/Verifyuser');
const VerifyAdmin = require('../../middlewares/Auth/VerifyAdmin');
const Peoples = require('../../models/PeopleModel');
const paymentHistory = require('../../models/PaymnetHistoryModel');
const bookings = require('../../models/BookingModel');
const Cars = require('../../models/CarModel');


statistics.get("/", VerifyUser, VerifyAdmin, async (req, res, next) => {
  try {

    const totaluser = await Peoples.countDocuments({
      role: 'user'
    })

    const totalRevenueResult = await paymentHistory.aggregate([{
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalpay'
        },
      },
    }, 
  ]);

    const totalRevenue = await totalRevenueResult.length > 0 ? totalRevenueResult[0].totalRevenue : 0;

    const Pending = await bookings.countDocuments({
      status: "Pending"
    })
    const Cancelled = await bookings.countDocuments({
      status: "Cancelled"
    })
    const Confirmed = await bookings.countDocuments({
      status: "Confirmed"
    })  
    const Available = await Cars.countDocuments({
      availabilityStatus: "Available"
    })
    const Booked = await Cars.countDocuments({
      availabilityStatus: "Booked"
    })
    const Maintenance = await Cars.countDocuments({
      availabilityStatus: "Maintenance"
    })

    const Complited = await paymentHistory.countDocuments();

    const statics = {
      totaluser,
      totalRevenue,
      totalBookings:
       {
        Pending,
        Cancelled,
        Confirmed,
        Complited 
        } ,     
       cars: 
       {
        Available,
        Booked,
        Maintenance,
      }
      ,
    }

    res.send(statics)

  } catch (err) {
    next(creteError(500, 'There is server side error'))
  }
})


module.exports = statistics;
