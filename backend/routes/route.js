const { check, validationResult } = require('express-validator');
const express=require('express');
const router=express.Router();
const {createRegister,login,changeUserPassword,forgotPassword,checkmail}=require('../controllers/UserRegisterController')
const isAuthenticated=require('../middleware/auth')


router.post('/register',  [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is not valid'),
    check('password').isLength({ min:4 }).withMessage('Password must be at least 4 characters'),
  ],createRegister)

  router.post('/login',login)
  router.put('/change-password/:userId',isAuthenticated,changeUserPassword)
  router.post('/forgot-password',forgotPassword)
  router.post('/check-mail',checkmail)



module.exports=router;