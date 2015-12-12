"use strict";
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    important: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: "Task"
  });
};
