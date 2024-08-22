const mongoose = require('mongoose');

const receiverSchema = new mongoose.Schema({

    cfname:{
        type:String,
        required:true
    },
    clname:{
        type:String,
        required:true
    },
    cemail:{
        type:String,
        required:true
    },
    cnic:{
        type:String,
        required:true
    },
    cphone:{
        type:String,
        required:true
    },
    rfname:{
        type:String,
        required:true
    },
    rlname:{
        type:String,
        required:true
    },
    remail:{
        type:String,
        required:true
    },
    rnic:{
        type:String,
        required:true
    },
    rphone:{
        type:String,
        required:true
    },
    raddress:{
        type:String,
        required:true
    },
    rsaddress:{
        type:String,
        required:true
    },
    rcity:{
        type:String,
        required:true
    },
    rprovince:{
        type:String,
        required:true
    },
    rzip:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('receiver',receiverSchema);