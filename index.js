const express = require('express');
const cors = require('cors');
const bd = require('body-parser');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const app = express();
const bcrypt = require('bcryptjs');
const port = 8080;
let authmodel = require('./model/User_model');
const { response } = require('express');
let todomodel = require('./model/TodoModel');



app.use(cors());
app.use(bd.urlencoded({extended:false}));
app.use(bd.json());
app.use(express.json);

const db = 'mongodb+srv://hammad:hammad12345@cluster0.gyfiy.mongodb.net/MY_USER?retryWrites=true&w=majority';
mongoose.connect(db).then(()=>{
    console.log("Db Connected ");
}).catch((err)=> console.log("Db is not connected ")
);

app.get('/name',(req,res)=>{
        console.log("Hello world this is hammad");
} );

// app.post('/signup',async(req,res)=>{
//     //console.log(req.body.email)
//     var checkuser = await authmodel.findOne({
//         email: req.body.email
        
//     })
//     if (checkuser) {
//         res.status(200).send({result:checkuser,message:"User is already Registered"})
//     }else{
//         var hashpass = await bcrypt.hash(req.body.password,12);
//       // res.send({message:"Yes You Can Signup"})
//      let usercreate = new authmodel({
//                 email:req.body.email,
//                 password:hashpass, })
//             usercreate.save().then((response)=>{
//                 //console.log(response,"Response is working");
//                 res.status(200).send({result:response,message:"data is stored"})
//             }).catch((err)=>{
//               // console.log(err,"error");
//               res.status(400).send({result:err.message,message:"data is  not stored"})
//   })  } 
// })

// app.post('/Login',async(req,res)=>{
//     var checkuser = await authmodel.findOne({
//         email: req.body.email
        
//     });
//     if (checkuser) {
//         var checkpass = await bcrypt.compare(req.body.password, checkuser.password);
//         if (checkpass) {
//             res.status(200).send({message:"Login kar sakty hu  "})
//         } else {
            
//             res.status(403).send({message:"Your password is incorrect try again "})
//         }
//     } else {
//         res.status(403).send({message:"No user is Registered With is Email "})
//     }})

//     app.post('/todoadd',async(req,res)=>{
//         let usercreate = new todomodel({
//             todoname:req.body.todoname,
//             })
//         usercreate.save().then((response)=>{
            
//             res.status(200).send({result:response,message:"todo is addedd"})
//         }).catch((err)=>{
          
//           res.status(400).send({result:err.message,message:"todo is not added"})
// })
//     })
app.listen(port,"localhost",()=>{
    console.log("Server is running"+port)
});