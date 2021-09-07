const express = require('express');
const cors = require('cors');
const bd = require('body-parser');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const app = express();
const bcrypt = require('bcryptjs');
const port = 3000;
let authmodel = require('./User_model');
const { response } = require('express');



app.use(cors());
app.use(bd.urlencoded({extended:false}));
app.use(bd.json());

const db = 'mongodb+srv://hammad:hammad12345@cluster0.gyfiy.mongodb.net/MY_USER?retryWrites=true&w=majority';
mongoose.connect(db).then(()=>{
    console.log("Db Connected ");
}).catch((err)=> console.log("Db is not connected ")
);

app.get('/',(req,res)=>{
        res.send("Hello world this is hammad");
} );

app.post('/signup',async(req,res)=>{
    //console.log(req.body)
    var checkuser = await authmodel.findOne({
        email: req.body.email
        
    })
    if (checkuser) {
        res.status(200).send({result:checkuser,message:"User is already Registered"})
    }else{
        var hashpass = await bcrypt.hash(req.body.password,12);
     
     // res.send({message:"Yes You Can Signup"})
     let usercreate = new authmodel({
                email:req.body.email,
                password:hashpass,
            })
        
            usercreate.save().then((response)=>{
                //console.log(response,"Response is working");
                res.status(200).send({result:response,message:"data is stored"})
            }).catch((err)=>{
              // console.log(err,"error");
              res.status(400).send({result:err.message,message:"data is  not stored"})
        })
     
    }
    

//  
})
app.listen(port,()=>{
    console.log("Server is running")
});