const express = require('express');

const LocalStorage =require('node-localstorage').LocalStorage;

const localStorage =require('./dump');

const app =express();

const port = 3000;

app.get('/test',(req,resp) =>{

    // we are setting the token 
    const token ='pass the token';      // pass the JWT token here 

    localStorage.setItem('token', token);

    resp.send('you can check your local storage!!!!!!')
});

// we are getting the token 
app.get('/getItem',(req,resp)=>{
    const token =localStorage.getItem('token');
    resp.send(token.toString());
});

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
});