const { Gender } = require('../models');

const findAll = async (req, res) => {
  try {
    const data = await Gender.findAll();
    return res.json({ content: data || [] }).status(200);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const gender = await Gender.create({ name });

    return res.json({ content: gender }).status(201);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

const remove = async (req, res) => {
  try {
    const { name } = req.params;
    await Gender.destroy({ where: { name } });

    return res.json({ content: `${name} removido com sucesso` }).status(200);
  } catch (error) {
    return res.json({ notification: error.message }).status(500);
  }
}

module.exports = { findAll, create, remove };