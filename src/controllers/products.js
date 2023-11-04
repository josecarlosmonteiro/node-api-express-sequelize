const Product = require('../models/product');

const product = new Product();

const findAll = (req, res) => {
  const data = product.findAll();

  return res.json({ content: data });
}

const findOne = (req, res) => {
  const { id } = req.params;

  const product = product.findOne(el => el.id === Number(id));

  return res.json({ content: product || null });
}

const create = (req, res) => {
  const { name, value } = req.params;

  const data = product.insert({ name, value: Number(value) });

  return res.json({ content: data });
}

module.exports = {
  findAll,
  findOne,
  create,
}