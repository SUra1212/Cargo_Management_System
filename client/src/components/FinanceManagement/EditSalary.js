import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default class EditSalary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empID: "",
      empName: "",
      month: "",
      basic: "",
      nopay: "",
      hours: "",
      advance: "",
      amount: ""
    }

  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onCalculate = (e) => {
    e.preventDefault();

    const { empID, empName, month, basic, nopay, hours, advance, amount } = this.state;

    this.setState({
      amount: parseInt(this.state.basic) + (((parseInt(this.state.basic) / 20) / 8) *
        parseInt(this.state.hours)) - ((parseInt(this.state.basic) / 20) * parseInt(this.state.nopay)) - parseInt(this.state.advance)
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const { empID, empName, month, basic, hours, amount } = this.state;

    const data = {
      empName: empName,
      empID: empID,
      month: month,
      salary: basic,
      hours: hours,
      amount: amount
    }

    console.log(data)

    axios.put(`/salary/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Salary Updated Successfully")
        this.setState(
          {
            empID: "",
            empName: "",
            month: "",
            basic: "",
            nopay: "",
            hours: "",
            advance: "",
            amount: ""
          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;
    let path = "/salaryDash";

    axios.get(`/salary/${id}`).then((res) => {
      alert("Salary Updated Successfully")
      this.props.history.push(path);
      if (res.data.success) {
        this.setState({
          empName: res.data.salary.empName,
          empID: res.data.salary.empID,
          month: res.data.salary.month,
          basic: res.data.salary.salary,
          hours: res.data.salary.hours,
          amount: res.data.salary.amount
        });

        console.log(this.state.salary);
      }
    });
  }

  render() {
    return (


      <div className="Kwarehouse">

        <div style={{ marginLeft: '20%', marginBlockStart: '9%' }}>

          <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

            <MDBCardBody >

              <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Edit Salary</span></h1></center></MDBCardTitle>
              <br />
              <MDBCardText>

                <div >
                  <form className="need-validation" noValidate>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Employee ID</label>
                      <input type="text"
                        className="form-control"
                        name="empID"
                        placeholder="Enter Employee ID"
                        value={this.state.empID}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Employee Name</label>
                      <input type="text"
                        className="form-control"
                        name="empName"
                        placeholder="Enter Employee Name"
                        value={this.state.empName}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Account</label>
                      <select name="month" onChange={this.handleInputChange} value={this.state.month} defaultValue="Select Month" class="form-control">
                        <option defaultValue>-- Select Month --</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="Sepetember">Sepetember</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Basic Salary</label>
                      <input type="text"
                        className="form-control"
                        name="basic"
                        placeholder="Enter Basic Salary"
                        value={this.state.basic}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>No-pay Days</label>
                      <input type="number"
                        className="form-control"
                        name="nopay"
                        placeholder="Enter No. of No-pay Days"
                        value={this.state.nopay}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>OT Hours</label>
                      <input type="text"
                        className="form-control"
                        name="hours"
                        placeholder="Enter OT Hours"
                        value={this.state.hours}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Advanced Taken</label>
                      <input type="text"
                        className="form-control"
                        name="advance"
                        placeholder="Enter OT Hours"
                        value={this.state.advance}
                        onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-warning text-dark" style={{ marginTop: '15px', marginBottom: '15px' }} onClick={this.onCalculate}>
                      &nbsp; Calculate Total Salary
                    </button>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Total Salary</label>
                      <input type="text"
                        className="form-control"
                        name="hours"
                        value={this.state.amount} />
                    </div>
                  </form>
                  <br></br>
                  <center>
                    <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
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
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}