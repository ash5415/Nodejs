const express= require('express');

const port =3000;

const app =express();

app.get('/items',(req,resp)=>{
      resp.status(200).json([
        'car',
        'apple',
        'truck',
        'bus'
      ]);
});

app.listen(port,()=>{
    console.log(`server up and running on port${port}`);
});