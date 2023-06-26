const express= require('express');


//const mongoose = require('mongoose');

const app = express();

const port =3000;

//const connectionString='mongodb+srv://Students:Students@cluster0.ltlro.mongodb.net';

const mongodbClient =require('mongodb').MongoClient;

const connectionStringLocal = 'mongodb://127.0.0.1:27017';

mongodbClient.connect(connectionStringLocal,(error,connection)=>{
    if(error){
        throw error;
        
    }else{
        console.log(`successfully connected to local mongodb!!!!!!!`);
    }
    
    app.listen(port,()=>{
            console.log(`server up and running on port${port}`);
    });
});



