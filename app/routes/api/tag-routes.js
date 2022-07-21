const router = require('express').Router();
const db = require('../../config/connection');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let tags = await db.Tag.findAll();
  res.json(tags);
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let tag = await db.Tag.findByPk(req.params.id);
  res.json(tag);
});

router.post('/', async(req, res) => {
  // validate request
  if (!req.body.tag_name) {
    res.status(400).send({ status: 400, message: 'Bad Request.' });
    return;
  }
  // create a new tag
  let tag = await db.Tag.create({tag_name: req.body.tag_name});
  res.json(tag);
});

router.put('/:id', async(req, res) => {
  // validate request
  if (!req.body.tag_name) {
    res.status(400).send({ status: 400, message: 'Bad Request.' });
    return;
  }
  // update a tag by its `id` value
  let tag = await db.Tag.findByPk(req.params.id);
  await tag.update({tag_name: req.body.tag_name});
  res.json(tag);
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  let tag = await db.Tag.findByPk(req.params.id);
  await tag.destroy();
  res.json(tag);
});

module.exports = router;
