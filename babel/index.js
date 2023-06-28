const express= require('express');

const port =3000;

const app =express();

app.get('/',(req,res)=>{
    const details={
        course:"nodejs",

        school:"rmit"
    }

    const time={
        duration:2,
        ...details
    }

    res.status(200).json({
        result:time
    });
})

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
});