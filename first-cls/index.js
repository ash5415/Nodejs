const operatingSystem= require('os');
// file system
const fs = require("fs");
//const { error } = require('console');

console.log("Architecture:" + operatingSystem.arch());

console.log("Release :" + operatingSystem.release());

console.log("platform :" + operatingSystem.platform());
fs.writeFileSync("test.txt" ,"welcome to the nodejs", (error)=>{
    if(error){
        console.log("file created successfully :" + error)
    }else{
        console.log(`file created successfully`)
    }
});
  
// buffer module //

const buff1 = Buffer.from([1,2,3,4,5,6,7,8]);

const buff2 = Buffer.from(['a','b','c','d','e','f','g','h']);

console.log("toString :" + buff1.toString());

console.log(buff1.equals(buff2));

console.log(Buffer.compare(buff1,buff2));

const http = require('http');

http.createServer((req,resp)=>{
      resp.end(`welcome to the nodejs`)
}).listen(3000);

const url = require('url');

const address = "https://learning.edureka.co/classroom/presentation/884/8370/1413404?tab=CourseContent";

const q = url.parse(address,true).auth

console.log(`Host : ${q.host}`);

console.log(`Path :${q.pathname}`);

console.log(`QueryParams : ${q.search}`);

