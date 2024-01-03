const AddCar = require("../../controllers/v1/HandelCarInfo/AddCar");
const Booking = require("../../controllers/v1/HandelCarInfo/Booking");
const CancelBooking = require("../../controllers/v1/HandelCarInfo/CancelBooking");
const CarDetails = require("../../controllers/v1/HandelCarInfo/CarDetails");
const ChangeStatus = require("../../controllers/v1/HandelCarInfo/ChangeStatus");
const MyBookings = require("../../controllers/v1/HandelCarInfo/MyBookings");
const getCarsData = require("../../controllers/v1/HandelCarInfo/getCarsData");
const upcomingBoookings = require("../../controllers/v1/HandelCarInfo/upcomingBoookings");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");
const AllBookings = require('../../controllers/v1/HandelCarInfo/AllBookings');
const ChangeBookingStatus = require("../../controllers/v1/HandelCarInfo/ChangeBookingStatus");
const CheckBooking = require("../../controllers/v1/HandelCarInfo/CheckBooking");
const carFilter = require("../../controllers/v1/HandelCarInfo/carFilter");

const car = require("express").Router()

car.post("/add" , VerifyUser , AddCar);
car.get("/all" , getCarsData);
car.get("/filter" , carFilter);
car.get("/singel/:id" , CarDetails);
car.get("/my-booking" ,VerifyUser , MyBookings);
car.get("/upcoming-booking" ,VerifyUser , upcomingBoookings);
car.get("/bookings" ,VerifyUser , AllBookings);
car.get("/booking/:id" ,VerifyUser , CheckBooking);
car.post("/book" , VerifyUser , Booking);
car.patch("/status/:id" , VerifyUser , ChangeStatus);
car.patch("/book/status/:id" , VerifyUser , ChangeBookingStatus);
car.delete("/book/cancel/:id" , VerifyUser , CancelBooking);
module.exports = car;   

  