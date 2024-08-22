import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class EditRefunds extends Component {

  constructor(props){
    super(props);
    this.state={
            CustomerID:"",
            PhoneNumber:"",
            CargoReceivedDate:"",
            RefundGoods:"",
            ReasonforRefund:""
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
    const id=this.props.match.params.id;

    
    const{CustomerID,PhoneNumber,CargoReceivedDate,RefundGoods,ReasonforRefund} = this.state;

    const data ={
        CustomerID:CustomerID,
        PhoneNumber:PhoneNumber,
        CargoReceivedDate:CargoReceivedDate,
        RefundGoods:RefundGoods,
        ReasonforRefund:ReasonforRefund
    }
    console.log(data)

    const contact = /^[0-9\b]+$/;

    if ((!contact.test(String(PhoneNumber))) || (PhoneNumber.length != 10)) {
        swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
    } else if (CustomerID.length === 0 || PhoneNumber.length === 0 || CargoReceivedDate.length === 0 ||
        RefundGoods.length === 0 || ReasonforRefund.length === 0) {
        swal("Please fill all the details")
    } else {

    axios.put(`/refund/update/${id}`,data).then((res) =>{
        let path = "/rHome";
        if(res.data.success){
          alert("Refund Updated Successfully")
          this.props.history.push(path);
            this.setState(
                {
                        CustomerID:"",
                        PhoneNumber:"",
                        CargoReceivedDate:"",
                        RefundGoods:"",
                        ReasonforRefund:""

                }
            )
        }
    })
    }

}


  componentDidMount(){
    const id=this.props.match.params.id;

    axios.get(`/refund/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                CustomerID:res.data.post.CustomerID,
                PhoneNumber:res.data.post.PhoneNumber,
                CargoReceivedDate:res.data.post.CargoReceivedDate,
                RefundGoods:res.data.post.RefundGoods,
                ReasonforRefund:res.data.post.ReasonforRefund,
            });
            console.log(this.state.refund);
        }
    });
}


render() {
    return (

        <div className="Kwarehouse" style={{ zIndex: 98 }} >

        <div style={{ marginBlockStart: '9%', marginLeft: '23%' }}>
            <MDBCard className="opacity-90" style={{ maxWidth: '50rem' }}>
                <MDBCardBody>

                    <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Refund Form</span></h2></center></MDBCardTitle>
                    <br />
                    <MDBCardTitle></MDBCardTitle>
                    <br />
                    <MDBCardText>
                        <div >


                            <form className="needs-validation" noValidate>
                              

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Customer ID</label>
                                    <input type="text"
                                        className="form-control"
                                        name="CustomerID"
                                        placeholder="Customer ID"
                                        value={this.state.CustomerID}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Phone Number</label>
                                    <input type="text"
                                        className="form-control"
                                        name="PhoneNumber"
                                        placeholder="Enter Phone Number"
                                        value={this.state.PhoneNumber}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Cargo Received Date</label>
                                    <input type="date"
                                        className="form-control"
                                        name="CargoReceivedDate"
                                        placeholder="Enter Date"
                                        value={this.state.CargoReceivedDate}
                                        onChange={this.handleInputChange} />
                                </div>


                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Refund Goods</label>
                                    <input type="text"
                                        className="form-control"
                                        name="RefundGoods"
                                        placeholder="Input Refund Goods"
                                        value={this.state.RefundGoods}
                                        onChange={this.handleInputChange} />
                                </div>

                                <div className="container1" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Reason for Refund</label>
                                    <textarea className="form-control" rows="3"
                                        name="ReasonforRefund"
                                        placeholder="Reason for Refund"
                                        value={this.state.ReasonforRefund}
                                        onChange={this.handleInputChange}>

                                    </textarea>
                                </div>

                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; update
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
        <br />
        <br />
        <br />
        <br />

    </div>
)
}
}
