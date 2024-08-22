import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class AddEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      EmpID: "",
      firstName: "",
      lastName: "",
      nic: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      department: "",
      position: "",
      empStatus: ""
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

    const { EmpID, firstName, lastName, nic, phone, email, address, gender, department, position, empStatus } = this.state;

    const data = {

      EmpID: EmpID,
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      phone: phone,
      email: email,
      address: address,
      gender: gender,
      department: department,
      position: position,
      empStatus: empStatus

    }
    console.log(data)

    this.setState(
      {
        EmpID: "E0005",
        firstName: "Vihanga",
        lastName: "Perera",
        nic: "956535655V",
        phone: "0714868111",
        email: "vihanga@gmail.com",
        address: "Samagi Road,Panadura",
        gender: "Male",
        department: "Delivery",
        position: "Assistant Manager",
        empStatus: "Full Time"

      }
    )

  }

  onSubmit = (e) => {
    e.preventDefault();

    const { EmpID, firstName, lastName, nic, phone, email, address, gender, department, position, empStatus } = this.state;

    const data = {
      EmpID: EmpID,
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      phone: phone,
      email: email,
      address: address,
      gender: gender,
      department: department,
      position: position,
      empStatus: empStatus
    }

    console.log(data)

    const ph = /^[0-9\b]+$/;
    const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((!ph.test(String(phone))) || (phone.length != 10)) {
      swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
    } else if ((!emi.test(String(email)))) {
      swal("Invalid email address !", "Please enter valid email address", "error");
    } else if (EmpID.length === 0 || firstName.length === 0 || lastName.length === 0 ||
      nic.length === 0 || phone.length === 0 || email.value === 0 || address.length === 0 ||
      gender.length === 0 || department.length === 0 || position.length === 0) {
      swal("Please fill all the details")
    }else {

      axios.post("/employee/save", data).then((res) => {
        let path = "/EMD";
        if (res.data.success) {
          alert("Details Saved Successfully")
          this.props.history.push(path);
          this.setState(
            {
              EmpID: "",
              firstName: "",
              lastName: "",
              nic: "",
              phone: "",
              email: "",
              address: "",
              gender: "",
              department: "",
              position: "",
              empStatus: ""
            }
          )
        }
      })
    }
  }
  render() {


    return (


      <div className="Kwarehouse" >

        <div style={{ marginLeft: '20%', marginBlockStart: '9%' }}>

          <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

            <MDBCardBody >

              <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Add New Employee</span></h1></center></MDBCardTitle>
              <br />
              <MDBCardText>

                <div >
                  <form className="need-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Employee ID</label>
                      <input type="text"
                        className="form-control"
                        name="EmpID"
                        placeholder="Enter Employee ID"
                        value={this.state.EmpID}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>First Name</label>
                      <input type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Last Name</label>
                      <input type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>NIC</label>
                      <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC no"
                        value={this.state.nic}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Contact Number</label>
                      <input type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter Contact no"
                        value={this.state.phone}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Email Address</label>
                      <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Address</label>
                      <input type="textarea"
                        className="form-control"
                        name="address"
                        placeholder="Enter Address"
                        value={this.state.address}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Gender</label>
                      <select name="gender" onChange={this.handleInputChange} value={this.state.gender} defaultValue="Select Type" class="form-control">
                        <option defaultValue>-- Select Gender --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Department</label>
                      <input type="text"
                        className="form-control"
                        name="department"
                        placeholder="Enter Department"
                        value={this.state.department}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Position</label>
                      <input type="text"
                        className="form-control"
                        name="position"
                        placeholder="Enter Position"
                        value={this.state.position}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Employee Status</label>
                      <select name="empStatus" onChange={this.handleInputChange} value={this.state.empStatus} defaultValue="Select Type" class="form-control">
                        <option defaultValue>-- Select Status --</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                      </select>
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