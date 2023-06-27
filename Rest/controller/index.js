// import the model//
// get method handler //
const Student =require('../models/index');

exports.getStudents=(req,resp)=>{
    Student.find().then(result=>{
        resp.status(200).json({
            Students:result,
            message:'successfully connect to the mongodb!!!!!'
        });
    }).catch(error=>{
         resp.status(500).json({
            error:error,
            message:'error in the fetching data!!!!!!! '
         });
    });
}

/// create handler ///
exports.createStudent=(req,resp) =>{
    const {
        name,
        roll_no,
        class
    } = req.body;

    // create a object of the model class///

    const studentObj= new Student({
         Name:name,
         Class:class_no,
         "Roll_no":roll_no
    })

    // call the save method //
         studentObj.save().then(result=>{
            resp.status(200).json({
                student:result,
                message:"successfully created students!!!!!!!!"
            });

         }).catch(error =>{
            resp.status(500).json({
                error:error,
                message:"error while creating the students!!!!!!"
            });
         });
};

// update handler //
exports.updateStudent=(req,res)=>{
    const{
        name,
        roll_no,
        class
    }=req.body;

      const studentObj ={
        Name : name,
        "Roll_No" : roll_no,
        Class : class_no
      }
    const studentId =req.params.id;
       Student.findOneAndUpdate({
         _id:studentId,
         studentObj
       }).then(result =>{
           res.status(200).json({
            result:students,
            message:"successfully update the students!!!!!!! "
           })
       }).catch(error =>{
        res.status(500).json({
            error: error,
            message:'error while updating the students '
        });
    })
};

 // delete handler///
exports.deleteStudent=(req,resp)=>{
    const studentId=req.params.id;
    student.findOneAndDelete({
        _id:studentId
    }).then(result =>{
        resp.status(200).json({
            result :student,
            message:'successfully delete the students!!!!!!',

        })
    }).catch(error =>{
        resp.status(500).json({
            error:error,
            message:'error while deleting the student!!!!!'
        })
    })
}