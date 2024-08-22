import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            nic: "",
            phone: "",
            address: "",
            saddress: "",
            city: "",
            province: "",
            zip: ""
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
    
        const { fname, lname, email, nic, phone, address, saddress, city, province, zip } = this.state;
    
        const data = {
    
            fname: fname,
            lname: lname,
            email: email,
            nic: nic,
            phone: phone,
            address: address,
            saddress: saddress,
            city: city,
            province: province,
            zip: zip
    
        }
        console.log(data)
    
        this.setState(
            {
                fname: "Amal",
                lname: "Perera",
                email: "amal@gmail.com",
                nic: "563981672v",
                phone: "0872541638",
                address: "No.78",
                saddress: "Church Street",
                city: "Incheon",
                province: "Jeju",
                zip: "2000"
    
            }
        )
    
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { fname, lname, email, nic, phone, address, saddress, city, province, zip } = this.state;

        const data = {
            fname: fname,
            lname: lname,
            email: email,
            nic: nic,
            phone: phone,
            address: address,
            saddress: saddress,
            city: city,
            province: province,
            zip: zip
        }

        console.log(data)

        const ph = /^[0-9\b]+$/;
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if((!ph.test(String(phone))) || (phone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        } else if ((!emi.test(String(email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (fname.length === 0 || lname.length === 0 || email.length === 0 ||
            nic.length === 0 || phone.length === 0 || address.length === 0 ||
            saddress.length === 0 || city.length === 0 || zip.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.post("/customer/save", data).then((res) => {
            let path = "/Homec";
            if (res.data.success) {
                alert("Profile Created Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        fname: "",
                        lname: "",
                        email: "",
                        nic: "",
                        phone: "",
                        address: "",
                        saddress: "",
                        city: "",
                        province: "",
                        zip: ""

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

                            <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Create New Customer</span></h1></center></MDBCardTitle>

                            <MDBCardText>

                                <div>
                                    <form className="need-validation" noValidate>

                                        
                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>First Name</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="fname"
                                                placeholder="Enter First Name"
                                                value={this.state.fname}
                                                onChange={this.handleInputChange} />

                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Last Name</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="lname"
                                                placeholder="Enter Last Name"
                                                value={this.state.lname}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Email</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="example@gmail.com"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>NIC</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="nic"
                                                placeholder="xxxxxxxxxxV"
                                                value={this.state.nic}
                                                onChange={this.handleInputChange} />
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Phone</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="phone"
                                                placeholder="07xxxxxxxx"
                                                value={this.state.phone}
                                                onChange={this.handleInputChange} />
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Address</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="Street Address"
                                                value={this.state.address}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="saddress"
                                                placeholder="Street Address Line 2"
                                                value={this.state.saddress}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>City</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="city"
                                                placeholder="Street Address"
                                                value={this.state.city}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="col">
                                            <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                <lable style={{ marginBottom: '5px' }}>Province</lable>
                                                <select name="province" onChange={this.handleInputChange} value={this.state.province} defaultValue="select type" className="form-select">

                                                    <option defaultValue>-- Select Province --</option>
                                                    <option value="NorthChungcheong">North Chungcheong</option>
                                                    <option value="SouthChungcheong">South Chungcheong</option>
                                                    <option value="Gangwon">Gangwon</option>
                                                    <option value="Gyeonggi">Gyeonggi</option>
                                                    <option value="NorthGyeongsang">NorthGyeongsang</option>
                                                    <option value="SouthGyeongsang">South Gyeongsang</option>
                                                    <option value="NorthJeolla">North Jeolla</option>
                                                    <option value="SouththJeolla">South Jeolla</option>
                                                    <option value="Jeju">Jeju</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Zip</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="zip"
                                                placeholder="Zip Code"
                                                value={this.state.zip}
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