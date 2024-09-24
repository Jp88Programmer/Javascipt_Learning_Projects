// create mongoose to defines collections 
const mongoose = require('mongoose')

// its validator to check for defining feild to condition satisfied otherwise error occur
const validator = require('validator')

// define Schema 
const Student = new mongoose.Schema({
  name: {
    type: String,
    required: true,       //when to defineing value its must to assign name its required
    minlength: 2
  },

  email: {
    type: String,
    required: true,
    unique: [true, 'email is already exists'],    //its unique not dublicate value assigning

    // its vakidate attribute to check the vaild email v as argument of email value 
    validate(v) {
      if (!validator.isEmail(v)) {
        throw new Error('email is invaild')
      }
    }
  },

  phoneNumber: {
    type: Number,
    required: true,
    minlength: 10
  },

  course: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  addmissionDate: {
    type: Date,
    default: Date.now
  }

})

// to defineing model or make collection or entering data to existing collection
const enrollStudent = mongoose.model('Student', Student)

// expoorts module
module.exports = enrollStudent
