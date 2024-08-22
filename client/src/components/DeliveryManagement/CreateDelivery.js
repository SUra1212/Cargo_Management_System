import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class CreateDelivery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            d_Id: "",
            driverName: "",
            driverPhone: "",
            dStatus: "",
            senderName: "",
            receiverName: "",
            receiverAddress: "",
            receiverPhone: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();

        const { d_Id, driverName, driverPhone, dStatus, senderName, receiverName, receiverAddress, receiverPhone } = this.state;

        const data = {

            d_Id: d_Id,
            driverName: driverName,
            driverPhone: driverPhone,
            dStatus: dStatus,
            senderName: senderName,
            receiverName: receiverName,
            receiverAddress: receiverAddress,
            receiverPhone: receiverPhone
        }
        console.log(data)


        this.setState(
            {
                d_Id: "D0001",
                driverName: "Jagath Perera",
                driverPhone: "0791290321",
                dStatus: "Delivered",
                senderName: "Sulochana Rathnayake",
                receiverName: "Sampath Perera",
                receiverAddress: "110 narangodapaluwa, batuwatta",
                receiverPhone: "0771234562"

            }
        )

    }

    onSubmit = (e) => {

        e.preventDefault();

        const { d_Id, driverName, driverPhone, dStatus, senderName, receiverName, receiverAddress, receiverPhone } = this.state;

        const data = {
            d_Id: d_Id,
            driverName: driverName,
            driverPhone: driverPhone,
            dStatus: dStatus,
            senderName: senderName,
            receiverName: receiverName,
            receiverAddress: receiverAddress,
            receiverPhone: receiverPhone
        }

        console.log(data)
        const ph1 = /^[0-9\b]+$/;
        const ph2 = /^[0-9\b]+$/;

        if((!ph1.test(String(driverPhone))) || (driverPhone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        }else if((!ph2.test(String(receiverPhone))) || (receiverPhone.length != 10)) {
                swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
        } else if (d_Id.length === 0 || driverName.length === 0 || driverPhone.value === 0 ||
            dStatus.length === 0 || senderName.length === 0 || receiverName.length === 0 || 
            receiverAddress.value === 0 || receiverPhone.value === 0) {
            swal("Please fill all the details")
        }else {

        axios.post("/d_detail/save", data).then((res) => {
            let path = "/HD";
            if (res.data.success) {
                alert("Details Saved Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        d_Id: "",
                        driverName: "",
                        driverPhone: "",
                        dStatus: "",
                        senderName: "",
                        receiverName: "",
                        receiverAddress: "",
                        receiverPhone: ""

                    }
                )
            }
        })


    }

    }
    render() {
        return (
            <div className="Kwarehouse" style={{ zIndex: 98 }} >

                <div style={{ marginBlockStart: '9%', marginLeft: '23%' }}>
                    <MDBCard className="opacity-90" style={{ maxWidth: '50rem' }}>
                        <MDBCardBody>

                            <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Create New Delivery Form</span></h2></center></MDBCardTitle>
                            <br />
                            <MDBCardText>
                                <div >


                                    <form className="needs-validation" noValidate>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }} >Driver ID</label>
                                            <input type="text"
                                                className="form-control"
                                                name="d_Id"
                                                placeholder="DXXXX"
                                                value={this.state.d_Id}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Driver Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="driverName"
                                                placeholder="Enter Name"
                                                value={this.state.driverName}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Driver Contact</label>
                                            <input type="text"
                                                className="form-control"
                                                name="driverPhone"
                                                placeholder="0XX-XXX XXXX"
                                                value={this.state.driverPhone}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Delivery Status</lable>
                                                    <select name="dStatus" onChange={this.handleInputChange}  defaultValue="select type" className="form-select">
                                                        <option defaultValue>Select Delivery Status</option>
                                                        <option>On Process</option>
                                                        <option>On Delivery</option>
                                                        <option>Delivered</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Sender's Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="senderName"
                                                placeholder="Enter Name"
                                                value={this.state.senderName}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Receiver's Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="receiverName"
                                                placeholder="Enter Name"
                                                value={this.state.receiverName}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Receiver's Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="receiverAddress"
                                                placeholder="Enter Address"
                                                value={this.state.receiverAddress}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Receiver Contact</label>
                                            <input type="text"
                                                className="form-control"
                                                name="receiverPhone"
                                                placeholder="0XX-XXX XXXX"
                                                value={this.state.receiverPhone}
                                                onChange={this.handleInputChange} />
                                        </div>

                                    </form>
                                    <br></br>
                                    <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; save
                                        </a>
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
                <br />
                <br />
                <br />
                <br />

            </div>
        )
    }
}




