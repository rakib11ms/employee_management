const mongoose=require('mongoose');

const validator=require('validator')
const bcrypt=require('bcrypt')

const Schema=mongoose.Schema

const UserRegisterSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirm_password:{
        type:String,
        required:true,
    }
})

// UserRegisterSchema.statics.signup=async function (name,email,password,confirm_password) {
//     if(!name || !email || !password || !confirm_password){
//         throw Error("All fileds must be field")
//     }
//     if(!validator.isEmail(email)){
//         throw Error("Email is not valid")

//     }
//     if(!validator.isStrongPassword(password)){
//         throw Error("Password not strong enough")

//     }
//     const exits=await this.findOne({email})
//     if(exits){
//         throw Error("Email already in use")

//     }

//     const salt=await bcrypt.genSalt(10);
//     const hash=await bcrypt.hash(password,salt)
//     const user=await this.create({name,email,password:hash});
//     return user;
// }
module.exports=mongoose.model('User',UserRegisterSchema);