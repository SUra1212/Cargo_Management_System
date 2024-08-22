import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class CreateReceiver extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cfname: "",
            clname: "",
            cemail: "",
            cnic: "",
            cphone: "",
            rfname: "",
            rlname: "",
            remail: "",
            rnic: "",
            rphone: "",
            raddress: "",
            rsaddress: "",
            rcity: "",
            rprovince: "",
            rzip: ""
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

        const { cfname, clname, cemail, cnic, cphone, rfname, rlname, remail, rnic, rphone, raddress, rsaddress, rcity, rprovince, rzip } = this.state;

        const data = {

            cfname: cfname,
            clname: clname,
            cemail: cemail,
            cnic: cnic,
            cphone: cphone,
            rfname: rfname,
            rlname: rlname,
            remail: remail,
            rnic: rnic,
            rphone: rphone,
            raddress: raddress,
            rsaddress: rsaddress,
            rcity: rcity,
            rprovince: rprovince,
            rzip: rzip


        }
        console.log(data)

        this.setState(
            {
                cfname: "Supun",
                clname: "Liyanage",
                cemail: "supun@gmail.com",
                cnic: "897624512v",
                cphone: "0776523892",
                rfname: "Saman",
                rlname: "Liyanage",
                remail: "saman@gmail.com",
                rnic: "657824512v",
                rphone: "0765423187",
                raddress: "N0.129",
                rsaddress: "Armour Street",
                rcity: "Colombo",
                rprovince: "Western",
                rzip: "3000"

            }
        )

    }

    onSubmit = (e) => {

        e.preventDefault();

        const { cfname, clname, cemail, cnic, cphone, rfname, rlname, remail, rnic, rphone, raddress, rsaddress, rcity, rprovince, rzip } = this.state;

        const data = {
            cfname: cfname,
            clname: clname,
            cemail: cemail,
            cnic: cnic,
            cphone: cphone,
            rfname: rfname,
            rlname: rlname,
            remail: remail,
            rnic: rnic,
            rphone: rphone,
            raddress: raddress,
            rsaddress: rsaddress,
            rcity: rcity,
            rprovince: rprovince,
            rzip: rzip
        }

        console.log(data)

        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((!ph.test(String(rphone))) || (rphone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        } else if ((!ph.test(String(cphone))) || (cphone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        } else if ((!emi.test(String(remail)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if ((!emi.test(String(cemail)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (cfname.length === 0 || clname.length === 0 || cemail.length === 0 ||
            cnic.length === 0 || cphone.length === 0 || rfname.length === 0 || 
            rlname.length === 0 || remail.length === 0 ||
            rnic.length === 0 || rphone.length === 0 || raddress.length === 0 ||
            rsaddress.length === 0 || rcity.length === 0 || rzip.length === 0) {
            swal("Please fill all the details")
        }else {

            axios.post("/receiver/save", data).then((res) => {
                let path = "/Homer";
                if (res.data.success) {
                    alert("Data Saved Successfully")
                    this.props.history.push(path);
                    this.setState(
                        {
                            cfname: "",
                            clname: "",
                            cemail: "",
                            cnic: "",
                            cphone: "",
                            rfname: "",
                            rlname: "",
                            remail: "",
                            rnic: "",
                            rphone: "",
                            raddress: "",
                            rsaddress: "",
                            rcity: "",
                            rprovince: "",
                            rzip: ""


                        }
                    )
                }
            })


        }
    }

    render() {

        return (


            <div className="Kwarehouse">

                <div style={{ marginLeft: '20%', marginBlockStart: '9%' }}>

                    <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

                        <MDBCardBody >

                            <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Cargo Receiver Details Form</span></h1></center></MDBCardTitle>

                            <MDBCardText>

                                <div>

                                    <form className="needs-validation" noValidate>
                                        <h4 className="text-dark">Customer Information</h4>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>First Name</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="cfname"
                                                        placeholder="Enter First Name"
                                                        value={this.state.cfname}
                                                        onChange={this.handleInputChange} />

                                                </div>
                                            </div>


                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Last Name</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="clname"
                                                        placeholder="Enter Last Name"
                                                        value={this.state.clname}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Email</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="cemail"
                                                placeholder="example@gmail.com"
                                                value={this.state.cemail}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>NIC</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="cnic"
                                                        placeholder="xxxxxxxxxxV"
                                                        value={this.state.cnic}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>


                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Phone</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="cphone"
                                                        placeholder="07xxxxxxxx"
                                                        value={this.state.cphone}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="text-dark">Receiver Information</h4>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }} >First Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="rfname"
                                                        placeholder="First Name"
                                                        value={this.state.rfname}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>


                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }}>Last Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="rlname"
                                                        placeholder="Last Name"
                                                        value={this.state.rlname}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Email</label>
                                            <input type="text"
                                                className="form-control"
                                                name="remail"
                                                placeholder="eg:abc@gmail.com"
                                                value={this.state.remail}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }}>NIC</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="rnic"
                                                        placeholder="xxxxxxxxxx"
                                                        value={this.state.rnic}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <label style={{ marginBottom: '5px' }}>Phone</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="rphone"
                                                        placeholder="### ### ####"
                                                        value={this.state.rphone}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="raddress"
                                                placeholder="Street Address"
                                                value={this.state.raddress}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>

                                            <input type="text"
                                                className="form-control"
                                                name="rsaddress"
                                                placeholder="Street Address Line 2"
                                                value={this.state.rsaddress}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>City</label>
                                            <input type="text"
                                                className="form-control"
                                                name="rcity"
                                                placeholder="City"
                                                value={this.state.rcity}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Province</label>
                                            <select className="form-control" name="rprovince" defaultValue="Select Type" value={this.state.rprovince} onChange={this.handleInputChange}>
                                                <option defaultValue>-- Select Province --</option>
                                                <option value="Southern">Southern</option>
                                                <option value="Western">Western</option>
                                                <option value="Nothern">Nothern</option>
                                                <option value="Central">Central</option>
                                                <option value="NorthCentral">NorthCentral</option>
                                                <option value="NorthWest">NorthWest</option>
                                                <option value="Uva">Uva</option>
                                                <option value="Sabaragamuwa">Sabaragamuwa</option>
                                                <option value="Eastern">Eastern</option>
                                                <option></option>
                                            </select>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Zip</label>
                                            <input type="text"
                                                className="form-control"
                                                name="rzip"
                                                placeholder="Zip Code"
                                                value={this.state.rzip}
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