import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default class CreateExpense extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: "",
      date: "",
      account: "",
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

  onSubmit = (e) => {
    e.preventDefault();

    const { description, date, account, amount } = this.state;

    const data = {
      description: description,
      date: date,
      account: account,
      amount: amount
    }

    console.log(data)

    axios.post("/expense/save", data).then((res) => {
      let path = "/AllExpenses";
      if (res.data.success) {
        alert("Expense Created Successfully")
        this.props.history.push(path);
        this.setState(
          {
            description: "",
            date: "",
            account: "",
            amount: ""
          }
        )
      }
    })
  }

  render() {
    return (


      <div className="Kwarehouse" >

        <div style={{ marginLeft: '20%', marginBlockStart: '9%' }}>

          <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

            <MDBCardBody >

              <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Add New Expenses</span></h1></center></MDBCardTitle>
              <br />
              <MDBCardText>

                <div >
                  <form className="need-validation" noValidate>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Description</label>
                      <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange} />

                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Date</label>
                      <input type="date"
                        className="form-control"
                        name="date"
                        placeholder="Enter Date"
                        value={this.state.date}
                        onChange={this.handleInputChange} />

                    </div>

                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Account</label>
                      <select name="account" onChange={this.handleInputChange} value={this.state.account} defaultValue="Select Type" class="form-control">
                        <option defaultValue>-- Select Accont Type --</option>
                        <option value="Bank">Bank</option>
                        <option value="Cash">Cash</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Amount</label>
                      <input type="text"
                        className="form-control"
                        name="amount"
                        placeholder="Enter Amount Ex: xxxx.xx"
                        value={this.state.amount}
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