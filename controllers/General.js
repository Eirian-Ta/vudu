const express = require('express')
const router = express.Router();
const path = require("path");
const itemModel = require("../models/Item.js");
const itemProcess = require("../middleware/itemProcess.js")
const generalService = require("../services/generalService.js")
const isAuthenticated = require("../middleware/auth")
const sgMail = require('@sendgrid/mail');

const Cart = require('../models/Cart.js');


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
        titlePage : "Search Page",
    });
})

router.post("/search",(req,res)=>{
    const keywordArr = req.body.kw.split(" "); 

    itemModel.find({"title": { $regex: new RegExp(keywordArr.join("|"), "i") } })
    .then((items)=>{
        const filteredItem = items.map(item=>{
            return {
                poster:item.s_image,
                id: item._id
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
router.get("/list",isAuthenticated,itemProcess.getAllItems, (req,res)=>{
    //console.log("Items: ",res.body);
    res.render("Item/itemDashboard", {
        items: req.allItems
    });
})

//Route to direct admin to Add Item form
router.get("/add",isAuthenticated,(req,res)=>
{
    res.render("Item/itemAddForm");
});


//Route to process user's request and data when the user submits the add task form
router.post("/add",isAuthenticated,(req,res)=>
{
    var err;
    const allowedExt = [".jpg",".gif",".png"];
    if (allowedExt.every(e=>e!=(path.parse(req.files.s_image.name).ext.toLowerCase()) || e!=(path.parse(req.files.l_image.name).ext.toLowerCase())))
    {
        err = "Only jpgs, gifs, pngs can be uploaded!";
        res.render("Item/itemAddForm", {
            titlePage: "Add Item Page",
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
router.get("/edit/:id",isAuthenticated,itemProcess.getAnItem,(req,res)=>{
    //console.log("Item pulled:", req.item);
    res.render("Item/itemEditForm", {
        item: req.item
    });
})


//Route to update user data after they submit the form
router.put("/update/:id",isAuthenticated,(req,res)=>{
    var err;
    const allowedExt = [".jpg",".gif",".png"];
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

    if (req.files)
    {
        if (req.files.s_image) {
            if (!(allowedExt.every(e=>e!=(path.parse(req.files.s_image.name).ext.toLowerCase()))))
            {
                req.files.s_image.name=`${item.title}_${req.params.id}_s${path.parse(req.files.s_image.name).ext}`;
                item.s_image= req.files.s_image.name;
                
                if (req.files.l_image) {
                    if (!(allowedExt.every(e=>e!=(path.parse(req.files.l_image.name).ext.toLowerCase()))))
                    {
                        req.files.l_image.name=`${item.title}_${req.params.id}_l${path.parse(req.files.l_image.name).ext}`;
                        item.l_image= req.files.l_image.name;
            
                        req.files.s_image.mv(`public/images/posters/${req.files.s_image.name}`)
                        .then(()=> {
                            req.files.l_image.mv(`public/images/posters/${req.files.l_image.name}`)
                            .then(()=> {
                                itemModel.updateOne({_id:req.params.id},item)
                                .then(()=>{
                                    res.redirect("/list");
                                })
                            })
                        })
                        .catch(err=>console.log(`Error happened when updating data from the database: ${err}`));   
                    }
                    else {
                        err = "Only jpgs, gifs, pngs can be uploaded!";
                        res.render("Item/itemEditForm", {
                            titlePage: "Edit Item Page",
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
                }
                else {
                    req.files.s_image.mv(`public/images/posters/${req.files.s_image.name}`)
                    .then(()=> {
                        itemModel.updateOne({_id:req.params.id},item)
                        .then(()=>{
                            res.redirect("/list");
                        })
                    })
                .catch(err=>console.log(`Error happened when updating data from the database: ${err}`));   
                }
            }
            else {
                err = "Only jpgs, gifs, pngs can be uploaded!";
                res.render("Item/itemEditForm", {
                    titlePage: "Edit Item Page",
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
        }
        else {
            if (req.files.l_image) {
                if (!(allowedExt.every(e=>e!=(path.parse(req.files.l_image.name).ext.toLowerCase()))))
                {
                    req.files.l_image.name=`${item.title}_${req.params.id}_l${path.parse(req.files.l_image.name).ext}`;
                    item.l_image= req.files.l_image.name;
    
                    req.files.l_image.mv(`public/images/posters/${req.files.l_image.name}`)
                    .then(()=> {
                        itemModel.updateOne({_id:req.params.id},item)
                        .then(()=>{
                            res.redirect("/list");
                        })
                    })
                .catch(err=>console.log(`Error happened when updating data from the database: ${err}`));   
                }
                else {
                    err = "Only jpgs, gifs, pngs can be uploaded!";
                    res.render("Item/itemEditForm", {
                        titlePage: "Edit Item Page",
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
            }
  
        }
    }
    else {
        itemModel.updateOne({_id:req.params.id},item)
        .then(()=>{
            res.redirect("/list");
        })
    }
 
})

//router to delete user
router.delete("/delete/:id",isAuthenticated,(req,res)=>{
        itemModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/list");
    })
    .catch(err=>console.log(`Error happened when deleting data from the database: ${err}`));
});



/**************** CART **********************/

router.get("/cart",isAuthenticated,(req,res)=>{
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    res.render("User/cart",{
        titlePage : "Cart",
        items: cart.items,
        qty: cart.totalQty,
        total: cart.totalPrice.toFixed(2),
        session: req.session
    });
})

router.get("/addToCart/rent/:id",isAuthenticated,itemProcess.getAnItem,(req,res)=>{
    req.item.price = req.item.rent;
    req.item.type = "Rent";
    //console.log(req.item);
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.add(req.item);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect(`/items/${req.item.id}`);
})

router.get("/addToCart/buy/:id",isAuthenticated,itemProcess.getAnItem,(req,res)=>{
    req.item.price = req.item.purchase;
    req.item.type = "Purchase";
    //console.log(req.item);
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.add(req.item);
    req.session.cart = cart;
    //console.log(req.session.cart);
    res.redirect(`/items/${req.item.id}`);
})

router.get("/cart/delete/:id",isAuthenticated,itemProcess.getAnItem,(req,res)=>{
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    //console.log ("Item need to remove:",req.item );
    cart.remove(req.item);
    req.session.cart = cart;
    //console.log(req.session.cart);
    res.render("User/cart",{
        titlePage : "Cart",
        items: cart.items,
        qty: cart.totalQty.toFixed(2),
        total: cart.totalPrice
    });
})


router.get("/checkout",isAuthenticated,(req,res,next)=> {
    const emailContent = `
    <table border="1">
        <thead>
            <tr>
                <th scope="col">ITEM</th>
                <th scope="col">TYPE</th>
                <th scope="col">PRICE</th>
            </tr>
        </thead>
        <tbody>
            ${req.session.cart.items.map(item=> 
                    `<tr>
                        <th scope="col"><img width="80" src="/images/posters/${item.s_image}" alt=""></a></th>
                        <th scope="col">${item.type}</th>
                    <th scope="col">${item.price}</th>                 
                    </tr>`           
            )}
            <tr>
                <td colspan="3">
                    Total Quantity: ${req.session.cart.totalQty}
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    Total Amount: ${req.session.cart.totalPrice}
                </td>
            </tr>

        </tbody>
    </table>
    `

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: req.session.userInfo.email,
    from: 'tta6@myseneca.ca', 
    subject: 'Order Confirmation',
    text: `Thanh you for your order!`,
    html: emailContent,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
    delete req.session.cart;
    res.redirect("/");
});


router.post("/items/search", 
    isAuthenticated,         
    itemProcess.getAllItems, 
    itemProcess.getAllMoviesFeatured,
    itemProcess.getAllShowsFeatured,
    itemProcess.getAllMovies,
    itemProcess.getAllShows,
    (req,res,next)=> {
        //console.log("Req:", req.body['items-search']);
        switch (req.body['items-search']) {
            case 'all':
                res.render("Item/itemDashboard", {
                    items: req.allItems
                });
                break;
            case 'movies':
                res.render("Item/itemDashboard", {
                    items: req.movies
                });
                break;
            case 'fmovies':
                res.render("Item/itemDashboard", {
                    items: req.fmovies
                });
                break;
            case 'shows':
                res.render("Item/itemDashboard", {
                    items: req.shows
                });
                break;
            case 'fshows':
                res.render("Item/itemDashboard", {
                    items: req.fshows
                });
                break;           
            default:
                console.log(`Wrong Input for items-search`);
        }

})



module.exports=router;