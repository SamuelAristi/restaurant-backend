const express = require('express');
const cityController = require ('../Controller/citysControllers')
const router = express.Router();

router.get('/listcitys/:departmentId', cityController.listCitys);

module.exports = router;