const express =require('express');

const bodyParser =require('body-parser');

const jwt =require('jsonwebtoken');

const secret='dbhjbhbhjbvdhjdbvhcebehjbjbvjevjej383989489u98'

const app =express();

const port =3000;


app.use(bodyParser.json());

app.post('/login',(req,res)=>{
       
      const {
        username,
        password
      }=req.body;

      // logic to connect to DB verify the user

      if(username == 'admin' && password == 'admin'){

        const payload ={
            name:'ash',
            course:'IT',
            school:'rmit'
        }

        jwt.sign(
            payload,
            secret,
            {
                expiresIn  :34334444
            },
            (error,token)=>{
                res.status(200).json(P{
                    token,
                    isLoggedin:true
                });
            }
        )
    }else{
            // return 401
            
        res.status(401).json({
            error:'invalid username or password'
        })
    }
        
});

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`);
});