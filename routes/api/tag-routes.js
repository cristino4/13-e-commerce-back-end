const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findOne({
      where:{
        id:req.params.id
      }
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  /* tag format
  {
    tag_name: xxxx
  }
  */
  try {
    const response = await Tag.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const result = await Tag.update(req.body,{
      where:{
        id:req.params.id
      }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);   
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const response = await Tag.destroy({
      where:{
        id:req.params.id
      }
    });
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
