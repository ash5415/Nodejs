const express= require('express');

const app= express();

const mongoose =require('mongoose');

const router=require('./routes/index');


const connectionString='mongodb+srv://Students:Students@cluster0.ltlro.mongodb.net';
const port =3000;

const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use('/',router);

     mongoose.connect(
        connectionString,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
     ).then(resp =>{
        console.log("successfully connected to the mongoDb!!!!!!");

        app.listen(port,function () {
                console.log(`server up and running on port ${port}`);
            });

     }).catch(error =>{
        console.lop(" error in the connection string!!!!!")
     });



