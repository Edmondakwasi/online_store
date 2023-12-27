const express = require ('express');

authController = require('../controllers/auth.controller')

router = express.Router();

router.get('/signup', authController.getSignup);
router.get('/login', authController.getSignup);


module.exports = router;