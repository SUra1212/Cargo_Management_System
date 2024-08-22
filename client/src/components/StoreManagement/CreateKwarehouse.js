import React, { Component } from 'react'
import axios from 'axios'            
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class CreateKwarehouse extends Component {

constructor(props){
    super(props);
    this.state={
       serialNumber:"",
       receiverName:"",
       receiverContact:"",
       receiverEmail:"",
       receiverAddress:"",
       receiverProvince:"",
       receiverDistrict:"",
       receiverCity:"",
       senderName:"",
       senderContact:"",
       senderEmail:"",
       senderAddress:"",
       senderProvince:"",
       senderDistrict:"",
       senderCity:"",
       pNo:"",
       pType:"",
       pWeight:"",
       pShippingCost:""
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

    const {serialNumber,receiverName,receiverContact,receiverEmail,receiverAddress,receiverProvince,receiverDistrict,receiverCity,senderName,senderContact,senderEmail,senderAddress,senderProvince,senderDistrict,senderCity,pNo,pType,pWeight,pShippingCost} = this.state;

    const data = {

        serialNumber:serialNumber,
        receiverName:receiverName,
        receiverContact:receiverContact,
        receiverEmail:receiverEmail,
        receiverAddress:receiverAddress,
        receiverProvince:receiverProvince,
        receiverDistrict:receiverDistrict,
        receiverCity:receiverCity,
        senderName:senderName,
        senderContact:senderContact,
        senderEmail:senderEmail,
        senderAddress:senderAddress,
        senderProvince:senderProvince,
        senderDistrict:senderDistrict,
        senderCity:senderCity,
        pNo:pNo,
        pType:pType,
        pWeight:pWeight,
        pShippingCost:pShippingCost

    }
    console.log(data)

    this.setState(
        {
            serialNumber:"AB0003",
            receiverName:"Arachchi A.G.S.C",
            receiverContact:"0704110055",
            receiverEmail:"arachchi05@gmail.com",
            receiverAddress:"85-6, Seoulbukbujibanggeomchalcheong, Gongreung 1.3-dong, Nowon-gu, Seou",
            receiverProvince:"South Chungcheong",
            receiverDistrict:"Nowon-gu",
            receiverCity:"Incheon",
            senderName:"Ekanayake J.S.I.U",
            senderContact:"0764110650",
            senderEmail:"ekanayake@gmail.com",
            senderAddress:"NO: 250, Pilimathalawa, Kandy",
            senderProvince:"Central",
            senderDistrict:"Kandy",
            senderCity:"Kandy",
            pNo:"001",
            pType:"Phone",
            pWeight:"1KG",
            pShippingCost:"250"

        }
    )

}




onSubmit = (e) =>{
e.preventDefault();
const {serialNumber,receiverName,receiverContact,receiverEmail,receiverAddress,receiverProvince,receiverDistrict,receiverCity,senderName,senderContact,senderEmail,senderAddress,senderProvince,senderDistrict,senderCity,pNo,pType,pWeight,pShippingCost} = this.state;


const data ={
    serialNumber:serialNumber,
    receiverName:receiverName,
    receiverContact:receiverContact,
    receiverEmail:receiverEmail,
    receiverAddress:receiverAddress,
    receiverProvince:receiverProvince,
    receiverDistrict:receiverDistrict,
    receiverCity:receiverCity,
    senderName:senderName,
    senderContact:senderContact,
    senderEmail:senderEmail,
    senderAddress:senderAddress,
    senderProvince:senderProvince,
    senderDistrict:senderDistrict,
    senderCity:senderCity,
    pNo:pNo,
    pType:pType,
    pWeight:pWeight,
    pShippingCost:pShippingCost

}

console.log(data)
const SenderContact = /^[0-9\b]+$/;
const ReceiverContact = /^[0-9\b]+$/;
const ReceiverEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SenderEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if ((!SenderContact.test(String(senderContact))) || (senderContact.length != 10)) {
    swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
} else if ((!ReceiverContact.test(String(receiverContact))) || (receiverContact.length != 10)) {
    swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
} else if ((!ReceiverEmail.test(String(receiverEmail)))) {
    swal("Invalid email address !", "Please enter valid email address", "error");
} else if ((!SenderEmail.test(String(senderEmail)))) {
    swal("Invalid email address !", "Please enter valid email address", "error");
} else if (serialNumber.length === 0 || receiverName.length === 0 || receiverContact.length === 0 ||
    receiverEmail.length === 0 || receiverAddress.length === 0 || senderName.length === 0 || senderContact.length === 0 ||
    senderEmail.length === 0 || senderAddress.length === 0 || pNo.length === 0 || pType.length === 0 || pWeight.length === 0 || pShippingCost.length === 0) {
    swal("Please fill all the details")
}else {


axios.post("/koreanWarehouse/save",data).then((res) =>{
    let path = "/HKW";
    if(res.data.success){
        alert("Details Saved Successfully")
        this.props.history.push(path);
        this.setState(
            {
                serialNumber:"",
                receiverName:"",
                receiverContact:"",
                receiverEmail:"",
                receiverAddress:"",
                receiverProvince:"",
                receiverDistrict:"",
                receiverCity:"",
                senderName:"",
                senderContact:"",
                senderEmail:"",
                senderAddress:"",
                senderProvince:"",
                senderDistrict:"",
                senderCity:"",
                pNo:"",
                pType:"",
                pWeight:"",
                pShippingCost:""

            }
        )
    }
})
}
}

render(){
    
    return (
       
        
<div className="Kwarehouse">
    
        <div  style={{marginLeft:'20%', marginBlockStart:'9%'}}>
            
        <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
        
        <MDBCardBody >
        
          <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Cargo Information</span></h1></center></MDBCardTitle>
          <br/>
          <MDBCardText>
            
       <div >
         <form className="need-validation" noValidate>
             
             <div className="form-group" autocomplete="on" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Serial Number Of The Cargo</lable>
                 <input type="text"
                 className="form-control"
                 name="serialNumber"
                 placeholder="Enter Serial Number"
                 value={this.state.serialNumber}
                 onChange={this.handleInputChange}/>
            
             </div>

             <h4 className="text-dark">Receiver Information</h4>
             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Receiver Name</lable>
                 <input type="text"
                 className="form-control"
                 name="receiverName"
                 placeholder="Enter Customer Name"
                 value={this.state.receiverName}
                 onChange={this.handleInputChange}/>
             </div>


             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Receiver Contact</lable>
                 <input type="text"
                 className="form-control"
                 name="receiverContact"
                 placeholder="Enter Contact Number"
                 value={this.state.receiverContact}
                 onChange={this.handleInputChange}/>
             </div>


             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Receiver Email</lable>
                 <input type="email"
                 className="form-control"
                 name="receiverEmail"
                 placeholder="Enter Email Address"
                 value={this.state.receiverEmail}
                 onChange={this.handleInputChange}/>
             </div>


             <div className="form-group " style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Receiver Address</lable>
                 <input type="text"
                 className="form-control"
                 name="receiverAddress"
                 placeholder="Enter Home Address"
                 value={this.state.receiverAddress}
                 onChange={this.handleInputChange}/>
             </div>


            <div className="row">
                <div className="col">
             <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Province</lable>
                 <select name="receiverProvince" onChange={this.handleInputChange}  value={this.state.receiverProvince}  defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your Province</option>
                 <option>North Chungcheong</option>
                 <option>South Chungcheong</option>
                 <option>Gangwon</option>
                 <option>Gyeonggi</option>
                 <option>North Gyeongsang</option>
                 <option>South Gyeongsang</option>
                 </select>
                 </div>
                 </div>

                 <div className="col">
                 <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>District</lable>
                 <select name="receiverDistrict" onChange={this.handleInputChange}  value={this.state.receiverDistrict} defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your District</option>
                 <option>Dobong-gu</option>
                 <option>Dongdaemun-gu</option>
                 <option>Dongjak-gu</option>
                 <option>Eunpyeong-gu</option>
                 <option>Geumcheon-gu</option>
                 <option>Guro-gu</option>
                 <option>Gwanak-gu</option>
                 <option>Gwangjin-gu</option>
                 <option>Jongno-gu</option>
                 <option>Jung-gu</option>
                 <option>Jungnang-gu</option>
                 <option>Mapo-gu</option>
                 <option>Nowon-gu</option>
                 </select>
                 </div>
                 </div>


                 <div className="col">
                 <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>City</lable>
                 <select name="receiverCity" onChange={this.handleInputChange}  value={this.state.receiverCity} defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your City</option>
                 <option>Seoul</option>
                 <option>Busan</option>
                 <option>Incheon</option>
                 <option>Daegu</option>
                 <option>Daejeon</option>
                 <option>Gwangju</option>
                 <option>Suwon </option>
                 <option>Goyang-si</option>
                 <option>Seongnam-si </option>
                 <option>Ulsan</option>
                 <option>Bucheon-si</option>
                 <option>Jeonju</option>
                 <option>Sejong</option>
                 </select>
                 </div>
                 </div>
                 </div>
              


             <h4 className="text-dark">Sender Information</h4>
             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Sender Name</lable>
                 <input type="text"
                 className="form-control"
                 name="senderName"
                 placeholder="Enter Customer Name"
                 value={this.state.senderName}
                 onChange={this.handleInputChange}/>

             </div>


             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Sender Contact</lable>
                 <input type="text"
                 className="form-control"
                 name="senderContact"
                 placeholder="Enter Contact Number"
                 value={this.state.senderContact}
                 onChange={this.handleInputChange}/>

             </div>
 

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Sender Email</lable>
                 <input type="email"
                 className="form-control"
                 name="senderEmail"
                 placeholder="Enter Email Address"
                 value={this.state.senderEmail}
                 onChange={this.handleInputChange}/>

             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Sender Address</lable>
                 <input type="text"
                 className="form-control"
                 name="senderAddress"
                 placeholder="Enter Home Address"
                 value={this.state.senderAddress}
                 onChange={this.handleInputChange}/>
             </div>

            <div className="row">
                <div className="col">
             <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Province</lable>
                 <select name="senderProvince" onChange={this.handleInputChange}  value={this.state.senderProvince} defaultValue="select type" className="form-select">
                 <option defaultValue>Select Your Province</option>
                 <option> Central</option>
                 <option>Eastern</option>
                 <option>North Central</option>
                 <option>Northern</option>
                 <option>North Western</option>
                 <option>Sabaragamuwa</option>
                 <option>Southern</option>
                 <option>Uva</option>
                 <option>Western</option>
                 </select>
                 </div>
                 </div>


                 <div className="col">
                 <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>District</lable>
                 <select name="senderDistrict" onChange={this.handleInputChange}  value={this.state.senderDistrict} defaultValue="select type" className="form-select">
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
                 <select name="senderCity" onChange={this.handleInputChange}  value={this.state.senderCity} defaultValue="select type" className="form-select">
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



                 <h4 className="text-dark">Product Details</h4>
                 <div className="row">
                <div className="col">
                 <div className="col-sm-11 col-form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Product Number</lable>
                 <input type="text"
                 className="form-control"
                 name="pNo"
                 placeholder="Enter Product Number"
                 value={this.state.pNo}
                 onChange={this.handleInputChange}/>
                 </div>
                 </div>


                 <div className="col">
                 <div className="col-sm-11 col-form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Product Type</lable>
                 <input type="text"
                 className="form-control"
                 name="pType"
                 placeholder="Enter Product Type"
                 value={this.state.pType}
                 onChange={this.handleInputChange}/>
                 </div>
                 </div>
                 </div>

                 <div className="row">
                 <div className="col">
                 <div className="col-sm-11 col-form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Product Weight</lable>
                 <input type="text"
                 className="form-control"
                 name="pWeight"
                 placeholder="Enter Product Weight = Ex:2KG"
                 value={this.state.pWeight}
                 onChange={this.handleInputChange}/>
                 </div>
                 </div>
   
                 <div className="col">
                 <div className="col-sm-11 col-form-group" style={{marginBottom:'15px'}}>
                 <lable style={{marginBottom:'5px'}}>Product Shipping Cost</lable>
                 <input type="text"
                 className="form-control"
                 name="pShippingCost"
                 placeholder="Enter Shipping Cost = Ex:KWR=300"
                 value={this.state.pShippingCost}
                 onChange={this.handleInputChange}/>
                 </div>
                 </div>
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
