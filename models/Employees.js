const mongoose = require ('mongoose'); //import mongoose 

//create schema and income attributes inside schema
const employeeSchema = new mongoose.Schema({
//mongoDB is auto generating an object ID

    EmpID : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    }, 
     
    firstName : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    },

    lastName : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    },

    nic : {
        type : String,
        required : true
    },

    phone : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
    },

    department : {
        type : String,
        required: true
    },

    position : {
        type : String,
        required: true
    },

    empStatus : {
        type : String,
        required: true
    }

})

//when go to the database --> Income becomes incomes
//export module
module.exports = mongoose.model("Employee", employeeSchema);
