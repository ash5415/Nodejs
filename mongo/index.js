const express =require('express');

const mongoose= require('mongoose');

const connectionString='mongodb://atlas-sql-617d71f775387d59e1e77ca0-ltlro.a.query.mongodb.net/Students?ssl=true&authSource=admin';

const app =express();

const port =4000;

mongoose.connect(
    connectionString,
    {
        //useNewUrlParser:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(response =>{
    console.log(`successfully connected to mongodb`);
    
    app.listen(port,()=>{
        console.log(`server up and running on port ${port}`);
    });
}).catch(error=>{
    console.log(`error in the connection string!!!!!`);
});

