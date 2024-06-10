/***
 * Author: Aranka Bullen 
 */

const express = require('express');
const bodyParser= require('body-parser');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const { User, Service, Booking } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log(`Server is running on port ${PORT}`);
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});