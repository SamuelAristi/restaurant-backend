const express = require('express');
const restauranController = require ('../Controller/restaurantController');
const router = express.Router();

router.post('/createrrestaurant', restauranController.createRestaurant);
router.get('/listrestaurant', restauranController.listRestaurant);
router.put('/updaterestaurant/:restaurantId', restauranController.updateRestaurant);
router.put('/disiablerestaurant/:restaurantId', restauranController.disableRestaurant);
router.put('/enablerestaurant/:restaurantId', restauranController.enableRestaurant);

module.exports = router;