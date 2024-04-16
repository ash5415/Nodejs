const express =require('express');

const app = express();

const port = 4200;

const request = require('request');

//const bodyParser = require('body-parser');

// ejs setup
app.use(express.static(__dirname + '/public'));    // css
app.set('view engine','ejs');   // set ejs
app.set('views','./src/views');   // set views

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.74&lon=73.98&appid=7d1dcb3ac0da5edaa2e1584daad48650';
app.get('/weather',(_req,resp)=>{
  request(url,(error,response,body)=>{
    if(error){
      throw error;
    }else{
      const outPut = JSON.parse(body);
      //resp.send(outPut);
      resp.render('main',{
        outPut,
        title: "weather App"
      })
    }
  })
})

app.get('/',(req,resp)=>{
  resp.send(
    console.log('welcome to the weather')
  )
})
app.listen(port,(error)=>{
    if(error){
      throw error;
    }else{
      console.log(`server up and running on ${port}`);
    }
});