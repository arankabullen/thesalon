/*
Author: Aranka Bullen
*/
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Service extends Model {}
class Service extends Model {}

Service.init(
  {
Service.init(
  {
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    supply: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Service",
  }
);
  },
  {
    sequelize,
    modelName: "Service",
  }
);

export default Service;
