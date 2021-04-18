exports.getHomePageView = (req,res,next)=> {
    res.render("General/home", {
        title : "Home Page",
        fmovies : req.fmovies,
        fshows: req.fshows,
        items : req.allItems,
        cats: ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10']
    });
}

exports.getAllListingView = (req,res,next)=> {
    res.render("allListing",{
        title: "All Item Listing Page",
        items : req.allItems
    });
}

exports.getAllMoviesView = (req,res,next)=> {
    res.render("movieListing",{
        title: "Movie Listing Page",
        movies : req.movies
    });
}

exports.getAllShowsView = (req,res,next)=> {
    res.render("tvshowListing",{
        title: "Show Listing Page",
        shows : req.shows
    });
}

exports.getAnItemDetailsView = (req,res,next)=> {
    res.render("itemDetails",{
        item : req.item,
        suggestions: req.relatedItems,
        session: req.session
    })
    console.log("Session: ",req.session);
}