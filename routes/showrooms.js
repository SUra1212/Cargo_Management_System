const express = require('express')
const Showrooms =require('../models/showrooms');

const router = express.Router();

//save posts
router.post('/showroom/save',(req,res)=>{

    let newPost = new Showrooms(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});


//get posts

router.get('/showroom',(req,res) =>{
    Showrooms.find().exec((err,posts) =>{
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

router.get("/showroom/:id",(req,res) =>{
    let postId = req.params.id;
    Showrooms.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({succcess:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts

router.put('/showroom/update/:id',(req,res)=>{
    Showrooms.findByIdAndUpdate(
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


//Delete posts

router.delete('/showroom/delete/:id',(req,res) =>{
    Showrooms.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletedPost
        });
    });
});


module.exports = router;


