const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: "Server running!" });
})

require('./author')(router);
require('./genders')(router);
require('./book')(router);

module.exports = router;