const mongoose = require ('mongoose'); //import mongoose 

//create schema and income attributes inside schema
const incomeSchema = new mongoose.Schema({
//mongoDB is auto generating an object ID
    description : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    },

    date : {
        type : String,
        required : true
    },

    account : {
        type : String,
        required : true
    },

    amount : {
        type : String,
        required: true
    }

})

//when go to the database --> Income becomes incomes
//export module
module.exports = mongoose.model("Income", incomeSchema);
