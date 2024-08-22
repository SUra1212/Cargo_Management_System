import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class HomeDelivery extends Component {
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
    axios.get("/d_detail").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/d_detail/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }


  filterData(posts, searchKey) {

    const result = posts.filter((posts) =>
      posts.d_Id.toLowerCase().includes(searchKey) ||
      posts.driverName.toLowerCase().includes(searchKey) ||
      posts.driverPhone.toLowerCase().includes(searchKey) ||
      posts.dStatus.toLowerCase().includes(searchKey) ||
      posts.senderName.toLowerCase().includes(searchKey) ||
      posts.receiverName.toLowerCase().includes(searchKey) ||
      posts.receiverAddress.toLowerCase().includes(searchKey) ||
      posts.receiverPhone.toLowerCase().includes(searchKey)

    )

    this.setState({ posts: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/d_detail").then(res => {
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>All Delivery Details</span></h1>
        </center>
        <div >
          <br />
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Driver ID</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Driver Contact</th>
                <th scope="col">Delivery Status</th>
                <th scope="col">Sender's Name</th>
                <th scope="col">Receiver's Name</th>
                <th scope="col">Receiver's Address</th>
                <th scope="col">Receiver Contact</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/DD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      <td>{posts.d_Id}</td>
                    </a>
                  </td>
                  <td class="table-light">{posts.driverName}</td>
                  <td class="table-light">{posts.driverPhone}</td>
                  <td class="table-light">{posts.dStatus}</td>
                  <td class="table-light">{posts.senderName}</td>
                  <td class="table-light">{posts.receiverName}</td>
                  <td class="table-light">{posts.receiverAddress}</td>
                  <td class="table-light">{posts.receiverPhone}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/ED/${posts._id}`}>
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/CD" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Delivery Details
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashdeli" >
                    Dash Board
                  </a>
                </MDBCardBody>
              </MDBCard>
            </center>
           

          </div>
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
      </div>

    )
  }
}

