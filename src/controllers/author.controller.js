const { Author } = require('../models');

const findAll = async (_req, res) => {
  try {
    const data = await Author.findAll();
    return res.json({ content: data });
  } catch (error) {
    return res.status(500).json({ notification: error.message });
  }
}

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Author.findOne({ where: { id } });
    return res.json({ content: data });
  } catch (error) {
    return res.status(500).json({ notification: error.message });
  }
}

const create = async (req, res) => {
  try {
    const newAuthor = req.body;

    const data = await Author.create(newAuthor);

    return res.status(201).json({ content: data });
  } catch (error) {
    return res.status(500).json({ notification: error.message });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nationality } = req.body;

    const author = await Author.findOne({ where: { id } });

    if (!author) throw Error("Autor não encontrado.");

    author.name = name;
    author.nationality = nationality;

    const data = await author.save();

    return res.status(201).json({ content: data });
  } catch (error) {
    return res.status(500).json({ notification: error.message });
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findOne({ where: { id } });

    if (!author) throw Error("Autor não encontrado");
    
    await author.destroy();

    return res.status(204);
  } catch (error) {
    return res.status(500).json({ notification: error.message });
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
}