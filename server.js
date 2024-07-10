/* import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import objectRoute from './routes/objectRoute.js';
import cors from 'cors'; */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Route constraints declaration.
const userRoutes = require('./routes/userRoute');
const productsRoutes = require('./routes/productRoute.js');
const testRoutes = require('./routes/testRoute.js');
const shopRoutes = require('./routes/shopRoute.js');
const reviewRoutes = require('./routes/reviewRoute.js');
const paymentRoutes = require('./routes/paymentRoute.js');
const orderRoutes = require('./routes/orderRoute.js');
const orderItemRoutes = require('./routes/orderItemRoute.js');
const categoryRoutes = require('./routes/categoryRoute.js');
const addressRoutes = require('./routes/addressRoute.js');

const PORT = 7171;

const mongoDBURL = "mongodb+srv://goergeb26:IWJnNEY6SeB3uGNd@vscluster.f4betuf.mongodb.net/?retryWrites=true&w=majority&appName=vscluster";

const app = express();

// Middleware for parsing request body
app.use(express.json());


app.use(cors());



app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Venderspace Endpoint');
});

app.use('/test', testRoutes);
app.use('/payment', paymentRoutes);
app.use('/products', productsRoutes);
app.use('/order', orderRoutes);
app.use('/item', orderItemRoutes);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes);
app.use('/review', reviewRoutes);
app.use('/shop', shopRoutes);
app.use('/address', addressRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
