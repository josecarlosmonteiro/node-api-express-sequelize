const router = require('express').Router();
const { findAll, findOne, create } = require('../controllers/book.controller');

router.get('/', (req, res) => findAll(req, res));
router.get('/:id', (req, res) => findOne(req, res));
router.post('/', (req, res) => create(req, res));

module.exports = serverRouter => serverRouter.use('/books', router);