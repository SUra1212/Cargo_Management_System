import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class EmployeeDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    this.retrievEmployees();
  }

  retrievEmployees() {
    axios.get("/employees").then(res => {
      if (res.data.success) {
        this.setState({
          employees: res.data.existingEmployee
        });

        console.log(this.state.employees)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/employee/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievEmployees();
    })
  }

  filterData(employees, searchKey) {
    const result = employees.filter((employee) =>
      employee.phone.includes(searchKey) ||
      employee.EmpID.toLowerCase().includes(searchKey) ||
      employee.EmpID.includes(searchKey) ||
      employee.firstName.toLowerCase().includes(searchKey) ||
      employee.firstName.includes(searchKey) ||
      employee.department.toLowerCase().includes(searchKey) ||
      employee.email.toLowerCase().includes(searchKey) ||
      employee.position.toLowerCase().includes(searchKey) ||
      employee.empStatus.toLowerCase().includes(searchKey) ||
      employee.department.includes(searchKey) ||
      employee.email.includes(searchKey) ||
      employee.position.includes(searchKey) ||
      employee.empStatus.includes(searchKey)
    )

    this.setState({ employees: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/employees").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingEmployee, searchKey)
      }
    });
  }

  render() {

    return (

      <div className="Khome" >
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '-1%' }}>All Employees</span></h1>
        </center>
        <br />




        <div >
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Department</th>
                <th scope="col">Employee Status</th>
                <th scope="col">Position</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employees, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/employeeDet/${employees._id}`} style={{ textDecoration: 'none' }}>
                      {employees.EmpID}
                    </a>
                  </td>
                  <td class="table-light">{employees.firstName}</td>
                  <td class="table-light">{employees.email}</td>
                  <td class="table-light">{employees.phone}</td>
                  <td class="table-light">{employees.department}</td>
                  <td class="table-light">{employees.empStatus}</td>
                  <td class="table-light">{employees.position}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/editEmployee/${employees._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(employees._id)} >
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/addEmployee" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Employee
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashowner" >
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