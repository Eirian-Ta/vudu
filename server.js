const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config({path: 'config/keys.env'});
var session = require('express-session');

//imported module 
const fakeDB  = require("./model/FakeDB.js");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//Tells Express where my static routes are 
app.use(express.static("public"));

//tell express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: false }));


app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

//validate email input for signup form
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

//validate email password for signup form
// pw password should contain at least 8 characters, 
// 1 Number, 1 lowercase character, 1 uppercase character. 
// No special characters are allowed.
function validatePsw(psw) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(psw);
}

//*routes

//**dashboard
app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{
        title: "Dashboard",
        name: req.session.userName
    });
})

//**homepage
app.get("/",(req,res)=>{
    res.render("home",{
        title : "Home Page",
        fmovies : fakeDB.getAllMoviesFeatured(),
        fshows: fakeDB.getAllShowsFeatured(),
        items : fakeDB.getAllItems(),
        cats: ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10']
    });
})

//**login
app.get("/login",(req,res)=>{
    res.render("login",{
        title: "Log In Page"
    });
})

app.post("/login",(req,res)=> {
    let errors={};

    errors.errUsn = req.body.uname =="" ? "Please enter your username." : false;
    errors.errPsw = req.body.psw =="" ? "Please enter your password." : false;

    if (!errors.errUsn && !errors.errPsw) {
        console.log("Loggin inputs are valid!");
    }
    else {
        console.log(errors);
    }

    res.render("login", {
        title: "Log In Page",
        usn: req.body.uname,
        psw: req.body.psw,
        errorU: errors.errUsn,
        errorP: errors.errPsw
    })
})

//**signup
app.get("/signup",(req,res)=>{
    res.render("signup",{
        title: "Sign Up Page"
    });
})

app.post("/signup",(req,res)=> {
    console.log(validateEmail(req.body.email));
    let errors={errName: []};

    errors.errName.push(req.body.fname =="" ? "Please enter your first name." : false);
    errors.errName.push(req.body.lname =="" ? "Please enter your last name." : false);

    errors.errEmail = req.body.email =="" ? "Please enter your email" : false;
    errors.errEmail = !validateEmail(req.body.email) ? "The email you have entered is not valid. Please enter a valid email." : false;
    
    errors.errPsw = req.body.psw =="" ? "Please enter your password." : false;
    errors.errPsw = !validatePsw(req.body.psw) ? "Your password should contain at least 8 characters, 1 number, 1 lowercase character, 1 uppercase character. No special characters are allowed." : false;

    errors.errCb = !req.body.checkBox ? "You must agree to the Terms and Policies and Privacy Policy." : false;

    if (!errors.errName[0] && !errors.errName[1] && !errors.errEmail && !errors.errPsw && !errors.errCb) {
        //SENDGRID
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
        to: req.body.email,
        from: 'tta6@myseneca.ca', // Change to your verified sender
        subject: 'WELCOME TO VUDU@SENECA',
        text: `Hi ${req.body.fname}, welcome to Vudu@Seneca`,
        html: `<h1>Hi ${req.body.fname}, welcome to Vudu@Seneca</h1>`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

        req.session.userName = req.body.fname;
        res.redirect("/dashboard")
    }
    else {
        console.log(errors);
        res.render("signup", {
            title: "Sign Up Page",
            fn: req.body.fname,
            ln: req.body.lname,
            em: req.body.email,
            psw: req.body.psw,
            cb: req.body.checkBox? "checked" :"",
            errorN: errors.errName,
            errorE: errors.errEmail,
            errorP: errors.errPsw,
            errorCb: errors.errCb,        
        })
    }
})

//**list all items
app.get("/allListing",(req,res)=>{
    res.render("allListing",{
        title: "All Item Listing Page",
        items : fakeDB.getAllItems()
    });
})

//**list all movies
app.get("/movielisting",(req,res)=>{
    res.render("movieListing",{
        title: "Movie Listing Page",
        movies : fakeDB.getAllMovies()
    });
})

//**list all tv shows
app.get("/tvshowlisting",(req,res)=>{
    res.render("tvshowListing",{
        title: "TV Show Listing Page",
        shows : fakeDB.getAllShows()
    });
})

//**get an item
app.get("/items/:id",(req,res)=>{
    console.log(fakeDB.getAnItem(req.params.id));
    res.render("itemDetails",{
        item : fakeDB.getAnItem(req.params.id),
        suggestions: fakeDB.getSimilarGerneItems(req.params.id)
    })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{

    console.log(`Web Server is up and running on PORT ${PORT}`)
})