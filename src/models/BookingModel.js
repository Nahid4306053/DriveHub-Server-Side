const mongoose = require('mongoose');

// Define the schema
const rentalSchema = new mongoose.Schema({
  Renter: {
    type: mongoose.Types.ObjectId,
    ref: 'peoples',
    required: true
  },
  carData: {
    type: mongoose.Types.ObjectId,
    ref: 'cars', 
    required: true
  },
  PickUpDate: {
    type: Date,
    required: true
  },
  DropOffDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Pending'
  }
});

// Create the model
const Bookings = new mongoose.model('Bookings', rentalSchema);

module.exports = Bookings;
