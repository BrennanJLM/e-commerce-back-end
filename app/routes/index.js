const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/", (req, res) => {
  res.status(400).send({ status: 404, message: 'Bad Request.' });
});

module.exports = router;
