import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class HomeKwarehouse extends Component {
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
    axios.get("/koreanWarehouse").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/koreanWarehouse/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.serialNumber.toLowerCase().includes(searchKey) ||
      post.receiverName.toLowerCase().includes(searchKey) ||
      post.receiverContact.toLowerCase().includes(searchKey) ||
      post.receiverEmail.toLowerCase().includes(searchKey) ||
      post.receiverAddress.toLowerCase().includes(searchKey) ||
      post.receiverProvince.toLowerCase().includes(searchKey) ||
      post.receiverDistrict.toLowerCase().includes(searchKey) ||
      post.receiverCity.toLowerCase().includes(searchKey) ||
      post.senderName.toLowerCase().includes(searchKey) ||
      post.senderContact.toLowerCase().includes(searchKey) ||
      post.senderEmail.toLowerCase().includes(searchKey) ||
      post.senderAddress.toLowerCase().includes(searchKey) ||
      post.senderProvince.toLowerCase().includes(searchKey) ||
      post.senderDistrict.toLowerCase().includes(searchKey) ||
      post.senderCity.toLowerCase().includes(searchKey) ||
      post.pNo.toLowerCase().includes(searchKey) ||
      post.pType.toLowerCase().includes(searchKey) ||
      post.pWeight.toLowerCase().includes(searchKey) ||
      post.pShippingCost.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/koreanWarehouse").then(res => {
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1">All Cargo Information</span></h1>
        </center>



        <br></br>
        <h3><span class="badge bg-warning text-dark opacity-90 " style={{marginBlockStart:'-1%'}}>Reciver Information</span></h3>
        <table className="table table-bordered">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
              <th scope="col">ReceiverName</th>
              <th scope="col">ReceiverContact</th>
              <th scope="col">ReceiverEmail</th>
              <th scope="col">ReceiverAddress</th>
              <th scope="col">Province</th>
              <th scope="col">District</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) =>
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Receiver Information</th>
                <td class="table-light">
                  <a href={`/KHD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.serialNumber}
                  </a>
                </td>
                <td class="table-light">{posts.receiverName}</td>
                <td class="table-light">{posts.receiverContact}</td>
                <td class="table-light">{posts.receiverEmail}</td>
                <td class="table-light">{posts.receiverAddress}</td>
                <td class="table-light">{posts.receiverProvince}</td>
                <td class="table-light">{posts.receiverDistrict}</td>
                <td class="table-light">{posts.receiverCity}</td>
              </tr>
            )}
          </tbody>
        </table>

        <h3><span class="badge bg-warning text-dark opacity-90 ">Sender Information</span></h3>
        <table class="table table-bordered ">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
              <th scope="col">SenderName</th>
              <th scope="col">SenderContact</th>
              <th scope="col">SenderEmail</th>
              <th scope="col">SenderAddress</th>
              <th scope="col">Province</th>
              <th scope="col">District</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Sender Information</th>
                <td class="table-light">
                  <a href={`/KHD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.serialNumber}
                  </a>
                </td>
                <td class="table-light">{posts.senderName}</td>
                <td class="table-light">{posts.senderContact}</td>
                <td class="table-light">{posts.senderEmail}</td>
                <td class="table-light">{posts.senderAddress}</td>
                <td class="table-light">{posts.senderProvince}</td>
                <td class="table-light">{posts.senderDistrict}</td>
                <td class="table-light">{posts.senderCity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3><span class="badge bg-warning text-dark opacity-90 ">Product Details</span></h3>
        <table class="table table-bordered ">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
              <th scope="col">ProductNo</th>
              <th scope="col">ProductType</th>
              <th scope="col">Weight</th>
              <th scope="col">ShippingCost</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Product Details</th>
                <td class="table-light">
                  <a href={`/KHD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.serialNumber}
                  </a>
                </td>
                <td class="table-light">{posts.pNo}</td>
                <td class="table-light">{posts.pType}</td>
                <td class="table-light">{posts.pWeight}</td>
                <td class="table-light">{posts.pShippingCost}</td>
                <td class="table-light">
                  <a className="btn btn-warning text-dark" href={`/EKW/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
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

        <div>
          <center>
            <MDBCard shadow='0' border='white' background='white' className='mb-3' classname="opacity-80" style={{ maxWidth: '22rem' }}>
              <MDBCardBody >

                <a className="btn btn-warning text-dark " href="/CKW" >
                  <i className="fas fa-user-plus"></i>&nbsp;Add New Cargo
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
    )
  }
}