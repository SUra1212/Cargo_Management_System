//class components
import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class ExpensesDash extends Component {
  constructor(props){
    super(props);

    this.state={
      expenses:[]
    };
  }

  componentDidMount(){
    this.retrieveExpenses();
  }

  retrieveExpenses(){
    axios.get("/expenses").then(res =>{
      if(res.data.success){
        this.setState({
            expenses:res.data.existingExpense
        });

        console.log(this.state.expenses)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/expense/delete/${id}`).then((res) =>{
      alert("Deleted Successfully");
      this.retrieveExpenses();
    })
  }

  filterData(expenses,searchKey){
    const result = expenses.filter((expense) =>
    expense.date.includes(searchKey) || 
    expense.description.toLowerCase().includes(searchKey)||
    expense.account.toLowerCase().includes(searchKey)||
    expense.amount.toLowerCase().includes(searchKey)
    )

    this.setState({expenses:result})
  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/expenses").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingExpense,searchKey)
      }
    });
  }

  render() {

    return (

      <div className="Khome" >
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>





        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{marginBlockStart:'-1%'}}>All Expenses</span></h1>
        </center>
        <br/>




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
              {this.state.expenses.map((expenses, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/expense/${expenses._id}`} style={{ textDecoration: 'none' }}>
                      {expenses.description}
                    </a>
                  </td>
                  <td class="table-light">{expenses.date}</td>
               <td class="table-light">{expenses.account}</td>
              <td class="table-light">{expenses.amount}</td>
              <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/editExpense/${expenses._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(expenses._id)} >
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '18rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/addExpense" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Expenses
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