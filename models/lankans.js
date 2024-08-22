const mongoose = require('mongoose');

const lankaSchema = new mongoose.Schema({
    senderName:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    receiverName:{
        type:String,
        required:true
    },
    receiverNIC:{
        type:String,
        required:true
    },
    serialNumber:{
        type:String,
        required:true
    },
    warehouseType:{
        type:String,
        required:true
    },
    totItems:{
        type:String,
        required:true
    },
    gWeight:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    description:{
        type:String,
    }


});

module.exports = mongoose.model('warehousing', lankaSchema)