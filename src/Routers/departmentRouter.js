const express = require('express');
const departmentController = require ('../Controller/departmentController');
const router = express.Router();

router.get('/listdepartments', departmentController.listDepartments);

module.exports = router;