import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default class SalaryCalc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empID: "",
      empName: "",
      month: "",
      salary: "",
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

    const { empID, empName, month, salary, nopay, hours, advance, amount } = this.state;
    this.setState({
      amount: parseInt(this.state.salary) + (((parseInt(this.state.salary) / 20) / 8) *
        parseInt(this.state.hours)) - ((parseInt(this.state.salary) / 20) * parseInt(this.state.nopay)) - parseInt(this.state.advance)
    })
  }

  btnDemo = (e) => {
    e.preventDefault();

    const { empID, empName, month, salary, hours, amount } = this.state;

    const data = {

      empName: empName,
      empID: empID,
      month: month,
      salary: salary,
      hours: hours,
      amount: amount

    }
    console.log(data)

    this.setState(
        {
          empID: "E0005",
            empName: "Sithu",
            month: "May",
            salary: "60000.00",
            nopay: "0.00",
            hours: "8",
            advance: "1000.00",
            amount: ""

        }
    )

}

  onSubmit = (e) => {
    e.preventDefault();

    const { empID, empName, month, salary, hours, amount } = this.state;

    const data = {
      empName: empName,
      empID: empID,
      month: month,
      salary: salary,
      hours: hours,
      amount: amount
    }

    console.log(data)

    let path = "/salaryDash";
    axios.post("/salary/save", data).then((res) => {
      if (res.data.success) {
        alert("Salary Saved Successfully")
        this.props.history.push(path);
        this.setState(
          {
            empID: "",
            empName: "",
            month: "",
            salary: "",
            nopay: "",
            hours: "",
            advance: "",
            amount: ""
          }
        )
      }
    })
  }


  render() {

    return (


      <div className="Kwarehouse">

        <div style={{ marginLeft: '20%', marginBlockStart: '9%' }}>

          <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

            <MDBCardBody >

              <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Add New Salary</span></h1></center></MDBCardTitle>
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
                      <label style={{ marginBottom: '5px' }}>Month</label>
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
                        <option value="Sepetember">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Basic Salary</label>
                      <input type="text"
                        className="form-control"
                        name="salary"
                        placeholder="Enter Basic Salary"
                        value={this.state.salary}
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