const mongoose = require('mongoose');

const koreanPaymentSchema = new mongoose.Schema({
    
    serialNumber1:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true 
    },
    Email:{
        type:String,
        required:true
    },
    pNo1:{
        type:String,
        required:true
    },
    pType1:{
        type:String,
        required:true
    },
    pWeight1:{
        type:String,
        required:true
    },
    pShippingCost1:{
        type:String,
        required:true
    },
    deliveryCharges:{
        type:String,
        required:true
    },
    totalShippingCost:{
        type:String,
        required:true
    },
    Total:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('PaymentDetail',koreanPaymentSchema);