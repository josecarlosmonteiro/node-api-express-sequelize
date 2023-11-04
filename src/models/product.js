const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnect');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }
}, {
  sequelize,
  freezeTableName: true,
});

console.group('[DATABASE TABLE]');

Product.sync({ force: true })
  .then(() => console.log("Tabela PRODUCTS criada com sucesso"))
  .catch((error) => {
    console.group('[ERROR]');
    console.log("Erro ao tentar criar tabela PRODUCTS");
    console.log('ERROR', error.parent.sqlMessage);
    console.groupEnd();
  });

console.groupEnd();

module.exports = Product;