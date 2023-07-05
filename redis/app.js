const express =require('express');

const app= express();

const port = 3000;

const redis= require('redis');

const client =redis.createClient({
    port:6379,
    host:'127.0.0.1'
});

client.set('userVisits',0);

app.get('/getVisits',(req,resp)=>{
    client.get('userVisits',(error,data)=>{
        const userVisits = data;

        const currentVisits = data+1;
    
        client.set('userVisits',currentVisits);
        resp.send(200).json({
            result:'successfully getting the user counts!!!!!!'
        });
    })
    
})

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
});