const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const StudentSchema= new Schema({
    Name:{
        type:string
    },
    "Roll No":{
        type:Number
    },
    Class:{
        type:Number
    }
});

// create and exports the model using the schema //

module.exports = mongoose.model('Student',StudentSchema,'Students');