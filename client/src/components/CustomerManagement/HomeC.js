import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class HomeC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/customer").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }


    });
  }

  onDelete = (id) => {

    axios.delete(`/customer/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.fname.toLowerCase().includes(searchKey) ||
      post.lname.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.nic.toLowerCase().includes(searchKey) ||
      post.phone.toLowerCase().includes(searchKey) ||
      post.address.toLowerCase().includes(searchKey) ||
      post.saddress.toLowerCase().includes(searchKey) ||
      post.city.toLowerCase().includes(searchKey) ||
      post.province.toLowerCase().includes(searchKey) ||
      post.zip.toLowerCase().includes(searchKey)


    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/customer").then(res => {
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Customer Details</span></h1>
        </center>
        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-90 "></span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">NIC</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/PD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.fname}
                    </a>
                  </td>
                  <td class="table-light">{posts.lname}</td>
                  <td class="table-light">{posts.email}</td>
                  <td class="table-light">{posts.nic}</td>
                  <td class="table-light">{posts.phone}</td>
                  <td class="table-light">{posts.address}</td>
                  <td class="table-light">{posts.saddress}</td>
                  <td class="table-light">{posts.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col" >No</th>
                <th scope="col">First Name</th>
                <th scope="col">Province</th>
                <th scope="col">ZIP</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/PD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.fname}
                    </a>
                  </td>
                  <td class="table-light">{posts.province}</td>
                  <td class="table-light">{posts.zip}</td>

                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/EP/${posts._id}`}>
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/CP" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Customer
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashcus" >
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
  };
};