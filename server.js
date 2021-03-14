const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')

//imported module 
const fakeDB  = require("./model/FakeDB.js");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//Tells Express where my static routes are 
app.use(express.static("public"));

//tell express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: false }));


//*routes

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

    errors.errUsn = req.body.uname =="" ? "Please enter your username" : false;
    errors.errPsw = req.body.psw =="" ? "Please enter your password" : false;

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

// app.post("/signup",(req,res)=> {
//     let errors=[]
//     //console.log(req.body);

//     errors[0] = req.body.fname =="" ? "Please enter your first name" : false;
//     errors[1] = req.body.lname =="" ? "Please enter your last name" : false;
//     errors[2] = req.body.lname =="" ? "Please enter your last name" : false;


//     if (req.body.lname =="") {
//         errors[0] = "Please enter your last name";
//     }

//     if (req.body.psw =="")
//     {
//         errors[1] = "Please enter your password";
//     }

//     if (errors[0] || errors[1])
//     {
//         console.log(errors);
//         res.render("login", {
//             title: "Log In Page",
//             errorU: errors[0],
//             errorP: errors[1]
//         })
//     }
//     else {
//         console.log("Loggin inputs are valid!");
//     }

// })

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



const PORT = 5000;
app.listen(PORT, ()=>{

    console.log(`Web Server is up and running on PORT ${PORT}`)
})