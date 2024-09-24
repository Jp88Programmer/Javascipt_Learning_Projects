// json web token 
const jwt = require("jsonwebtoken");

// cookie parser module require 
const cookieParser = require("cookie-parser");

const RegistionDetails = require("../models/resgistionDetails");

// the method to verfiy token in cookie then execte next() method else error occur 
const auth = async (req,res,next)=>{
    
    console.log(`its cookie token value : ${req.cookies.login_form}`);
    
    try{

        const token = req.cookies.login_form ;
        const verfiyUser = await jwt.verify(token,process.env.SECREAT_KEY);

        console.log(verfiyUser);

        const user = await RegistionDetails.findOne({_id:verfiyUser._id});

        console.log(`User details : ${user}`);

        req.user = user ;

        req.token = token ;
        
        next();

    }catch(err){
        res.status(401).send(err);
    }
}

// exports module 
module.exports = auth ;