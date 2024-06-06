/* 
Author: Aranka Bullen
*/

const {DataTypes} = require('sequelize')
const{ sequelize}= require('../config/database');

const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                msg: 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number.',
            }
        }
    },
});

module.exports = User;