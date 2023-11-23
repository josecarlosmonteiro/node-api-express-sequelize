const { Book, Gender, Author } = require('../models');

const findAll = async (req, res) => {
  try {
    const data = await Book.findAll({
      include: [
        //JOIN
        // todo livro obrigatoriamente contém um autor atrelado em seu registro
        { model: Author },

        // RIGHT JOIN
        // os livros podem não ter nenhum gênero atrelado inicialmente, então
        // priorizamos os dados dos livros em relação aos seus gêneros
        {
          model: Gender,
          right: true,
        }
      ]
    });
    return res.json({ content: data }).status(200);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findOne({
      where: { id },
      include: [
        { model: Author },
        {
          model: Gender,
          right: true,
        }
      ]
    });

    return res.json({ content: data }).status(200);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

const create = async (req, res) => {
  try {
    const { name, description, year, authorId, genderIds } = req.body;

    const newBook = await Book.create({ name, description, year, authorId });
    
    // por ser uma relação N:M, podemos receber uma lista de ID's de gêneros
    // e buscá-los na base
    const genders = await Gender.findAll({ where: { id: genderIds } });

    // Com a relação N:M, o Sequelize cria uma função interna com o nome da model
    // com a qual a primeira model se relaciona, adicionando automaticamente os registros
    // na tabela intermediária.
    await newBook.addGenders(genders);

    return res.json({ content: newBook }).status(201);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
}