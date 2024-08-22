import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class fHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacks: []
    };
  }

  componentDidMount() {
    this.retrieveFeedbacks();
  }

  retrieveFeedbacks() {
    axios.get("/feedbacks").then(res => {
      if (res.data.success) {
        this.setState({
          feedbacks: res.data.existingFeedbacks
        });
        console.log(this.state.feedbacks);
      }
    });
  }
  onDelete = (id) => {

    axios.delete(`/feedback/delete/${id}`).then((res) => {
      alert("Deleted Feedback")
      this.retrieveFeedbacks();
    })
  }
  filterData(feedbacks, searchKey) {

    const result = feedbacks.filter((post) =>
      post.Category.toLowerCase().includes(searchKey) ||
      post.Rate.toLowerCase().includes(searchKey) ||
      post.Email.toLowerCase().includes(searchKey) ||
      post.Feedback.toLowerCase().includes(searchKey)
    )

    this.setState({ feedbacks: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/feedbacks").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingFeedbacks, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="Khome">
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
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{ marginBlockStart: '-1%' }}>All Feedbacks</span></h1>
        </center>
        <div >
          <br />
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Category</th>
                <th scope="col">Rate</th>
                <th scope="col">Email</th>
                <th scope="col">Feedback</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.feedbacks.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                      <td class="table-light">{posts.Category}</td>
                    </a>
                  </td>
                  <td class="table-light">{posts.Rate}</td>
                  <td class="table-light">{posts.Email}</td>
                  <td class="table-light">{posts.Feedback}</td>
                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/fedit/${posts._id}`}>
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

                  <a className="btn btn-warning text-dark " href="/fadd" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Feedback
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashuser" >
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