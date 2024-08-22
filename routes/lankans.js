const express = require('express');
const Lankans = require('../models/lankans');

const router = express.Router();


//backend APIs
//save cargo

router.post('/lankan/save',(req,res)=>{

    let newPost = new Lankans(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Data saved successfully"
        });
    });
});

//get cargo

router.get('/lankan',(req,res) =>{
    Lankans.find().exec((err,posts) =>{
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

router.get("/lankan/:id",(req,res) =>{

    let postId = req.params.id;

    Lankans.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });

});


//update cargo

router.put('/lankan/update/:id',(req,res)=>{
    Lankans.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update successfully"
            });
        }
    );
});


//delete cargo

router.delete('/lankan/delete/:id', (req,res) =>{
    Lankans.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletePost
        });

    });
});

module.exports = router;