const express = require('express');
const blogController = require('../controller/blog-controller');
const router = express.Router();


// All Blogs Page Route
router.get('/', blogController.blog_index);

// Creating Blog Page Route (GET)
router.get('/create', blogController.blog_create_get);

// Adding Blog Page Route (POST)
router.post('/', blogController.blog_create_post);

// Single Blog Page Route
router.get('/:id', blogController.blog_details);

// Delete Blog Route
router.delete('/:id', blogController.blog_delete);


module.exports = router;