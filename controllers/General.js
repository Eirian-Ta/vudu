const express = require('express')
const router = express.Router();


//imported module 
const fakeDB  = require("../models/FakeDB.js");


/*GENERAL ROUTES*/
//**homepage
router.get("/",(req,res)=>{
    res.render("General/home",{
        title : "Home Page",
        fmovies : fakeDB.getAllMoviesFeatured(),
        fshows: fakeDB.getAllShowsFeatured(),
        items : fakeDB.getAllItems(),
        cats: ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10']
    });
})



//**list all items
router.get("/allListing",(req,res)=>{
    res.render("allListing",{
        title: "All Item Listing Page",
        items : fakeDB.getAllItems()
    });
})

//**list all movies
router.get("/movielisting",(req,res)=>{
    res.render("movieListing",{
        title: "Movie Listing Page",
        movies : fakeDB.getAllMovies()
    });
})

//**list all tv shows
router.get("/tvshowlisting",(req,res)=>{
    res.render("tvshowListing",{
        title: "TV Show Listing Page",
        shows : fakeDB.getAllShows()
    });
})

//**get an item
router.get("/items/:id",(req,res)=>{
    console.log(fakeDB.getAnItem(req.params.id));
    res.render("itemDetails",{
        item : fakeDB.getAnItem(req.params.id),
        suggestions: fakeDB.getSimilarGerneItems(req.params.id)
    })
})


module.exports=router;