const router = require('express').Router();
const { findAll, create, remove } = require('../controllers/gender.controller');

router.get('/', (req, res) => findAll(req, res));
router.post('/', (req, res) => create(req, res));
router.delete('/:name', (req, res) => remove(req, res));

module.exports = serverRouter => serverRouter.use('/genders', router);