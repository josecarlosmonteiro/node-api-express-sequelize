const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnect');

const Book = sequelize.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  year: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: true,
  freezeTableName: true,
});

module.exports = Book;