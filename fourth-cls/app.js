//const { promises } = require('dns');
const fs =require('fs');

const util = require('util');

var promise =require('promise');
var read =util.promisify(fs.readFile);
promise.all(
    [
            read('text1.txt'),
            read('text2.txt'),
            read('text3.txt')
    ]
).then(data => {
        console.log(data);

}).catch(error => {
    console.log(error);

}).finally(()=>{
     console.log("read all the files");
});