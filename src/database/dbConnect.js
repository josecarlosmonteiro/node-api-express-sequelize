const { Sequelize } = require('sequelize');

const host = 'localhost';
const database = 'express_sequelize';
const user = 'root';
const password = '';

const connection = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
})

const connectionTest = async () => {
  try {
    await connection.authenticate();
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados.");
  }
}

connectionTest();

module.exports = connection;