import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class HomeKpayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }


  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/koreanPayment").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/koreanPayment/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.serialNumber1.toLowerCase().includes(searchKey) ||
      post.Name.toLowerCase().includes(searchKey) ||
      post.Contact.toLowerCase().includes(searchKey) ||
      post.Email.toLowerCase().includes(searchKey) ||
      post.pNo1.toLowerCase().includes(searchKey) ||
      post.pType1.toLowerCase().includes(searchKey) ||
      post.pWeight1.toLowerCase().includes(searchKey) ||
      post.pShippingCost1.toLowerCase().includes(searchKey)||
      post.deliveryCharges.toLowerCase().includes(searchKey)||
      post.totalShippingCost.toLowerCase().includes(searchKey)||
      post.Total.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/koreanPayment").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }





  render() {
    return (

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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>All Payment Details</span></h1>
        </center>




        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-90 ">Payment Details</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col" >#</th>
                <th scope="col"></th>
                <th scope="col">SerialNumber</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">ProductNumber</th>
                <th scope="col">ProductType</th>
                <th scope="col">Weight</th>
                <th scope="col">ShippingCost</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <th class="table-primary">Payment Details</th>
                  <td class="table-light">
                    <a href={`/KPD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.serialNumber1}
                    </a>
                  </td>
                  <td class="table-light">{posts.Name}</td>
                  <td class="table-light">{posts.Contact}</td>
                  <td class="table-light">{posts.Email}</td>
                  <td class="table-light">{posts.pNo1}</td>
                  <td class="table-light">{posts.pType1}</td>
                  <td class="table-light">{posts.pWeight1}</td>
                  <td class="table-light">{posts.pShippingCost1}</td>
                </tr>
              ))}
            </tbody>
          </table>



          <h3><span class="badge bg-warning text-dark opacity-90 ">Charges</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col" >#</th>
                <th scope="col"></th>
                <th scope="col">SerialNumber</th>
                <th scope="col">DeliveryCharges</th>
                <th scope="col">TotalShippingCost</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <th class="table-primary">Charges</th>
                  <td class="table-light">
                    <a href={`/KPD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.serialNumber1}
                    </a>
                  </td>
                  <td class="table-light">{posts.deliveryCharges}</td>
                  <td class="table-light">{posts.totalShippingCost}</td>
                  <td class="table-light">{posts.Total}</td>

                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/EKP/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' classname="opacity-80" style={{ maxWidth: '22rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/CKP" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Payment
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashstore" >
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



