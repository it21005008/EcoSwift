const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// GET all products
router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById);

module.exports = router;
