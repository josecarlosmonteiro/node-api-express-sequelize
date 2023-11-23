const sequelize = require('../database/dbConnect');

const Author = require('./Author.model');
const Gender = require('./Gender.model');
const Book = require('./Book.model');
const GenderHasBooks = require('./GenderHasBooks.model');

try {
  console.log("Definindo relacionamentos...");
  // Relacionamento N:1;
  Author.hasMany(Book, { onDelete: 'cascade' });
  Book.belongsTo(Author, { onDelete: 'cascade' });

  // Relacionamento N:M
  Gender.belongsToMany(Book, { through: GenderHasBooks, onDelete: 'cascade' });
  Book.belongsToMany(Gender, { through: GenderHasBooks, onDelete: 'cascade' });

  console.log("Relacionamentos definidos com sucesso!");
} catch (error) {
  console.log("Erro ao definir relacionamentos.");
  console.log(error);
}

// Sincronização das tabelas no banco de dados utilizando "DELETE TABLE IF EXISTS"
// (force: true);
sequelize.sync({ force: true })
  .then(() => console.log("Sincronizado com sucesso!"))
  .catch(error => {
    console.log("Erro ao sincronizar banco de dados");
    console.log(error.message);
  });

module.exports = {
  Author,
  Gender,
  Book,
}