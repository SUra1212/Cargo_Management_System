//class components
import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incomes: []
    };
  }

  componentDidMount() {
    this.retrieveIncomes();
  }

  retrieveIncomes() {
    axios.get("/incomes").then(res => {
      if (res.data.success) {
        this.setState({
          incomes: res.data.existingIncome
        });

        console.log(this.state.incomes)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/income/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveIncomes();
    })
  }

  filterData(incomes, searchKey) {
    const result = incomes.filter((income) =>
      income.date.includes(searchKey) ||
      income.description.toLowerCase().includes(searchKey) ||
      income.account.toLowerCase().includes(searchKey) ||
      income.amount.toLowerCase().includes(searchKey)
    )

    this.setState({ incomes: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/incomes").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingIncome, searchKey)
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '-1%' }}>All Incomes</span></h1>
        </center>
        <br />




        <div >
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Account</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.incomes.map((incomes, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">I{index + 1}</th>
                  <td class="table-light">
                    <a href={`/income/${incomes._id}`} style={{ textDecoration: 'none' }}>
                      {incomes.description}
                    </a>
                  </td>
                  <td class="table-light">{incomes.date}</td>
                  <td class="table-light">{incomes.account}</td>
                  <td class="table-light">{incomes.amount}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/edit/${incomes._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(incomes._id)} >
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

                  <a className="btn btn-warning text-dark " href="/add" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Income
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashshow" >
                    Dash Board
                  </a>
                </MDBCardBody>
              </MDBCard>
            </center>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
    )

  }
}