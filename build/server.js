require('dotenv').config();
var express = require('express');
var app = express();
var db = require('./config/db');
var productRoutes = require('./routes/productRoutes');
var userRoutes = require('./routes/userRoutes');
var personRoutes = require('./routes/personRoutes');
var paymentRoutes = require('./routes/paymentRoutes');
var PORT = process.env.PORT || 8000;
app.use(express.json());
db();
app.use('/api/', productRoutes);
app.use('/api/', userRoutes);
app.use('/api/', personRoutes);
app.use('/api/', paymentRoutes);
app.listen(PORT, function () { return console.log("Server rodando na porta ".concat(PORT)); });
