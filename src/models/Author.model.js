const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnect');

const Author = sequelize.define('authors', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  freezeTableName: true,
});

module.exports = Author;