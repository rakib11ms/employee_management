const express=require('express');
const router=express.Router();
// const UserRegister=require('../models/UserModel');
// const UserRegisterController=require('../controllers/UserRegisterController')
const {createRegister,loginUser}=require('../controllers/UserRegisterController')
// router.get('/check/:id',(req,res)=>{
//     res.send({
//         'language':req.params.id
//     })
// })

router.post('/register',createRegister)
router.get('/hello',loginUser)

module.exports=router;