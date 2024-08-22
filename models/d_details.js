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
    dStatus:{
        type:String,
        required:true
    },
    senderName:{
        type:String,
        required:true
    },
    receiverName:{
        type:String,
        required:true
    },
    receiverAddress:{
        type:String,
        required:true
    },
    receiverPhone:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('DeliveryDetails',postSchema);