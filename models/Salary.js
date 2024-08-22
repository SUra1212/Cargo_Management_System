const mongoose = require ('mongoose'); //import mongoose 

//create schema and outcome attributes inside schema
const salarySchema = new mongoose.Schema({
//mongoDB is auto generating an object ID
    empName : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    },

    empID : {
        type : String,
        required : true
    },

    month : {
        type : String,
        required : true
    },

    salary : {
        type : String,
        required: true
    },

    hours : {
        type : String
    },

    amount : {
        type : String,
        required: true
    }

})

//when go to the database --> Expense becomes expenses
//export module
module.exports = mongoose.model("Salary", salarySchema);
