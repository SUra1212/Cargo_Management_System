const { request } = require('express');
const express = require('express');
const Incomes = require('../models/Incomes');

const router = express.Router();

//save incomes
router.post('/income/save',(req,res)=>{

    let newIncome = new Incomes(req.body);

    newIncome.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Income saved successfully"
        });
    });
});

//get income
router.get('/incomes',(req,res)=>{
    Incomes.find().exec((err,incomes)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingIncome:incomes
        });
    });
});

//update incomes
router.put('/income/update/:id',(req,res)=>{
    Incomes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,income)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete income
router.delete('/income/delete/:id',(req,res)=>{
    Incomes.findByIdAndRemove(req.params.id).exec((err,deletedIncome)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedIncome
        });
    });
});

//get a specific income detail

router.get("/income/:id",(req,res) => {
    let incomeID = req.params.id;

    Incomes.findById(incomeID,(err,income) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            income
        });
    });
});

module.exports = router;