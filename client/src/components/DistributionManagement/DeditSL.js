import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

const amountRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
};
 
export default class DeditSL extends Component {

    constructor(props){
        super(props);
        this.state={
            Sname:"",
            pno:"",
            Rname:"",
            RNIC:"",
            Radd:"",
            city:"", 
            district:"",
            province:"",
            sno:"",
            grossW:"",
            totalItems:"",
            tax:"",
            custom:"",
            delivery:"",
            fullPay:"",
            status:"",
            ddate:"",
            formErrors: {
                tax: "",
                custom: "",
                delivery: ""
            }

        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "tax":
                formErrors.tax = amountRegex.test(value) ? ""
                    : "Tax must be a decimal value";
                break;
            case "custom":
                formErrors.custom = amountRegex.test(value) ? ""
                    : "Custome charge must be a decimal value";
                break;
            case "delivery":
                formErrors.delivery = amountRegex.test(value) ? ""
                    : "Delivery charge must be a decimal value";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    calcTotal = (e) => {
        e.preventDefault();

        const {tax,custom,delivery,fullPay} = this.state;
        this.setState({fullPay: parseInt(this.state.tax) + parseInt(this.state.custom) + parseInt(this.state.delivery) });
    }

    onSubmit = (e) =>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        if (formValid(this.state.formErrors)) {

        const {Sname,pno,Rname,RNIC,Radd,city,district,province,sno,grossW,totalItems,tax,custom,delivery,fullPay,status,ddate} = this.state;
        
        const data ={
            Sname:Sname,
            pno:pno,
            Rname:Rname,
            RNIC:RNIC,
            Radd:Radd,
            city:city,
            district:district,
            province:province,
            sno:sno,
            grossW:grossW,
            totalItems:totalItems,
            tax:tax,
            custom:custom,
            delivery:delivery,
            fullPay:fullPay,
            status:status,
            ddate:ddate

        }

        console.log(data)

        const ph = /^[0-9\b]+$/;


        if((!ph.test(String(pno))) || (pno.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        } else if (Sname.length === 0 || pno.length === 0 || Rname.length === 0 ||
            RNIC.length === 0 || Radd.length === 0 || sno.length === 0 ||
            grossW.length === 0 || totalItems.length === 0 || tax.length === 0 ||
            custom.length === 0 || delivery.length === 0 || ddate.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.put(`/dlankan/update/${id}`, data).then((res) =>{
            let path = "/DH";
            if(res.data.success){
                alert("Cargo Details Updated Successfully")
                this.props.history.push(path);
               this.setState(
                   {
                    Sname:"",
                    pno:"",
                    Rname:"",
                    RNIC:"",
                    Radd:"",
                    city:"", 
                    district:"",
                    province:"",
                    sno:"",
                    grossW:"",
                    totalItems:"",
                    tax:"",
                    custom:"",
                    delivery:"",
                    fullPay:"",
                    status:"",
                    ddate:""
                   }
               ) 
            }
        })
    
    }
    }
}
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/dlankan/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Sname:res.data.post.Sname,
                    pno:res.data.post.pno,
                    Rname:res.data.post.Rname,
                    RNIC:res.data.post.RNIC,
                    Radd:res.data.post.Radd,
                    city:res.data.post.city,
                    district:res.data.post.district,
                    province:res.data.post.province,
                    sno:res.data.post.sno,
                    grossW:res.data.post.grossW,
                    totalItems:res.data.post.totalItems,
                    tax:res.data.post.tax,
                    custom:res.data.post.custom,
                    delivery:res.data.post.delivery,
                    fullPay:res.data.post.fullPay,
                    status:res.data.post.status,
                    ddate:res.data.post.ddate,

                });

