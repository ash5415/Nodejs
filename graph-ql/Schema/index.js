//const express=require('express');

const graphql=require('graphql');

const axios=require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLSchema
}=graphql;

 

const ProductType=new GraphQLObjectType({
    "name":'Product',
    fields:{
        name:{
            type:GraphQLString
        },
        price:{
            type:GraphQLString
        },
        id:{
            type:GraphQLInt
        }
    }
});

// Query  which means (getting the data )

const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        product:{
            type:ProductType
        },
        args:{
              id:{
                type:GraphQLInt
              }
        },
        resolve(parentValue,args){
             return axios.get(`http://localhost:3000/products?args.id`)
             .then(resp =>{
                console.log(`fetching the data successfully!!!!!`)
             }).catch(error =>{
                console.log(`error in the data`)
             })
        }
    }
});

// mutation      which means (adding the product)

const mutation=new GraphQLObjectType({
    name:"mutation",
    fields:{
        addProduct:{
            type:ProductType,
            args:{
                name:{
                    type:GraphQLString
                },
                price:{
                    type:GraphQLString
                },
                id:{
                    type:GraphQLInt
                },
                resolve(parentValue,args){
                    const{
                        name,
                        price,
                        id
                    }=args;
                    return axios.post(`http://localhost:3000/products`,{name,id,price})
                    .then(resp =>{
                        console.log(`successfully add the product`)
                    }).catch(error =>{
                        console.log(`error while adding the product!!!!`)
                    });
                }
            }
        }

    }
})

// creating and exports schema with query and mutation

module.exports= new GraphQLSchema({
    query:RootQuery,
    mutation:mutation
});