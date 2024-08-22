//class components
import React, { Component } from 'react';
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class AllBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ledgers: []
    };
  }

  componentDidMount() {
    this.retrieveLedgers();
  }

  retrieveLedgers() {
    axios.get("/ledgers").then(res => {
      if (res.data.success) {
        this.setState({
          ledgers: res.data.existingLedger
        });

        console.log(this.state.ledgers)
      }
    });
  }

  filterData(ledgers, searchKey) {
    const result = ledgers.filter((ledger) =>
      ledger.month.includes(searchKey) ||
      ledger.totalIncomes.toLowerCase().includes(searchKey) ||
      ledger.totalOutcomes.toLowerCase().includes(searchKey) ||
      ledger.balance.toLowerCase().includes(searchKey)
    )

    this.setState({ ledgers: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/ledgers").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingLedger, searchKey)
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '-1%' }}>Cash Ledger</span></h1>
        </center>
        <br />




        <div >
          <table id="table" class=" table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Month</th>
                <th scope="col">Total Incomes</th>
                <th scope="col">Total Outcomes</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ledgers.map((ledgers, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">LE{index + 1}</th>
                  <td class="table-light">
                    <a href={`/budget/${ledgers._id}`} style={{ textDecoration: 'none' }}>
                      {ledgers.month}
                    </a>
                  </td>
                  <td class="table-light">{ledgers.totalIncomes}</td>
                  <td class="table-light">{ledgers.totalOutcomes}</td>
                  <td id="income" class="table-light">{ledgers.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <span id="val"></span>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '23rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/addLedger" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Record
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashfin" >
                    <i className="fas fa-hand-holding-usd"></i>&nbsp;DashBoard
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