const router = require('express').Router();

const products = require('./products');

router.get('/', (req, res) => {
  res.json({ message: "Server running!" });
})

router.use('/products', products);

module.exports = router;