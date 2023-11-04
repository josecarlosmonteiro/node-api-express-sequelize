const router = require('express').Router();
const productsController = require('../controllers/products');

router.get('/', (req, res) => productsController.findAll(req, res));
router.get('/:id', (req, res) => productsController.findOne(req, res));
router.get('/:name/:value', (req, res) => productsController.create(req, res));

module.exports = router;