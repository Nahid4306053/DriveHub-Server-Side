const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  modelYears: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  transmissionType: {
    type: String,
    required: true,
  },  
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availabilityStatus: {
    type: String,
    enum: ['Available', 'Booked', 'Maintenance'],
    default: 'Available',
  },
},{
  timestamps: true
});

const CarModel = new mongoose.model('cars', carSchema);
module.exports = CarModel;
