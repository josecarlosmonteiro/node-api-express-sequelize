const sequelize = require('../database/dbConnect');

// Model intermediária da relação N:M entre Livros e Gêneros. Não é estritamente
// nexcessário a model conter mais colunas. As colunas de ID das models da relação
// serão criadas automaticamente.

const GenderHasBooks = sequelize.define('gender_has_books', {}, {
  timestamps: true,
  freezeTableName: true,
});

module.exports = GenderHasBooks;