               console.log(this.state.post); 
            }

        });

    }


    render(){

        const { formErrors } = this.state;

        return (

            <div className="Kwarehouse" style={{zIndex:98}} >
                
            <div style={{marginBlockStart:'9%',marginLeft:'23%'}}>
            <MDBCard className="opacity-90" style={{ maxWidth:'50rem'}}>
      <MDBCardBody>
          <center>
          <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Edit Dispatch form</span></h2></center></MDBCardTitle>
         <br/>
        </center>
        <MDBCardText>
        <div>
               
               
               <form className="need-validation" noValidate>
               <h4 className="text-dark">Information</h4>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Sender's name</lable>
                       <input type="text"
                       className="form-control"
                       name="Sname"
                       placeholder="Enter Sender's name"
                       value={this.state.Sname}
                       onChange={this.handleInputChange}/>  
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Phone number</lable>
                       <input type="text"
                       className="form-control"
                       name="pno"
                       placeholder="Enter Phone Number"
                       value={this.state.pno}
                       onChange={this.handleInputChange}/> 
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Receiver's name</lable>
                       <input type="text"
                       className="form-control"
                       name="Rname"
                       placeholder="Enter Receiver's name"
                       value={this.state.Rname}
                       onChange={this.handleInputChange}/>
  
                   </div>
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Receiver's NIC</lable>
                       <input type="text"
                       className="form-control"
                       name="RNIC"
                       placeholder="Enter Receiver's NIC"
                       value={this.state.RNIC}
                       onChange={this.handleInputChange}/>  
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Receiver's Address</lable>
                       <input type="text"
                       className="form-control"
                       name="Radd"
                       placeholder="Enter Address"
                       value={this.state.Radd}
                       onChange={this.handleInputChange}/>
                   </div>

                   <div className="row">
                    <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Province</lable>
                       <select name="province" onChange={this.handleInputChange} value={this.state.province} defaultValue="Select type" className="form-select">
                           <option defaultValue>Select Your Province</option>
                           <option >Central Province </option>
                           <option >North Central Province </option>
                           <option >Eastern Province </option>
                           <option >Northern Province</option>
                           <option >Southern Province </option>
                           <option >Western Province </option>
                           <option >North Western Province</option>
                           <option >Uva Province </option>
                           <option >Sabaragamuwa Province </option>
                           </select>
                           </div>
                           </div>
                    

                   <div className="col">
                 <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>District</lable>
                 <select name="district" onChange={this.handleInputChange}  value={this.state.district} defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your District</option>
                 <option>Kandy</option>
                 <option>Trincomalee</option>
                 <option>Anuradhapura</option>
                 <option>Jaffna</option>
                 <option>Kurunegala</option>
                 <option>Ratnapura</option>
                 <option>Galle</option>
                 <option>Badulla</option>
                 <option>Colombo</option>
                 <option>Polonnaruwa</option>
                 <option>Matara</option>
                 <option>Gampaha</option>
                 <option>Nuwara Eliya</option>
                 </select>
                 </div>
                 </div>


                 <div className="col">
                 <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>City</lable>
                 <select name="city" onChange={this.handleInputChange}  value={this.state.city} defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your City</option>
                 <option>Dehiwala</option>
                 <option>Moratuwa</option>
                 <option>Kotte</option>
                 <option>Negombo</option>
                 <option>Kandy</option>
                 <option>Trincomalee</option>
                 <option>Anuradhapura</option>
                 <option>Jaffna</option>
                 <option>Kurunegala</option>
                 <option>Ratnapura</option>
                 <option>Galle</option>
                 <option>Badulla</option>
                 <option>Colombo</option>
                 <option>Polonnaruwa</option>
                 <option>Matara</option>
                 <option>Gampaha</option>
                 <option>Nuwara Eliya</option>
                 </select>
                 </div>
                 </div>
                 </div>
                 


               
  
                 
  
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Serial Number of the Cargo</lable>
                       <input type="text"
                       className="form-control"
                       name="sno"
                       placeholder="Enter Serial number"
                       value={this.state.sno}
                       onChange={this.handleInputChange}/>
                   </div>


                   <h4 className="text-dark">Product Information</h4>
                   <div className="row">
                    <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Gross weight</lable>
                       <input type="text"
                       className="form-control"
                       name="grossW"
                       placeholder="Enter gross weight"
                       value={this.state.grossW}
                       onChange={this.handleInputChange}/>
                   </div>
                   </div>

                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Number of Items</lable>
                       <input type="number"
                       className="form-control"
                       name="totalItems"
                       placeholder="Enter number of items"
                       value={this.state.totalItems}
                       onChange={this.handleInputChange}/>
                   </div>
                   </div>
                   </div>

                    <div className="row">
                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Status</lable>
                       <select name="status" onChange={this.handleInputChange} value={this.state.status}  defaultValue="Select type" className="form-select">
                           <option defaultValue>Select Type</option>
                           <option >Paid</option>
                           <option >Not Paid</option>
                           </select>                     
                   </div>
                   </div>


                   <div className="col">
                   <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Date</lable>
                       <input type="date"
                       className="form-control"
                       name="ddate"
                       placeholder="Enter date"
                       value={this.state.ddate}
                       onChange={this.handleInputChange}/> 
                   </div>
                   </div>
                   </div>




                   <h4 className="text-dark">Tariffs for receiver</h4>
                   <div className="row">
                       <div className="col">
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Tax Charges</lable>
                       <input type="text"
                       className="form-control"
                       name="tax"
                       placeholder="Enter tax charges"
                       value={this.state.tax}
                       onChange={this.handleInputChange}/>
                       {formErrors.tax.length > 0 && (
                                                        <span className="errorMessage">{formErrors.tax}</span>
                                                    )}
  
                   </div>
                   </div>

                   <div className="col">
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Custom Charges</lable>
                       <input type="text"
                       className="form-control"
                       name="custom"
                       placeholder="Enter custom charges"
                       value={this.state.custom}
                       onChange={this.handleInputChange}/>
                       {formErrors.custom.length > 0 && (
                                                        <span className="errorMessage">{formErrors.custom}</span>
                                                    )}
  
                   </div>
                   </div>
                   </div>

                   <div className="row">
                       <div className="col">
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Delivery Charges</lable>
                       <input type="text"
                       className="form-control"
                       name="delivery"
                       placeholder="Enter delivery charges"
                       value={this.state.delivery}
                       onChange={this.handleInputChange}/>
                       {formErrors.delivery.length > 0 && (
                                                        <span className="errorMessage">{formErrors.delivery}</span>
                                                    )}
  
                   </div>
                   </div>

                   <div className="col">
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <lable style={{marginBottom:'5px'}}>Full Payment</lable>
                       <input type="text"
                       className="form-control"
                       name="fullPay"
                       placeholder="Enter Full payment"
                       value={this.state.fullPay}
                       onClick={this.calcTotal}/>
  
                   </div>
                   </div>
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