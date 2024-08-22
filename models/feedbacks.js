const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    Category:{
        type : String,
        required:true
    },
    Rate:{
        type :String,
        required:true
    },
    Email:{
        type : String,
        required:true
    },
    Feedback:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Feedbacks',feedbackSchema);
