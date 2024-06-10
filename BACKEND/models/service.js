/*
Author: Aranka Bullen
*/
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Service extends Model {}

Service.init(
  {
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    supply: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Service",
  }
);

export default Service;
