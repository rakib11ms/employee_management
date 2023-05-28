const { check, validationResult } = require('express-validator');
const express=require('express');
const router=express.Router();

// const UserRegister=require('../models/UserModel');
// const UserRegisterController=require('../controllers/UserRegisterController')
const {createRegister,login}=require('../controllers/UserRegisterController')


router.post('/register',  [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is not valid'),
    check('password').isLength({ min:4 }).withMessage('Password must be at least 4 characters'),
  ],createRegister)

  router.post('/login',login)


module.exports=router;