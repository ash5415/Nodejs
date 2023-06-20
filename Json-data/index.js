 const express= require('express');

 const app= express();

const fs =require('fs');
 const port =3000;

 app.get('/login',(request,response)=>{
    response.send(`<h1> welcome to the nodejs </h1>`)
 });

 app.get('/',(request,response)=>{
    response.send(`welcome to the login page`)
});

app.get('/products',(request,response)=>{
    console.log(request);
      fs.readFile('products.json',(error,data)=>{
        if(error){
            throw error
        }else{
            response.send(JSON.parse(data));
        }
      });
});

 app.listen(port ,()=>{
    console.log(`server up and running on port: ${port}`)
 })