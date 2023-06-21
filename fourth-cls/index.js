const express= require('express');

const app= express();

const port =3000;

// set ejs engine 

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render(
        'index',
        {
            title:'My Home',
            rating: '5 star'
        }
    )
})
app.listen(port,()=>{

    console.log(`server is up and running on port ${port}`);
});