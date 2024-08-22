import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class SalaryDash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      salaries: []
    };
  }

  componentDidMount() {
    this.retrieveSalaries();
  }

  retrieveSalaries() {
    axios.get("/salaries").then(res => {
      if (res.data.success) {
        this.setState({
          salaries: res.data.existingSalary
        });

        console.log(this.state.salaries)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/salary/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveSalaries();
    })
  }

  filterData(salaries, searchKey) {
    const result = salaries.filter((salary) =>
      salary.empID.toLowerCase().includes(searchKey) ||
      salary.empName.toLowerCase().includes(searchKey) ||
      salary.month.toLowerCase().includes(searchKey) ||
      salary.salary.includes(searchKey) ||
      salary.hours.includes(searchKey) ||
      salary.amount.includes(searchKey)
    )

    this.setState({ salaries: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/salaries").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingSalary, searchKey)
      }
    });
  }


  render() {
    return (

      <div className="Khome">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '7%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>





        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '-1%' }}>Employee Salary</span></h1>
        </center>
        <br />




        <div >
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Month</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">OT Hours</th>
                <th scope="col">Total Salary</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.salaries.map((salaries, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">ES{index + 1}</th>
                  <td class="table-light">
                    <a href={`/salary/${salaries._id}`} style={{ textDecoration: 'none' }}>
                      {salaries.empName}
                    </a>
                  </td>
                  <td class="table-light">{salaries.empID}</td>
                  <td class="table-light">{salaries.month}</td>
                  <td class="table-light">{salaries.salary}</td>
                  <td class="table-light">{salaries.hours}</td>
                  <td class="table-light">{salaries.amount}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/editSalary/${salaries._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(salaries._id)} >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <br></br>
          <br></br>
          <br></br>
          <div>
            <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '22rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/addSalary" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Salary
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashfin" >
                    Dash Board
                  </a>
                </MDBCardBody>
              </MDBCard>
            </center>
          </div>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
    )

  }

}