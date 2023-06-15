 // by default arguments are considered as string, so convert them into integer using parseInt() function

// var a = parseInt(process.argv[2]);

// var b = process.argv[3];

// var c = parseInt(process.argv[4]);

//    let result =0;

// switch(b){
//     case '+':
//         result = a + c;
//         break;

//     case '-':
//         result = a - c;
//         break;
        
//     case '*':
//         result = a * c;
//         break;
//     default:
//         result=undefined;

// }
//     console.log(`Answer :${result}`);
// //const { error } = require('console');

//     console.log(`0th position of the index :${process.argv[0]}`);
//     console.log(`1st position of the index :${process.argv[1]}`);


//const { error } = require('console');
    const { error } = require('console');
const fs = require('fs');

    // fs.open("app.html", 'r+',(error,data) =>{
    //     if(error){
    //         console.log("error in the file : " + error);
    //     }else{
    //         console.log(`data : ${data}`);
    //     }
    // });

fs.stat("app.html",(error,stats)=>{
     if(error){
        console.log(`error opening the file ${error}`)
     }else{
        console.log("stats are :" + JSON.stringify(stats));

        console.log("is file is :" + stats.isFile());

        console.log(" is file directory :" + stats.isDirectory());
     }
})


fs.writeFile("myText.txt", "we arw in second nodejs class", (error,data)=>{
    if(error){
        console.log(`error in the file ${error}`);
    }else{
        console.log(" file created successfully!!!!!!!");
    }
    
});


fs.readFile("myText.txt", (error,data)=>{
    if(error){
        console.log("error in the file :" + error )
    }else{
        console.log("reading the file successfully !!!!!! :" + data.toString());
    }
});

fs.rename("myText.txt","myText.doc",function (error) {
        if (error) {
            console.log("error in the file changing :" + error);
        } else {
            console.log("file renamed successfully!!!!!!!!");
        }
    });

fs.appendFile("myText.txt","nodejs file system",(error,data)=>{
    if(error){
        console.log(`error in the file ${error}`);
    }else{
        console.log("data added to the file successfully !!!!!!!!!");
    }
});

fs.unlink("myText.txt", (error)=>{
    if(error){
    console.log("error while deleting file :" + error)
    }else{
        console.log("file deleted successfully !!!!!!!!")
    }
})