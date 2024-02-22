const express = require('express')
const router = express.Router()
const {getAllProducts, getProductsByName, createProducts, updateProducts, deleteProducts} = require('../controllers/product.controllers.js')

// Get All products
router.get('/products', getAllProducts)
// Get Products by name
router.get('/products/:name', getProductsByName)
// create products with json file
router.post('/createProducts', createProducts)
// Update Products based on his id
router.put('/updateProducts/:id', updateProducts)
// Delete Products by id
router.delete('/deleteProducts/:id', deleteProducts)

module.exports = router