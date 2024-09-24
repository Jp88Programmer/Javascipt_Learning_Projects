// To Submit a form by users then data store in file locally / store in databases

const fs = require('fs')

const express = require('express')

const path = require('path')

const mongoose = require('mongoose')

 main = async() => {
  await mongoose.connect('mongodb://localhost:27017/nodeDb')
  console.log('connected database')
}

main()

const app = express()
app.use(express.urlencoded())
const port = 80

// const home = fs.readFileSync('')

const home = 'html/index.html'

// app.set('html', path.join(__dirname, 'html'))
app.get('/index', (req, res) => {

  res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.post('/', (req, res) => {

  body = req.body
  MyFname = req.body.MyFname
  MyLname = req.body.MyLname
  Mynumber = req.body.Mynumber
  MyDateOfBirth = req.body.MyDateOfBirth
  MyEmail = req.body.MyEmail
  MyGender = req.body.MyGender
  skills = req.body.skills
  Skill = req.body.Skill
  console.log(body.MyFname)
  console.log(body.MyLname)
  console.log(body.Mynumber)
  console.log(body.MyDateOfBirth)
  console.log(body.MyEmail)
  console.log(body.MyGender)
  console.log(body.skills)
  console.log(body.Skill)

  let str = `
            First Name : ${MyFname} 
            Last Name : ${MyLname} 
            Phone Number : ${Mynumber} 
            Date Of Birth : ${MyDateOfBirth} 
            Email : ${MyEmail} 
            Gender : ${MyGender} 
            Skills : ${skills} 
            About Skills : ${Skill}`

  fs.writeFileSync('info.txt',str)

  
const user1 = new TcsRequirmenter({
  
  firstName  : MyFname ,
  lastName : MyLname,
  PhoneNumber : Mynumber ,
  dateOfBirth : MyDateOfBirth ,
  email : MyEmail ,
  gender : MyGender,
  skills : skills ,
  Skill : Skill 
})

user1.save();

  res.status(200).end('<h1>your form sumbit</h1>')
})

const {Schema} = mongoose

const requiurmentSchema = new Schema({

  firstName  :String ,
  lastName : String,
  PhoneNumber : Number ,
  dateOfBirth : Date ,
  email : String ,
  gender : String,
  skills : String ,
  Skill : String 

})

const TcsRequirmenter = mongoose.model('TcsRequirment', requiurmentSchema)

app.listen(port, () => {

  console.log(`server listing at port no ${port}`)
})
