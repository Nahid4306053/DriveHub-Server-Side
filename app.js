// extarnal export

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const createError = require('http-errors');

// internal exports 
const router = require('./src/api/v1');

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.ORIGIN,'https://drivehubv1.netlify.app'],
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRETKEY_KEY_F_COOKIE));

const MONGO_URI = process.env.MONGO_URI;



   

app.get('/', (req, res) => {
  res.send("Hello, Don't warry , drivehub is running... ");
});


// api version 01 
app.use('/api/v1',router)


// Error handling middleware using http-errors
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },
  });
});


const PORT = process.env.PORT || 3000;

 const main = async ()=> {

  await mongoose.connect(MONGO_URI,{dbName: process.env.DB_NAME});

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  console.log("Connected to database...");
} 

main()


