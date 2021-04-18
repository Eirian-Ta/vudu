//import mongoose from 'mongoose';
// const mongoose = require('mongoose');
// const Schema  = mongoose.Schema;
// const itemSchema = require("./Item.js");

// const cartSchema = new Schema({
//     items: [itemSchema],
//     subTotal:{
//         type: Number,
//         default:0
//     }
// });

// //Model allows performing CRUD operations on a given collection
// const cartModel = mongoose.model('Cart', cartSchema);

//  module.exports = cartModel;

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || [];
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.add = (item) => {
        this.items.push(item);
        this.totalQty++;
        this.totalPrice+=item.price;
    };
    this.remove = (item)=> {
        const itemToRemove = this.items.find(i=> i.id==item.id);
        this.items=this.items.filter(i=> {
            return i.id!=item.id;
        })
        this.totalQty--;
        this.totalPrice-=itemToRemove.price;
    }
}