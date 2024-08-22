const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    d_Id:{
        type:String,
        required:true
    },
    driverName:{
        type:String,
        required:true
    },
    driverPhone:{
        type:String,
        required:true
    },
    driverAddress:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('DriverDetails',postSchema);