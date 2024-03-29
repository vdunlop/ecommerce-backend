const router = require('express').Router();
const { Model, Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

// Request is get for the Category table.
// Return all data in Category table including associated Product table 
router.get('/', async (req, res) => {
  try {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Request is get for the Category table where an id is passed in.
// Return all data in from the Category table represented by the id passed in, including associated Product table 
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // Add Product as a second model to JOIN with to get product information
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
 
});

// Request is post to create another category in the Category table.
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  
});

// Request is put to update a category represented by the id being passed in, in the Category table.
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id:req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id.' });
      return;
      }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Request is delete to delete a category represented by the id being passed in, in the Category table.
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    console.log(categoryData);
    if (categoryData < 1) {
      res.status(404).json({ message: 'No category with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
