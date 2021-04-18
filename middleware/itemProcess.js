const express = require('express')
const itemModel = require("../models/Item.js");

exports.getAllItems = (req,res,next)=> {
    itemModel.find()
    .then((items)=> {
        console.log("**************************************** SIZE:",items.length);
        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.allItems= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};



exports.getAllMovies = (req,res,next)=> {
    itemModel.find({}).where("rating").regex("^(?!TV).*$")
    .then((items)=> {
        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.movies= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};

exports.getAllShows = (req,res,next)=> {
    itemModel.find({}).where("rating").regex("^TV.*$")
    .then((items)=> {
        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.shows= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};

exports.getAllMoviesFeatured = (req,res,next)=> {
    itemModel.find({featured:true}).where("rating").regex("^(?!TV).*$")
    .then((items)=> {

        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.fmovies= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};

exports.getAllShowsFeatured = (req,res,next)=> {
    itemModel.find({featured:true}).where("rating").regex("^TV.*$")
    .then((items)=> {
        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.fshows= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};

exports.getAnItem = (req,res,next)=> {
    itemModel.findOne({_id:req.params.id})
    .then((item)=> {
        req.item=
        {
            id: item._id,
            title: item.title,
            synopsis: item.synopsis,
            s_image: item.s_image,
            l_image: item.l_image,
            stars: item.stars,
            rent: item.rent,
            purchase: item.purchase,
            featured: item.featured,
            gernes: item.gernes,
            date: item.date,
            length: item.length,
            rating: item.rating,
            studio: item.studio,
            language: item.language,
            score: item.score,
            UHD: item.UHD,
            HDX: item.HDX,
            SD: item.SD,
            CC: item.CC
        }
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};

exports.getSimilarGerneItems = (req,res,next)=> {
    //console.log("Looking for gerne:", req.item);
    itemModel.find({gernes:{"$in":req.item.gernes}})
    .then((items)=> {
        const filteredItems = items.map(item=>{
            return {
                id: item._id,
                title: item.title,
                synopsis: item.synopsis,
                s_image: item.s_image,
                l_image: item.l_image,
                stars: item.stars,
                rent: item.rent,
                purchase: item.purchase,
                featured: item.featured,
                gernes: item.gernes,
                date: item.date,
                length: item.length,
                rating: item.rating,
                studio: item.studio,
                language: item.language,
                score: item.score,
                UHD: item.UHD,
                HDX: item.HDX,
                SD: item.SD,
                CC: item.CC
            }
        });
        req.relatedItems= filteredItems;
        next();
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`)) ;
};