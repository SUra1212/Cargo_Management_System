const express = require('express');
const KoreanPayments = require('../models/koreanPayments');

const router = express.Router();

//save posts
router.post('/koreanPayment/save',(req,res)=>{

    let newPost = new KoreanPayments(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Posts Saved Successfully"
        });
    });

});

//get posts
router.get('/koreanPayment',(req,res) =>{
    KoreanPayments.find().exec((err,posts) =>{
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
router.get("/koreanPayment/:id",(req,res) =>{

    let postId = req.params.id;
    
    KoreanPayments.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });

});

//update posts

router.put('/koreanPayment/update/:id',(req,res)=>{
    KoreanPayments.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/koreanPayment/delete/:id',(req,res) =>{
    KoreanPayments.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;

