const { request } = require('express');
const express = require('express');
const Salaries = require('../models/Salary');

const router = express.Router();

//save salary
router.post('/salary/save',(req,res)=>{

    let newSalary = new Salaries(req.body);

    newSalary.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Salary saved successfully"
        });
    });
});

//get salary
router.get('/salaries',(req,res)=>{
    Salaries.find().exec((err,salaries)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSalary:salaries
        });
    });
});

//update salary
router.put('/salary/update/:id',(req,res)=>{
    Salaries.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,salary)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete salary
router.delete('/salary/delete/:id',(req,res)=>{
    Salaries.findByIdAndRemove(req.params.id).exec((err,deletedSalary)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedSalary
        });
    });
});

//get a specific salary detail

router.get("/salary/:id",(req,res) => {
    let salaryID = req.params.id;

    Salaries.findById(salaryID,(err,salary) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            salary
        });
    });
});

module.exports = router;