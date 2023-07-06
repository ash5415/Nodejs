const chai =require('chai');

const chaiHttp= require('chai-http');

const except= chai.expect;

chai.use(chaiHttp);

describe('test the items Api',()=>{
    it('get items',()=>{
           chai.request('http://localhost:3000')
           .get('/items')
           .then(resp =>{
             except(resp).to.have.status(200);
             except(resp.data).is.an('array');
             done();
           }).catch(error =>{
            console.log(error);
           });
    })

    it('testing the products',()=>{
        chai.request('http://localhost:3000')
        .get('/products')
        .then(resp =>{
            except(resp).to .have.status(200);
            done();
        })
        .catch(error =>{
            console.log(error)
        })
    })
})