const { Sequelize } = require('sequelize');
require('dotenv').config();

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

console.log(host, database, user, password);

const connection = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

const connectionTest = async () => {
  console.log("Conectando ao banco de dados...");

  try {
    await connection.authenticate();
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados.");
  }
}

connectionTest();

module.exports = connection;