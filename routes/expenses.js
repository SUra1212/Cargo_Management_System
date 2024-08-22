const { request } = require('express');
const express = require('express');
const Expenses = require('../models/Expenses');

const router = express.Router();

//save expense
router.post('/expense/save',(req,res)=>{

    let newExpense = new Expenses(req.body);

    newExpense.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Expense saved successfully"
        });
    });
});

//get expense
router.get('/expenses',(req,res)=>{
    Expenses.find().exec((err,expenses)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingExpense:expenses
        });
    });
});

//update expense
router.put('/expense/update/:id',(req,res)=>{
    Expenses.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,expense)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete expense
router.delete('/expense/delete/:id',(req,res)=>{
    Expenses.findByIdAndRemove(req.params.id).exec((err,deletedExpense)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedExpense
        });
    });
});

//get a specific expense detail

router.get("/expense/:id",(req,res) => {
    let expenseID = req.params.id;

    Expenses.findById(expenseID,(err,expense) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            expense
        });
    });
});

module.exports = router;