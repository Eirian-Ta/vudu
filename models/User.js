//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const bcrypt=require("bcryptjs")

const userSchema = new Schema({
    firstName:
    {
        type: String,
        required:true
    },

    lastName:
    {
        type: String,
        required:true
    },
    email:
    {
        type: String,
        required:true
    },
    password:
    {
        type:String,
        default:"Open"
    },
    dateCreated:
    {
        type:Date,
        default:Date.now()
    },
    type:
    {
        type: String,
        default:"user"
    }

});

userSchema.pre("save",function(next)
{
    bcrypt.genSalt(10)
    .then((salt)=>{
        bcrypt.hash(this.password,salt)
        .then((encryptPassword)=>{
            this.password = encryptPassword;
            next();
        })
        .catch(err=>console.log(`Error occured when hashing ${err}`))
    })
    .catch(err=>console.log(`Error occured when salting ${err}`));
})

//Model allows performing CRUD operations on a given collection
const userModel = mongoose.model('User', userSchema);

 module.exports = userModel;