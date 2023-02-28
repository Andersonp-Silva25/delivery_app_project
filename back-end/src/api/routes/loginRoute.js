const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/validates');

router.post('/', validateLogin, loginController.login);

module.exports = router;