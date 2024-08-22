const express = require('express');
const Refunds = require('../models/refunds');


const router = express.Router();

//save Refunds

router.post('/refund/save',(req,res)=>{
    let newRefund = new Refunds(req.body);

    newRefund.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Refunds saved successfully"

        });
    });

});

//get Refunds
router.get('/refunds',(req,res)=>{
    Refunds.find().exec((err,refunds) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:refunds
        });
    });
});

//get a specific Refund

router.get("/refund/:id",(req,res)=>{

    let refundId = req.params.id;

    Refunds.findById(refundId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            post

        });
    });
});

//update Refunds
router.put('/refund/update/:id' ,(req,res)=>{
    Refunds.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{

            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete Refunds

router.delete('/refund/delete/:id',(req,res) =>{
    Refunds.findByIdAndRemove(req.params.id).exec((err,deletedRefund)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete succesful",deletedRefund
        });
    });
});

module.exports=router;

