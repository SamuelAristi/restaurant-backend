const express = require('express');
const productController = require ('../Controller/productController');
const router = express.Router();

router.post('/createproduct',productController.createProduct);
router.get('/listproduct/:restaurantId', productController.listProduct);
router.put('/updateproduct/:productid', productController.updateProduct);
router.put('/disiableproduct/:productid', productController.disableProduct);
router.put('/enablerestaurant/:restaurantId', productController.enableProduct);

module.exports = router;