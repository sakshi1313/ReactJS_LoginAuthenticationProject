const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());


dotenv.config({path:'./.env'})
require('./db/conn')

app.use(express.json());
app.use(require('./routes/auth'))




// const db = process.env.DATABASE;
// const User = require('./model/UserSchema')
// mongoose.connect(db).then(() => {
//     console.log("connection successful")
// }).catch((err) => console.log('no connection'))





// app.get('/',(req,res) => {
//     res.send("hello")
// })


// app.get('/about',(req,res) => {
//     res.send("about")
// })

// app.get('/home',(req,res) => {
//     res.send("home")
// })

// app.get('/login',(req,res) => {
//     res.send("login")
// })


app.listen(3000,() => {
    console.log("server is running")
})