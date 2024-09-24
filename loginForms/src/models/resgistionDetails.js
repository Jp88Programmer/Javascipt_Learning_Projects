const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const async = require('hbs/lib/async');
const jwt = require("jsonwebtoken");
// const res = require('express/lib/response');

const RegSchema =new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: [true, 'email is already exists'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    // required: true
  },
  tokens:[
      {
        token:{
          type: String,
          required: true
        }
    }
  ]
   
})


// to make token with use of jwt and save the token is database
RegSchema.methods.createToken = async function(){

  try{

    console.log(this._id)                         //to use the content of secreat key 
    const token = await jwt.sign({_id : this._id},process.env.SECREAT_KEY);
    
    // console.log(token);
    
    this.tokens.push({token:token});
    
    await this.save();

    return token ;
  }catch(err){
    console.log(err);
    // res.send(err);
  }


}


// pre method to execut before document save 
// here password convert bcrypt password and then save the document 
// confirmPassword assign undefined because to check condition when user register then not use anywhere

// RegSchema.pre("save",async function(next){
//     // console.log(this.password);
//     this.password = await bcrypt.hash(this.password,10);
//     // console.log(this.password);
//     this.confirmPassword = undefined;
//     next();
// });

 RegSchema.methods.passwordBcrypt  = async function(){

    try{

      // console.log(this.password);
      this.password = await bcrypt.hash(this.password,10);
      // console.log(this.password);
      this.confirmPassword = undefined;
      // next();

    }catch(err){
      console.log(err);
    }
};



const RegistionDetails =  mongoose.model('RegistionDetails', RegSchema);

module.exports = RegistionDetails;
