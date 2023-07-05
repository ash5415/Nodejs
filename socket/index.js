const express =require('express');

const app =express();

const port =3000;

const bodyParser=require('body-Parser');

const cors= require('cors');

app.use(cors());

app.use(bodyParser.json());

// trigger the notification api

app.post('/send-notifications',(req,resp)=>{
    const data = req.body;

    // trigger the broadcast

    Socket.emit('notification',data);
    resp.send(data);
});

const server =app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
});

const socket=require('socket.io')(server,{
            cors:{
                origin:"http://127.0.0.1",
                method:"*"
            }
});

socket.on('connection',socket =>{
    console.log(`client connected`);
});

