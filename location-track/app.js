const express = require('express');

const app =express();

const port =3000;

const nodeIpLocate= require('node-iplocate');

const publicIp= require('public-ip');

app.get('/track-ip',(req,resp)=>{
    publicIp.v4().then(ip =>{
        nodeIpLocate(ip).then(resp =>{
            resp.status(200).json({
                result:'successfully tracked ip results'
            });
        }).catch(error =>{
            resp.status(500).json({
                error:'error while tracking the details'
            });
        })
    })
})

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
});