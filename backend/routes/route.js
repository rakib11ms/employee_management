const express=require('express');
const router=express.Router();
const UserRegister=require('../models/UserModel');

router.get('/check/:id',(req,res)=>{
    res.send({
        'language':req.params.id
    })
})

module.exports=router;