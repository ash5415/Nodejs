  //const { error } = require('console');
const fs = require('fs');

  const series ={
    "name" : "Ash",
    "class" : "Masters"

  };

//   const data =JSON.stringify(series);

//      fs.writeFile('series.json', data, (error,data)=>{
//         if(error){
//             console.log("error while creating th file :" + error);
//         }else{
//             console.log("file created successfully!!!!!")
//         }
//      });

// fs.readFile('series.json',(error,data)=>{
//     if(error) throw error;

//     const output=JSON.parse(data);

//     console.log(output.class);
      
// });

const data = fs.readFileSync('series.json').toString();

const jsonData =JSON.parse(data);

jsonData.title= "har";

const strFormat =JSON.stringify(jsonData);

fs.writeFileSync('series.json',strFormat);