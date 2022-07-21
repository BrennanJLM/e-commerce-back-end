const router = require('express').Router();
const db = require('../../config/connection');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  let categories = await db.Category.findAll();
  res.json(categories);
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let category = await db.Category.findByPk(req.params.id);
  res.json(category);
});

router.post('/', async(req, res) => {
  // validate request
  if (!req.body.category_name) {
    res.status(400).send({ status: 400, message: 'Bad Request.' });
    return;
  }
  // create a new category
  let category = await db.Category.create({category_name: req.body.category_name});
  res.json(category);
});

router.put('/:id', async(req, res) => {
  // validate request
  if (!req.body.category_name) {
    res.status(400).send({ status: 400, message: 'Bad Request.' });
    return;
  }
  // update a category by its `id` value
  let category = await db.Category.findByPk(req.params.id);
  await category.update({category_name: req.body.category_name});
  res.json(category);
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  let category = await db.Category.findByPk(req.params.id)
  await category.destroy();
  res.json(category);
});

module.exports = router;
