const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
        
    
})


//-------------------------------------hashing ke liye..----------------------------------------
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }
    next();
})

//--------------------------------- auth token generation --------------------------------------------------
userSchema.methods.generateAuthToken = async function()
{
    try{
        let token_gen = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token_gen})
        await this.save()
        return token_gen;
    }catch(err)
    {
        console.log(err);
    }
}

// -----------------------------------------------------------------------------------------
const User = mongoose.model('USER',userSchema)

module.exports = User;
