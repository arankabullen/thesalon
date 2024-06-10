/***
 * Author: Aranka Bullen 
 */

import express from 'express';
import bodyParser from 'body-parser';
import passport from './BACKEND/config/passport.js';
import authRoutes from './BACKEND/routes/api/authRoutes.js';
import sequelize from './BACKEND/config/database.js';
import { User, Service, Booking } from './BACKEND/models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
//app.use('api/booking', bookingRoutes);
//app.use('api/service', serviceRoutes);

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