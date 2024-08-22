const { request } = require('express');
const express = require('express');
const Employees = require('../models/Employees');

const router = express.Router();

//save employee
router.post('/employee/save',(req,res)=>{

    let newEmployee = new Employees(req.body);

    newEmployee.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee added successfully"
        });
    });
});

//get employee
router.get('/employees',(req,res)=>{
    Employees.find().exec((err,employees)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployee:employees
        });
    });
});

//update employees
router.put('/employee/update/:id',(req,res)=>{
    Employees.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,employee)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete employee
router.delete('/employee/delete/:id',(req,res)=>{
    Employees.findByIdAndRemove(req.params.id).exec((err,deletedEmployee)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedEmployee
        });
    });
});

//get a specific employee detail

router.get("/employee/:id",(req,res) => {
    let employeeID = req.params.id;

    Employees.findById(employeeID,(err,employee) => {
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            employee
        });
    });
});

module.exports = router;