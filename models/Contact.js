"use strict";
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Contact", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isContact: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isCompany: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female")
    }
  },
  {
    tableName: "Contact"
  });
};
