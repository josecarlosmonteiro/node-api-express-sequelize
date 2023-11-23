const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnect');

const Gender = sequelize.define('genders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
  freezeTableName: true,
});

module.exports = Gender;