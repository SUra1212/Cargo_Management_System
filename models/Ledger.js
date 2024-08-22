const mongoose = require ('mongoose'); //import mongoose 


const ledgerSchema = new mongoose.Schema({

    month : {
        type : String
    },

    totalIncomes : {
        type : String
    },

    totalOutcomes : {
        type : String
    },

    balance : {
        type : String
    }

})

//when go to the database --> Income becomes incomes
//export module
module.exports = mongoose.model("Ledger", ledgerSchema);
