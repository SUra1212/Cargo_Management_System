const express = require('express');
const D_Details = require('../models/d_details');

const router = express.Router();

//Save Posts
router.post('/d_detail/save',(req,res)=>{
    let newPost = new D_Details(req.body);

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

router.get('/d_detail',(req,res)=>{
    D_Details.find().exec((err,posts) =>{
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
router.get("/d_detail/:id",(req,res)=>{
    let postId = req.params.id;

    D_Details.findById(postId,(err,post)=>{
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

router.put('/d_detail/update/:id',(req,res)=>{
    D_Details.findByIdAndUpdate(
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

router.delete('/d_detail/delete/:id',(req,res)=>{
    D_Details.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });

    });
});

module.exports = router;