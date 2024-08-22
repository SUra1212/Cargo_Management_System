const express = require('express');
const Feedbacks = require('../models/feedbacks');



const router = express.Router();



//save feedbacks
router.post('/feedback/save',(req,res)=>{
    let newPost = new Feedbacks(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Feedbacks saved successfully"
        });
    });
});


//get feedbacks
router.get('/feedbacks',(req,res)=>{
    Feedbacks.find().exec((err,feedbacks)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedbacks:feedbacks
        });
    });
});

//get a specific feedback
router.get("/feedback/:id",(req,res) =>{
    let postId=req.params.id;

    Feedbacks.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
})

//update feedbacks
router.put('/feedback/update/:id',(req,res)=>{
    Feedbacks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:'Updated Successfully'
            });
        }
    );
});

//Delete feedbacks

router.delete('/feedback/delete/:id',(req,res) =>{
    Feedbacks.findByIdAndRemove(req.params.id).exec((err,deleteFeedback) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deleteFeedback
        });
    });
});

module.exports = router;