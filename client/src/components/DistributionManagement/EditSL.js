import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'
 
export default class EditSL extends Component {

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

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;
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
            swal(" invalid Description !", "length should be greater than 3", "error");
        } else if (senderName.length === 0 || phoneNo.length === 0 || receiverName.length === 0 ||
            receiverNIC.length === 0 || serialNumber.length === 0 || totItems.length === 0 || 
            gWeight.length === 0 || date.length === 0 || time.length === 0 || description.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.put(`/lankan/update/${id}`, data).then((res) =>{
            let path = "/HSL";
            if(res.data.success){
                alert("Cargo Details Updated Successfully")
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
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/lankan/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    senderName:res.data.post.senderName,
                    phoneNo:res.data.post.phoneNo,
                    receiverName:res.data.post.receiverName,
                    receiverNIC:res.data.post.receiverNIC,
                    serialNumber:res.data.post.serialNumber,
                    warehouseType:res.data.post.warehouseType,
                    totItems:res.data.post.totItems,
                    gWeight:res.data.post.gWeight,
                    date:res.data.post.date,
                    time:res.data.post.time,
                    description:res.data.post.description

                });

               console.log(this.state.post); 
            }

        });

    }


    render(){
        return (

            <div className="Kwarehouse" style={{zIndex:98}} >
                
            <div style={{marginBlockStart:'9%',marginLeft:'23%'}}>
            <MDBCard className="opacity-90" style={{ maxWidth:'50rem'}}>
      <MDBCardBody>
         
          <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Edit Warehousing form</span></h2></center></MDBCardTitle>
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

                   <h4 className="text-dark">Cargo arrival details</h4>
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
                   &nbsp; Update
                   </a>
                   &nbsp;
                   &nbsp;
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