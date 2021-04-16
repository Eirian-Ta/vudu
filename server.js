const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
var session = require('express-session');

//This loads all our environment variables from the keys.env
require("dotenv").config({path:'./config/keys.env'});

//import your router objects
const userRoutes = require("./controllers/User");
const generalRoutes = require("./controllers/General");

const app = express();

//tell express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: false }));

//Tells Express where my static routes are 
app.use(express.static("public"));

//Handlebars middlware
app.engine("handlebars",exphbs({
    helpers:{
        defaultLayout: 'main',
        if_eq: function(a, b, opts) {
            if (a == b) {
                return opts.fn(this);
            } else {
                return opts.inverse(this);
            }
        },
        formatTime: function(time) {
            return moment(time).format("YYYY-MM-DD")
        }
    },
}));
app.set("view engine","handlebars");

//Alow specific forms submitted to send PUT and DELETE request
app.use((req,res,next)=>{
    if(req.query.method=="PUT")
    {
        req.method="PUT"
    }
    else if (req.query.method=="DELETE")
    {
        req.method="DELETE"
    }
    next();
})

app.use(fileUpload());

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true } //only work for https
  }))

app.use((req,res,next)=>{
    
    res.locals.user=req.session.userInfo;

    next();
})


//MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
app.use("/",generalRoutes);
app.use("/user",userRoutes);
app.use("/",(req,res)=>{
    res.render("General/404");
    
});

mongoose.connect (process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));

const PORT = process.env.PORT;
//Creates an Express Web Server that listens for incomin HTTP Requests
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});
