const express = require('express');
const Driver = require('../models/driver');

const router = express.Router();

//Save Psts
router.post('/driver/save',(req,res)=>{
    let newPost = new Driver(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details saved successfully"
        });
    });
});

//get post

router.get('/driver',(req,res)=>{
    Driver.find().exec((err,posts) =>{
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

//get a specific post
router.get("/driver/:id",(req,res)=>{
    let postId = req.params.id;

    Driver.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,eer});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts

router.put('/driver/update/:id',(req,res)=>{
    Driver.findByIdAndUpdate(
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


//delete post

router.delete('/driver/delete/:id',(req,res)=>{
    Driver.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });

    });
});

module.exports = router;