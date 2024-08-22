const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
  CustomerID:{
      type:String,
      required:true
  },
  PhoneNumber:{
      type:String,
      required:true
  },
  CargoReceivedDate:{
      type:String,
      required:true
  },
  RefundGoods:{
      type:String,
      required:true
  },
  ReasonforRefund:{
       type:String,
       required:true
  },

});

module.exports = mongoose.model('refunds',refundSchema);