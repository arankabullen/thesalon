/* 
Author: Aranka Bullen
*/
import {DataTypes, Model } from "sequelize";
import sequelize from '../config/database.js';


class User extends Model{}

User.init( {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    phone: {
        type: DataTypes.INTEGER,
        validate:{
            is:{
                args: /^(?=.*\d{9,})$/,
                msg: "Enter your phone number including the area code without any spaces",
            },
        },

    },
    googleId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      modelName: 'User',
});

export default User;

