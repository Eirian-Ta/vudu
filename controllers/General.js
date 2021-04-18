const express = require('express')
const router = express.Router();
const path = require("path");
const itemModel = require("../models/Item.js");
const itemProcess = require("../middleware/itemProcess.js")
const generalService = require("../services/generalService.js")


//imported module 
const fakeDB  = require("../models/FakeDB.js");


/*GENERAL ROUTES*/
//Homepage
router.get("/",
            itemProcess.getAllItems, 
            itemProcess.getAllMoviesFeatured,
            itemProcess.getAllShowsFeatured,
            generalService.getHomePageView)

//Search
router.get("/search",(req,res)=>{
    res.render("General/search",{
        title : "Search Page",
    });
})

router.post("/search",(req,res)=>{
    //const keywordArr = req.body.kw.split(" "); // a bit complicated, not know how to do yet

    itemModel.find({}).where("title").regex(`^.*${req.body.kw}.*$`)
    // itemModel.find({title:req.body.kw})
    .then((items)=>{
        const filteredItem = items.map(item=>{
            return {
                title:item.title
            }
        });
        res.render("general/search",{
            items: filteredItem
        });
    })
    .catch(err=>console.log(`Error happened when pulling data from the database: ${err}`))


})

//List all items for visiors
router.get("/allListing",itemProcess.getAllItems,generalService.getAllListingView);

//List all movies for visitors
router.get("/movielisting",itemProcess.getAllMovies,generalService.getAllMoviesView);

//List all tv shows for visitors
router.get("/tvshowlisting",itemProcess.getAllShows,generalService.getAllShowsView);

//Get An Item Details Page for visitor
router.get("/items/:id",itemProcess.getAnItem,itemProcess.getSimilarGerneItems,generalService.getAnItemDetailsView);



/**************** ADMIN DASHBOARD **********************/

//List all Items in Admin Dashboard
router.get("/list",itemProcess.getAllItems, (req,res)=>{
    console.log("Items: ",res.body);
    res.render("Item/itemDashboard", {
        items: req.allItems
    });
})

//Route to direct admin to Add Item form
router.get("/add",(req,res)=>
{
    res.render("Item/itemAddForm");
});


//Route to process user's request and data when the user submits the add task form
router.post("/add",(req,res)=>
{
    var err;
    const allowedExt = ["jpg"||"gif"||"png"];
    if (allowedExt.every(e=>e!=req.files.s_image.name || e!=req.files.l_image.name))
    {
        err = "Only jpgs, gifs, pngs can be uploaded!";
        res.render("Item/itemAddForm", {
            title: "Add Item Page",
            title: req.body.title,
            synopsis: req.body.synopsis,
            stars: req.body.stars,
            rent: req.body.rent,
            purchase: req.body.purchase,
            featured: req.body.featured,
            gernes: req.body.gernes.split(','),
            date: req.body.date,
            length: req.body.length,
            rating: req.body.rating,
            studio: req.body.studio,
            language: req.body.language,
            score: req.body.score,
            UHD: req.body.uhd,
            HDX: req.body.hdx,
            SD: req.body.sd,
            CC: req.body.cc,
            err: err
     
        })
    }
    else{
        const newItem = {
            title: req.body.title,
            synopsis: req.body.synopsis,
            stars: req.body.stars,
            rent: req.body.rent,
            purchase: req.body.purchase,
            featured: req.body.featured,
            gernes: req.body.gernes.split(','),
            date: req.body.date,
            length: req.body.length,
            rating: req.body.rating,
            studio: req.body.studio,
            language: req.body.language,
            score: req.body.score,
            UHD: req.body.uhd,
            HDX: req.body.hdx,
            SD: req.body.sd,
            CC: req.body.cc
        }

        //Insert into MOnoDB database: create instance of model --> call the save mothod
        const item = new itemModel(newItem);
        item.save()
        .then((item)=>{
                req.files.s_image.name=`${item.title}_${item._id}_s${path.parse(req.files.s_image.name).ext}`;
                req.files.l_image.name=`${item.title}_${item._id}_l${path.parse(req.files.l_image.name).ext}`;

                req.files.s_image.mv(`public/images/posters/${req.files.s_image.name}`)
                .then(()=> {
                    req.files.l_image.mv(`public/images/posters/${req.files.l_image.name}`)
                    .then(()=> {
                        itemModel.updateOne({_id:item._id},{
                            s_image: req.files.s_image.name,
                            l_image: req.files.l_image.name
                        })
                        .then(()=>{
                            res.redirect("/list")
                        })
                    })
                })
             })
        .catch(err=>console.log(`Error happened when inserting in the database: ${err}`))
    }
});


//Route to direct user to edit task form
// `:` means dynamic
router.get("/edit/:id",itemProcess.getAnItem,(req,res)=>{
    const {
        _id,
        title,
        synopsis,
        s_image,
        l_image,
        stars,
        rent,
        purchase,
        featured,
        gernes,
        date,
        length,
        rating,
        studio,
        language,
        score,
        UHD,
        HDX,
        SD,
        CC
    }=req.item;
    res.render("Item/itemEditForm",{
        _id,
        title,
        synopsis,
        s_image,
        l_image,
        stars,
        rent,
        purchase,
        featured,
        gernes,
        date,
        length,
        rating,
        studio,
        language,
        score,
        UHD,
        HDX,
        SD,
        CC
    })
})




//Route to update user data after they submit the form
router.put("/update/:id",(req,res)=>{
    const item =
    {
        title: req.body.title,
        synopsis: req.body.synopsis,
        stars: req.body.stars,
        rent: req.body.rent,
        purchase: req.body.purchase,
        featured: req.body.featured,
        gernes: req.body.gernes.split(','),
        date: req.body.date,
        length: req.body.length,
        rating: req.body.rating,
        studio: req.body.studio,
        language: req.body.language,
        score: req.body.score,
        UHD: req.body.uhd,
        HDX: req.body.hdx,
        SD: req.body.sd,
        CC: req.body.cc
    }
    req.files.s_image.name=`${item.title}_${req.params.id}_s${path.parse(req.files.s_image.name).ext}`;
    req.files.l_image.name=`${item.title}_${req.params.id}_l${path.parse(req.files.l_image.name).ext}`;
    item.s_image= req.files.s_image.name;
    item.l_image= req.files.l_image.name;

    req.files.s_image.mv(`public/images/posters/${req.files.s_image.name}`)
    .then(()=> {
        console.log("1:", item);
        req.files.l_image.mv(`public/images/posters/${req.files.l_image.name}`)
        .then(()=> {
            console.log("2:", item);
            itemModel.updateOne({_id:req.params.id},item)
            .then(()=>{
                res.redirect("/list");
            })
        })
    })
    .catch(err=>console.log(`Error happened when updating data from the database: ${err}`));
})

//router to delete user
router.delete("/delete/:id",(req,res)=>{
        itemModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/list");
    })
    .catch(err=>console.log(`Error happened when deleting data from the database: ${err}`));
});











module.exports=router;