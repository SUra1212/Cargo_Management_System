const express = require('express');
const Dlankans = require('../models/dlankans');

const router = express.Router();


//backend APIs
//save cargo

router.post('/dlankan/save',(req,res)=>{

    let newPost = new Dlankans(req.body);

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

router.get('/dlankan',(req,res) =>{
    Dlankans.find().exec((err,posts) =>{
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

router.get("/dlankan/:id",(req,res) =>{

    let postId = req.params.id;

    Dlankans.findById(postId,(err,post) =>{
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

router.put('/dlankan/update/:id',(req,res)=>{
    Dlankans.findByIdAndUpdate(
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

router.delete('/dlankan/delete/:id', (req,res) =>{
    Dlankans.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletePost
        });

    });
});

module.exports = router;