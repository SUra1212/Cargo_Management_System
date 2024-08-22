const express = require('express');
const Receivers = require('../models/receivers');

const router = express.Router();

//save receiver

router.post('/receiver/save',(req,res)=>{

    let newPost = new Receivers(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Receiver details saved successfully"
        });
    });
});

//get receiver

router.get('/receiver',(req,res) =>{
    Receivers.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific receiver

router.get("/receiver/:id",(req,res) =>{

    let postId = req.params.id;

    Receivers.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });


});

//update receivers

router.put('/receiver/update/:id',(req,res)=>{
    Receivers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete receiver

router.delete('/receiver/delete/:id',(req,res) =>{
    Receivers.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;