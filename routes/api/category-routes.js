const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll();
    res.send(data); 
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
  try {
    await Category.create({
      category_name: req.body.category_name
    })
  } catch (error) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
