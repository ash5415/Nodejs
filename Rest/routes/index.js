const express =require('express');

const router= express.Router();

const studentsController=require('../controller/index')

// router method : router.method(path,handler)//

router.get('/getStudents',studentsController.getStudents);

router.post('/createStudents',studentsController.createStudents);

router.put('/updateStudent/:id',studentsController.updateStudent);

router.delete('/deleteStudent/:id',studentsController.deleteStudent);

module.exports =router;