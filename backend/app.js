const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import all the routes
const products = require('./routes/productRoutes');

// use routes
app.use('/api/v1', products);

module.exports = app;
