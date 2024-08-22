const mongoose = require ('mongoose'); //import mongoose 

//create schema and outcome attributes inside schema
const expenseSchema = new mongoose.Schema({
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

//when go to the database --> Expense becomes expenses
//export module
module.exports = mongoose.model("Expense", expenseSchema);