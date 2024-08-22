import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class CreateSL extends Component {

    constructor(props){
        super(props);
        this.state={
            senderName:"",
            phoneNo:"",
            receiverName:"",
            receiverNIC:"",
            serialNumber:"",
            warehouseType:"",
            totItems:"",
            gWeight:"",
            date:"",
            time:"",
            description:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();
    
        const {senderName,phoneNo,receiverName,receiverNIC,serialNumber,warehouseType,totItems,gWeight,date,time,description} = this.state;
    
        const data = {
    
            senderName:senderName,
            phoneNo:phoneNo,
            receiverName:receiverName,
            receiverNIC:receiverNIC,
            serialNumber:serialNumber,
            warehouseType:warehouseType,
            totItems:totItems,
            gWeight:gWeight,
            date:date,
            time:time,
            description:description
    
        }
        console.log(data)
    
        this.setState(
            {
                senderName:"Umaya Ekanayake",
                phoneNo:"0765543108",
                receiverName:"Anuruddha Ekanayake",
                receiverNIC:"978654342V",
                serialNumber:"AB0003",
                warehouseType:"Other", 
                totItems:"1",
                gWeight:"145g",
                date:"2021-09-15",
                time:"04:45",
                description:"Samsung Galaxy A52s 5G"  
    
            }
        )
    
    }
    


    onSubmit = (e) =>{

        e.preventDefault();

        const {senderName,phoneNo,receiverName,receiverNIC,serialNumber,warehouseType,totItems,gWeight,date,time,description} = this.state;
        
        const data ={
            senderName:senderName,
            phoneNo:phoneNo,
            receiverName:receiverName,
            receiverNIC:receiverNIC,
            serialNumber:serialNumber,
            warehouseType:warehouseType,
            totItems:totItems,
            gWeight:gWeight,
            date:date,
            time:time,
            description:description

        }

        console.log(data)

        const ph = /^[0-9\b]+$/;


if((!ph.test(String(phoneNo))) || (phoneNo.length != 10)) {
    swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
} else if (description.length < 4)  {
    swal(" invalid Descriptin !", "length should be greater than 3", "error");
} else if (senderName.length === 0 || phoneNo.length === 0 || receiverName.length === 0 ||
    receiverNIC.length === 0 || serialNumber.length === 0 || totItems.length === 0 || 
    gWeight.length === 0 || date.length === 0 || time.length === 0 || description.length === 0) {
    swal("Please fill all the details")
}else {

        axios.post("/lankan/save", data).then((res) =>{
            let path = "/HSL";
            if(res.data.success){
                alert("Data Saved Successfully")
                this.props.history.push(path);
               this.setState(
                   {
                    senderName:"",
                    phoneNo:"",
                    receiverName:"",
                    receiverNIC:"",
                    serialNumber:"",
                    warehouseType:"", 
                    totItems:"",
                    gWeight:"",
                    date:"",
                    time:"",
                    description:""  
                   }
               ) 
            }
        })
        

    
    }


    }


    render(){
        return (

            <div className="Kwarehouse" style={{zIndex:98}} >
                
            <div style={{marginBlockStart:'9%',marginLeft:'23%'}}>
            <MDBCard className="opacity-90" style={{ maxWidth:'50rem'}}>
      <MDBCardBody>
         
          <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Create New Warehousing Form</span></h2></center></MDBCardTitle>
        <br/>
        <MDBCardText>
        <div >
                          
               <form className="need-validation" noValidate>
               <h4 className="text-dark">Information</h4>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Sender's name</lable>
                       <input type="text"
                       className="form-control"
                       name="senderName"
                       placeholder="Enter Sender's name"
                       value={this.state.senderName}
                       onChange={this.handleInputChange}/>
  
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Phone number</lable>
                       <input type="text"
                       className="form-control"
                       name="phoneNo"
                       placeholder="Enter Phone Number"
                       value={this.state.phoneNo}
                       onChange={this.handleInputChange}/>
                       
  
                   </div>
  
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Receiver's name</lable>
                       <input type="text"
                       className="form-control"
                       name="receiverName"
                       placeholder="Enter Receiver's name"
                       value={this.state.receiverName}
                       onChange={this.handleInputChange}/>
  
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Receiver's NIC</lable>
                       <input type="text"
                       className="form-control"
                       name="receiverNIC"
                       placeholder="Enter Receiver's NIC"
                       value={this.state.receiverNIC}
                       onChange={this.handleInputChange}/>
  
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Serial Number of the Cargo</lable>
                       <input type="text"
                       className="form-control"
                       name="serialNumber"
                       placeholder="Enter Serial number"
                       value={this.state.serialNumber}
                       onChange={this.handleInputChange}/>
  
                   </div>

                   <h4 className="text-dark">Cargo Arrival Details</h4>
                   <div className="row">
                    <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Warehouse Type</lable>
                       <select name="warehouseType" onChange={this.handleInputChange}  value={this.state.warehouseType} defaultValue="Select type" class="form-select">
                           <option defaultValue>--Select Type--</option>
                           <option >Open Space</option>
                           <option >Warm</option>
                           <option >Cold</option>
                           <option >Other</option>
                           </select>     
                   </div>
                   </div>
                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Number of Items</lable>
                       <input type="number"
                       className="form-control"
                       name="totItems"
                       placeholder="Enter number of items"
                       value={this.state.totItems}
                       onChange={this.handleInputChange}/>
  
                   </div>
                   </div>
                  
                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Gross weight</lable>
                       <input type="text"
                       className="form-control"
                       name="gWeight"
                       placeholder="Enter gross weight"
                       value={this.state.gWeight}
                       onChange={this.handleInputChange}/>
  
                   </div>
                   </div>
                   </div>
  
                   <div className="row">
                       <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Date</lable>
                       <input type="date"
                       className="form-control"
                       name="date"
                       placeholder="Enter date"
                       value={this.state.date}
                       onChange={this.handleInputChange}/>
  
                   </div>
                   </div>
                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Time</lable>
                       <input type="time"
                       className="form-control"
                       name="time"
                       placeholder="Enter time"
                       value={this.state.time}
                       onChange={this.handleInputChange}/>
  
                   </div>
                   </div>
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Description</lable>
                       <input type="text"
                       className="form-control"
                       name="description"
                       placeholder="Enter description"
                       value={this.state.description}
                       onChange={this.handleInputChange}/>
  
                   </div>
  
               </form>
               <br></br>
         <center>
         <a className="btn btn-warning btn-lg text-dark" type="submit"  style={{marginTop:'15px'}} onClick={this.onSubmit}>
                   <i className="far fa-check-square" ></i>
                   &nbsp; save
                   </a>
                   &nbsp;
                   &nbsp;
                   <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                   <i class='fas fa-bookmark'></i>
                                &nbsp; <b>Demo</b>
                            </button> 
               </center>
       <br></br>
  
  
             </div> 
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>
    
            </div>
            <br/>
           <br/>
           <br/>
           <br/>
           
            </div>
            
        
        )
    }
}