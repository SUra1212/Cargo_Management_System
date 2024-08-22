const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
     brand:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    returnoption:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('ShowRooms',postSchema);
