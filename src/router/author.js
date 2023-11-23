const router = require('express').Router();
const { findAll, findOne, create, update, remove } = require('../controllers/author.controller');

router.get('/', (req, res) => findAll(req, res));
router.get('/:id', (req, res) => findOne(req, res));
router.post('/', (req, res) => create(req, res));
router.put('/:id', (req, res) => update(req, res));
router.delete('/:id', (req, res) => remove(req, res));

module.exports = serverRouter => serverRouter.use('/author', router);