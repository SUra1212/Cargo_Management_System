const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    saddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('customer',customerSchema);