const User=require('../models/UserModel');
const jwt=require('jsonwebtoken');


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

  const createRegister=async (req,res)=>{
        const {name,email,password,confirm_password}=req.body;
        try{
            const user=await User.signup(name,email,password,confirm_password);
            const token=createToken(user._id);
            res.status(200).json({email,token})
        }
        catch(error){
            res.status(400).json({error:error.message})

        }
  }

  const loginUser=async (req,res)=>{

  }

