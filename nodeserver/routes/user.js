const express = require('express');
const router = express.Router();

const userController = require ('../controllers/user');

router.get('/welcome', userController.getWelcome);
router.get('/', userController.getList);
router.post('/', userController.postUser);

module.exports = router;