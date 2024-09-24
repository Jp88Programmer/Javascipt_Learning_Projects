// dotenv to config file to use process.env. any .env file content use 
require('dotenv').config();

const express = require("express")

const app = express();

const bcrypt = require("bcrypt");

const path = require("path")

// cookie parser module require 
const cookieParser = require("cookie-parser");

// join the file of connection.js
require("./dbs/connection")

// requireing RegistionDetails object to save the document 
const RegistionDetails = require("./models/resgistionDetails");

const auth = require("./middleware/auth");
const async = require('hbs/lib/async');

// define port number
const port = process.env.port || 8000;

// here join the path of working to static directory 
const stasticPath = path.join(__dirname,"../static");

// to use the express static file to set path of static directory then define path.join() method 
app.use(express.static(stasticPath));

// express content are be json format that use express.json()
app.use(express.json());

// here use body-parser content to fetch all content of webpage body part that its not permit to share it 
// express.urlencoded({extentded:true})
// then body-parser not any error and worning occur
app.use(express.urlencoded({extended:true}));

// to use cookieParser than to define the in below method 
app.use(cookieParser());

// console.log(process.env.SECREAT_KEY);

app.get("/",(req,res)=>{
    res.sendFile(stasticPath + "\\index.html");
})


// get method
app.get('/resgistion',(req,res)=>{
    res.sendFile(stasticPath + "\\registration.html");
})

app.get('/login',(req,res)=>{
    res.sendFile(stasticPath + "\\loginForm.html");
})

// when user choose logout then delete/remove token and cookie,user authentacation are remove and repeate the login and genarate  
app.get('/logout',auth,async(req,res)=>{

    try{

        
        // RegistionDetails.findById({_id:req._id}).tokens.delete({token:req.token});

        console.log(`login user profile details : ${req.user} and \ntoken : ${req.token}`);

        // to change and delete current token to tokens array and save the database thefore delete token in database 
        req.user.tokens = req.user.tokens.filter((element)=>{
            return element.token !== req.token;
        })

        // req.user.tokens = [];
        
        // console.log(`login user profile details : ${req.user} and \ntoken : ${req.token}`);

        res.clearCookie("login_form");

        await req.user.save();

        res.status(200).sendFile(stasticPath + "\\loginForm.html");
        // res.status(200).
    }catch(err){
        res.status(500).send(err);
    }

})

app.get('/auth',auth,(req,res)=>{

    // console.log(`its cookie token value : ${req.cookies.login_form}`);

    // const verfiy = jwt.


    res.sendFile(stasticPath + "\\authentcate.html");
})

// to get database data 
app.get('/details',async(req,res)=>{
    try{

        const data = await RegistionDetails.find({});
        res.send(data);
    }catch(err){console.log(err)}
})

// when sumbit the form then here post method call and make document and save 
app.post('/',async(req,res)=>{
    // console.log(req.body);

    const data = new RegistionDetails({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.confirmPassword
    });

    try{

        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        
        // if password and confirm password are same than data will be save othewise message see in else scope
        if(password === confirmPassword){

                // create token and save token and return token value as string 
                const token = await data.createToken();

                // cookies are small files which are stored on a user's computer. They are designed to hold a modset amount 
                // amount of data specific to a particular client and website, and can be accessed either by the server or 
                // the client computer
                // cookie(name: string, val: string, options: CookieOptions): Response<any, Record<string, any>, number>
                // to set cookie first name,then token and you can set expires date when remove cookie  
                res.cookie("registration_form",token,{
                    expires: new Date(Date.now() + 30000000),
                    httpOnly:true
                });

                await data.passwordBcrypt();
                
                const data1 = await data.save();
                // console.log(data1);
                res.status(201).send('your resgistioin sucessfully!!');

        }else{
            res.send("password don't matching");
        }
    }catch(err){
        res.status(400).send(err);
    }
})

// login request accpeted and give response
// when user login and give email and password then below request accpted
app.post('/login',async(req,res)=>{

    const email = req.body.email;

    const password = req.body.password;

    try{

        // find the email === body.email then promise execute 
        const registerData = await RegistionDetails.findOne({email:email});
        
        // compare bcrypt password to bcrypt compare mehtod first arg = body password and second is the database save password 
        const isCheck = await bcrypt.compare(password,registerData.password);
        
        console.log(isCheck);
        
        // create token and save token and return token value as string 
        const token = await registerData.createToken();

        console.log(token);
        
        // when token create then to make cookie and also set expires 
        res.cookie("login_form",token,{
            expires: new Date(Date.now() + 30000000), //expires time 
            httpOnly:true
        });
        
        // console.log(`its cookie token value : ${req.cookies.login_form}`);

        if(!isCheck){
            res.status(400).send(` Invaild email and password  `);
        }
        else{
            // res.status(201).send('login successfully');
            res.sendFile(stasticPath + "\\authentcate.html");
            
        }
    }catch(err){
        res.status(400).send(` Invaild email and password ${err}`);
    }
})

// all feild data delete 
app.delete("/",async(req,res)=>{
    try{
        const deleteAllFeild = await RegistionDetails.deleteMany({});
        console.log(deleteAllFeild);
        res.status(201).send();
    }catch(err){
        res.status(400).send(err);
    }
})

// server start at defining port 
app.listen(port,()=>{
    console.log(`server listen at port no ${port}`)
})