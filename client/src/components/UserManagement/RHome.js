import React, { Component } from 'react'
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class RHome extends Component{
  constructor(props){
    super(props);

    this.state={
      refunds:[]
    };
  }

  componentDidMount(){
    this.retrieveRefunds();
  }

  retrieveRefunds(){
    axios.get("/refunds").then(res=>{
      if(res.data.success){
        this.setState({
          refunds:res.data.existingPosts
        });
        console.log(this.state.refunds)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/refund/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrieveRefunds();
    })
  }

  filterData(refunds,searchKey){
    const result = refunds.filter((post) =>
      post.CustomerID.toLowerCase().includes(searchKey) ||
      post.PhoneNumber.toLowerCase().includes(searchKey) ||
      post.CargoReceivedDate.toLowerCase().includes(searchKey)||
      post.RefundGoods.toLowerCase().includes(searchKey)||
      post.ReasonforRefund.toLowerCase().includes(searchKey)
    )
    this.setState({refunds:result})
  }

  handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;
  
    axios.get("/refunds").then(res =>{
      if(res.data.success){
     
        this.filterData(res.data.existingPosts,searchKey) 
      }
    });
  
  }


  render(){
    return(

<div className="Khome">
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Refund Details</span></h1>
        </center>
        <div >
          <br />
         
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Cargo Received Date</th>
                <th scope="col">Refund Goods</th>
                <th scope="col">Reason for Refund</th>
                <th scope="col">Action</th>
              
              </tr>
            </thead>
            <tbody>
              {this.state.refunds.map((refunds, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/rpost/${refunds._id}`} style={{ textDecoration: 'none' }}>
                      {refunds.CustomerID}
                    </a>
                  </td>

                  <td class="table-light">{refunds.PhoneNumber}</td>
                  <td class="table-light">{refunds.CargoReceivedDate}</td>
                  <td class="table-light">{refunds.RefundGoods}</td>
                  <td class="table-light">{refunds.ReasonforRefund}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/redit/${refunds._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(refunds._id)} >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
         
         
          
          <div>

          <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/radd" >
                    <i className="fas fa-user-plus"></i>&nbsp;Create New Refund
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashuser" >
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