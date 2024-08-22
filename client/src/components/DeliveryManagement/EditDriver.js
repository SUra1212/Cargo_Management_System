import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class EditDriver extends Component {


    constructor(props) {
        super(props);
        this.state = {
            d_Id: "",
            driverName: "",
            driverPhone: "",
            driverAddress: "",
            age: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const id = this.props.match.params.id;
        const { d_Id, driverName, driverPhone, driverAddress, age } = this.state;

        const data = {
            d_Id: d_Id,
            driverName: driverName,
            driverPhone: driverPhone,
            driverAddress: driverAddress,
            age: age
        }

        console.log(data)
        const ph1 = /^[0-9\b]+$/;

        if((!ph1.test(String(driverPhone))) || (driverPhone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
      
        } else if (d_Id.length === 0 || driverName.length === 0 || driverPhone.value === 0 ||
            driverAddress.length === 0 || age.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.put(`/driver/update/${id}`, data).then((res) => {
            let path = "/HDR";
            if (res.data.success) {
                alert("Details Updated Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        d_Id: "",
                        driverName: "",
                        driverPhone: "",
                        driverAddress: "",
                        age: ""

                    }
                )
            }
        })


    }
    }
    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/driver/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    d_Id: res.data.post.d_Id,
                    driverName: res.data.post.driverName,
                    driverPhone: res.data.post.driverPhone,
                    driverAddress: res.data.post.driverAddress,
                    age: res.data.post.age,
                });

                console.log(this.state.post);

            }

        });

    }

    render() {
        return (
            <div className="Kwarehouse" style={{ zIndex: 98 }} >
                <div style={{ marginBlockStart: '9%', marginLeft: '23%' }}>
                    <MDBCard className="opacity-90" style={{ maxWidth: '50rem' }}>
                        <MDBCardBody>

                            <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Create New Driver Form</span></h2></center></MDBCardTitle>
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
                                            <label style={{ marginBottom: '5px' }}>Driver's Name</label>
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
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Driver's Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="driverAddress"
                                                placeholder="Enter Address"
                                                value={this.state.driverAddress}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Age</label>
                                            <input type="text"
                                                className="form-control"
                                                name="age"
                                                placeholder="Eg:24"
                                                value={this.state.age}
                                                onChange={this.handleInputChange} />
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