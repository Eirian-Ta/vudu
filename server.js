const express = require("express");
const exphbs  = require('express-handlebars');
//const bodyParser = require('body-parser')

//imported module 
const fakeDB  = require("./model/FakeDB.js");

const app = express();

//Tells Express where my static routes are 
app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

//routes
app.get("/",(req,res)=>{
    res.render("home",{
        title : "Home Page",
        fmovies : fakeDB.getAllMoviesFeatured(),
        fshows: fakeDB.getAllShowsFeatured(),
        items : fakeDB.getAllItems(),
        cats: ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10']
    });
})

app.get("/login",(req,res)=>{
    res.render("login",{
        title: "Log In Page"
    });
})

app.get("/signup",(req,res)=>{
    res.render("signup",{
        title: "Sign Up Page"
    });
})

app.get("/allListing",(req,res)=>{
    res.render("allListing",{
        title: "All Item Listing Page",
        items : fakeDB.getAllItems()
    });
})

app.get("/movielisting",(req,res)=>{
    res.render("movieListing",{
        title: "Movie Listing Page",
        movies : fakeDB.getAllMovies()
    });
})

app.get("/tvshowlisting",(req,res)=>{
    res.render("tvshowListing",{
        title: "TV Show Listing Page",
        shows : fakeDB.getAllShows()
    });
})

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