const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findOne({
      where:{
        id:req.params.id
      }
    });
    res.send(data);
  } catch (error) {
    res.status(400).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  /* Body should look like
  {
    category_name: XXXXX
  }
  */
  try {
    const response  = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const response = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error);
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const result = await Category.destroy({
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
