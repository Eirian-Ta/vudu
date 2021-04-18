//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const itemSchema = new Schema({
    title:
    {
        type: String,
        required:true
    },

    synopsis:
    {
        type: String,
        required:true
    },
    s_image:
    {
        type:String,
    },
    l_image:
    {
        type: String,
    },
    stars:
    {
        type:Number,
        default:5
    },
    rent:
    {
        type:Number,
        required:true
    },
    purchase:
    {
        type:Number,
        required:true
    },
    featured:
    {
        type:Boolean,
        default:false
    },
    gernes:
    {
        type: Array,
        required:true
    },
    date:
    {
        type:Number,
        required:true
    },
    length:
    {
        type:String,
        required:true
    },
    rating:
    {
        type:String,
        required:true
    },
    studio:
    {
        type:String,
        required:true
    },
    language:
    {
        type:String,
        required:true
    },
    score:
    {
        type:Number,
        default: false
    },
    UHD:
    {
        type:String,
    },
    HDX:
    {
        type:String,
    },
    SD:
    {
        type:String,
    },
    CC:
    {
        type:String,
    },
    dateCreated:
    {
        type:Date,
        default:Date.now()
    }

});

//Model allows performing CRUD operations on a given collection
const itemModel = mongoose.model('Item', itemSchema);

module.exports = itemModel;