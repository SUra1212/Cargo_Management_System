const { request } = require('express');
const express = require('express');
const Ledgers = require('../models/Ledger');
const router = express.Router();


router.post('/ledger/save',(req,res)=>{

    let newLedger = new Ledgers(req.body);

    newLedger.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Record saved successfully"
        });
    });
});


router.get('/ledgers',(req,res)=>{
    Ledgers.find().exec((err,ledgers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingLedger:ledgers
        });
    });
});

router.put('/ledger/update/:id',(req,res)=>{
    Ledgers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,ledger)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


router.delete('/ledger/delete/:id',(req,res)=>{
    Ledgers.findByIdAndRemove(req.params.id).exec((err,deletedLedger)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedLedger
        });
    });
});


router.get("/ledger/:id",(req,res) => {
    let ledgerID = req.params.id;

    Ledgers.findById(ledgerID,(err,ledger) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            ledger
        });
    });
});


module.exports = router;