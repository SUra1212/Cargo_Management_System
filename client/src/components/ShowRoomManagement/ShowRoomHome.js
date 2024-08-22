import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class ShowRoomHome extends Component {
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
    axios.get("/showroom").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/showroom/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(searchKey) ||
      post.subtitle.toLowerCase().includes(searchKey) ||
      post.category.toLowerCase().includes(searchKey) ||
      post.condition.toLowerCase().includes(searchKey) ||
      post.photo.toLowerCase().includes(searchKey) ||
      post.brand.toLowerCase().includes(searchKey) ||
      post.country.toLowerCase().includes(searchKey) ||
      post.material.toLowerCase().includes(searchKey) ||
      post.description.toLowerCase().includes(searchKey) ||
      post.price.toLowerCase().includes(searchKey) ||
      post.returnoption.toLowerCase().includes(searchKey)

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/showroom").then(res => {
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>Showroom Details</span></h1>
        </center>
        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-95 ">Product Details Table</span></h3>
          <table class="table table-bordered opacity-100 " >
            <thead class="table-info">
              <tr>
                <th scope="col">Serial No</th>
                <th scope="col">Title</th>
                <th scope="col">Sub Title</th>
                <th scope="col">Category</th>
                <th scope="col">Condition</th>
                <th scope="col">Photo</th>
                <th scope="col">Brand</th>
                <th scope="col">Country</th>
                <th scope="col">Material</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">SRE23{index + 1}</th>
                  <td class="table-light">
                    <a href={`/showroompost/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.title}
                    </a>
                  </td>
                  <td class="table-light">{posts.subtitle}</td>
                  <td class="table-light">{posts.category}</td>
                  <td class="table-light">{posts.condition}</td>
                  <td class="table-light">{posts.photo}</td>
                  <td class="table-light">{posts.brand}</td>
                  <td class="table-light">{posts.country}</td>
                  <td class="table-light">{posts.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table class="table table-bordered opacity-95 " >
            <thead class="table-info">
              <tr>
                <th scope="col" >Serial No</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price (LKR)</th>
                <th scope="col">Return Option</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">SRE23{index + 1}</th>
                  <td class="table-light">
                    <a href={`/showroompost/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.title}
                    </a>
                  </td>
                  <td class="table-light">{posts.description}</td>
                  <td class="table-light">{posts.price}</td>
                  <td class="table-light">{posts.returnoption}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/showroomedit/${posts._id}`}>
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
         
          
          <div>

          <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '22rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/showroomadd" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Listing
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
         
        </div>
       
      </div>
    )
  }
}














