// the server and main application 

// the include connection.js to join and connecting database 
require("../dbs/connection")

// include module express
const express = require("express")
const app = express();

// to include or required Student Collection to add the json format object , save the 
// information from database 
const Student = require('../dbs/models/Student')

// const validator = require('validator')
const port = process.env.port || 8000;

// here the data of post request is the json format than use express.json() 
// In DOM, req.body content its the converting json format and save database
app.use(express.json());

// get request 
// app.get('/students',(req,res)=>{

//     // all field send as response if promise is true than call else catch execute 
//     Student.find().then((data)=>{
//         res.status(200).send(data)
//     }).catch((err)=>{
//         res.status(404).send(`404 Not Found \n ${err}`)
//     })
// })

// get request using async and await 
app.get('/students',async(req,res)=>{

    try{
        const studentData = await Student.find();
        res.status(200).send(studentData);

    }catch(err){
        res.status(400).send(err)
    }
})

// its request to server add the data of student enroll 
// app.post('/students',(req,res)=>{

//     //the posting data (in json format) through req.body as args to Student collection 
//     // and save the database if data vaildate 
//     const studentToJoin = new Student(req.body);

//     // console.log(req.body)
    
//     // save Student collection field 
//     studentToJoin.save().then((r)=>{
//         res.status(201).send(r)
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
// })

// the post request using async and await
app.post('/students',async(req,res)=>{
    
    //the posting data (in json format) through req.body as args to Student collection 
    // and save the database if data vaildate 
    const studentToJoin = new Student(req.body);

    // the await to wait promises and if status 201 then save the data else catch block execuete
    try{
        const saveStudent = await studentToJoin.save()
        res.status(201).send(saveStudent)

    }catch(err){
        res.status(400).send(err)
    }
})

// request for update feild or innner data 
app.patch('/students/:name',async(req,res)=>{
    
    try{

        // const studentToJoin = new Student(req.body);
        if (!req.params.name) {
            res.status(404).send(`404 Not Found ${req.params.name}`)
        }
        const updateStudent = await Student.findOneAndUpdate({name:req.params.name},req.body,{
            new:true
        });
        res.status(200).send(updateStudent);
    }catch(err){
        res.status(405).send(err)
    }
})

// delete fleid by id using async
app.delete('/students/:id',async(req,res)=>{
    
    try{

        // const studentToJoin = new Student(req.body);
        if (!req.params.id) {
            res.status(404).send(`404 Not Found ${req.params.id}`)
        }
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteStudent);
    }catch(err){
        res.status(405).send(err);
    }
})

// server start 
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})

