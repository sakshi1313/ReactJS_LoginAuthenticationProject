const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




require('../db/conn')
const User = require('../model/UserSchema')
const authenticate = require('../middleware/authenticate')



router.get('/',(req,res) => {
    res.send("hello")
})

// router.post('/register',(req,res) => {
// 
    // const {name,email,phone,work,password,cpassword} = req.body;
    // console.log(name);
// 
    // if(!name || !email || !phone || !work || !password || !cpassword){
        // return res.json({error:"Please fill all the details"})
    // }
// 
    // User.findOne({email: email})
        // .then((userExist) => {
            // if(userExist){
                // return res.json({error:"User Exists"});
            // }
        // 
        // const user = new User({name,email,phone,work,password,cpassword})
        // user.save().then(() =>{
            // res.json({message:"user successfully registered"})
        // } ).catch((err) => res.json({error:"failed to register"}))
// 
    // }).catch(err=>{
        // console.log(err)
    // }) 
// })


// route for sign up

router.post('/api/register',async(req,res) => {

    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(400).json({error:"Please fill all the details"})
    }

    try{
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(400).json({error:"Email Exists"});
        }
        else if(password != cpassword)
        {
            return res.status(400).json({error:"Passwords and confirm password does not match"});
        }
        else{
            const user = new User({name,email,phone,work,password,cpassword})

            // password hashing.....

            await  user.save()
            console.log(user)
            res.status(200).json({message:"user successfully registered"})

        }
        
    }
    catch(err){
        console.log(err);
    }


}); 

// route for login / signin

router.post('/api/login',async(req,res)=>{

    try{
        const {email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({error:"Fill the data"})
        }


        const userLogin = await User.findOne({email:email}) //finsing for asked email in database
        // console.log(userLogin)

        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password,userLogin.password) //agar email match hua thne password match ho rha??
           
           
           
            // -------------- -------------------JWT TOKENS-------------------------------------------------
            const token = await userLogin.generateAuthToken();
            console.log(token)
            // user jb bhi login krega..token generate hoge and database me field me add ho jayega

            // --------------------------------------COOKIES ME STORE KRNA H

            res.cookie("jwttoken",token,{
                expires:new Date(Date.now() + 25892000000), // 30 days ms
                httpOnly: true

            })
            // -------------------------------------------------------------------------

            if(!isMatch)
            {
                res.status(400).json({error : "Invalid Credentials"})
            }
            else{
                res.status(200).json({message : "User signed in"})

            }
        }
        else{
            res.status(400).json({error : "Invalid Credentials"})

        }

        
    

    } catch(err){
        console.log(err)
    }
})

 
// about us wla page..should be opened only after authentication
router.get('/api/about',authenticate,(req,res) => {
    console.log("About me")
    res.send(req.rootUser)
})

router.get('/home',(req,res) => {
    res.send("home")
})

module.exports=router;
