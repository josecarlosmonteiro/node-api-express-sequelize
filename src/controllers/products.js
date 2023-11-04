const Product = require('../models/product');

const findAll = async (req, res) => {
  try {
    const data = await Product.findAll();
    return res.json({ content: data });
  } catch (error) {
    console.log("Erro ao buscar dados no banco");
    console.log(error.message);

    res.json({
      notification: error.message,
    })
  }

}

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ id });

    return res.json({ content: product || null });
  } catch (error) {
    console.log("Erro ao buscar dado pelo ID.");

    res.json({ notification: error.message });
  }
}

const create = async (req, res) => {
  try {
    const { name, value } = req.params;
    const data = await Product.create({ name, value });

    return res.json({ content: data });
  } catch (error) {
    console.log("Erro ao criar novo produto");
    return res.json({ notification: error.message });
  }
}

module.exports = {
  findAll,
  findOne,
  create,
}