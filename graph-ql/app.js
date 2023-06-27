const express= require('express');

// import the schema

const schema =require('./Schema/index');

// import the express-graphql//

const expressGraphQL= require('express-graphql').graphqlHTTP

const app =express();

const port =3000;

 app.use('/', expressGraphQL({
    graphiql :true,
    schema
 }));
app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
});