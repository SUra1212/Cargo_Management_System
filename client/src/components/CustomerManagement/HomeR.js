import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class HomeR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/receiver").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
  
       console.log(this.state.posts);
      }
  
  
    });
  }

  onDelete = (id) =>{

    axios.delete(`/receiver/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.cfname.toLowerCase().includes(searchKey) ||
      post.clname.toLowerCase().includes(searchKey) ||
      post.cemail.toLowerCase().includes(searchKey) ||
      post.cnic.toLowerCase().includes(searchKey) ||
      post.cphone.toLowerCase().includes(searchKey) ||
      post.rfname.toLowerCase().includes(searchKey) ||
      post.rlname.toLowerCase().includes(searchKey) ||
      post.remail.toLowerCase().includes(searchKey) ||
      post.rnic.toLowerCase().includes(searchKey) ||
      post.rphone.toLowerCase().includes(searchKey) ||
      post.raddress.toLowerCase().includes(searchKey) ||
      post.rsaddress.toLowerCase().includes(searchKey) ||
      post.rcity.toLowerCase().includes(searchKey) ||
      post.rprovince.toLowerCase().includes(searchKey) ||
      post.rzip.toLowerCase().includes(searchKey)


    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/receiver").then(res => {
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Cargo Transport Details</span></h1>
        </center>

        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-90 ">Customer Details</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">NIC</th>
                <th scope="col">Phone</th>
                
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/RD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.cfname}
                    </a>
                  </td>
                  <td class="table-light">{posts.clname}</td>
                  <td class="table-light">{posts.cemail}</td>
                  <td class="table-light">{posts.cnic}</td>
                  <td class="table-light">{posts.cphone}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          

          <h3><span class="badge bg-warning text-dark opacity-90 ">Receiver Details</span></h3>
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
                    <a href={`/RD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.rfname}
                    </a>
                  </td>
                  <td class="table-light">{posts.rlname}</td>
                  <td class="table-light">{posts.remail}</td>
                  <td class="table-light">{posts.rnic}</td>
                  <td class="table-light">{posts.rphone}</td>
                  <td class="table-light">{posts.raddress}</td>
                  <td class="table-light">{posts.rsaddress}</td>
                  <td class="table-light">{posts.rcity}</td>
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
                    <a href={`/RD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.rfname}
                    </a>
                  </td>
                  <td class="table-light">{posts.rprovince}</td>
                  <td class="table-light">{posts.rzip}</td>

                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/ER/${posts._id}`}>
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '23rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/CR" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Receiver
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