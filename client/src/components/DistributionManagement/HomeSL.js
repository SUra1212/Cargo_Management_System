import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class HomeSL extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }


retrievePosts(){
  axios.get("/lankan").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
 
      console.log(this.state.posts)
    }
  });
}

onDelete = (id) =>{
   axios.delete(`/lankan/delete/${id}`).then((res) =>{
     alert("Deleted Successfully");
     this.retrievePosts();
   }) 
}

filterData(posts, searchKey) {

  const result = posts.filter((post) =>
    post.serialNumber.toLowerCase().includes(searchKey) ||
    post.phoneNo.toLowerCase().includes(searchKey) ||
    post.receiverName.toLowerCase().includes(searchKey) ||
    post.receiverNIC.toLowerCase().includes(searchKey) ||
    post.serialNumber.toLowerCase().includes(searchKey) ||
    post.warehouseType.toLowerCase().includes(searchKey) ||
    post.totItems.toLowerCase().includes(searchKey) ||
    post.gWeight.toLowerCase().includes(searchKey)||
    post.date.toLowerCase().includes(searchKey)||
    post.time.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)
  )
  this.setState({ posts: result })
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("/lankan").then(res => {
    if (res.data.success) {
      this.filterData(res.data.existingPosts, searchKey)
    }
  });

}



  render() {
    return (


      <div className="Khome">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%'   }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>





        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{marginBlockStart:'-1%'}}>All Cargo Warehousing Details</span></h1>
        </center>




        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-90 ">Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
               <th scope="col">SenderName</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">ReceiverName</th>
              <th scope="col">ReceiverNIC</th>
              
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <th class="table-primary">Info</th>
                  <td class="table-light">
                    <a href={`/SLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.serialNumber}
                    </a>
                  </td>
                  <td class="table-light">{posts.senderName}</td>
                  <td class="table-light">{posts.phoneNo}</td>
                  <td class="table-light">{posts.receiverName}</td>
                  <td class="table-light">{posts.receiverNIC}</td>
                </tr>
              ))}
            </tbody>
          </table>



          <h3><span class="badge bg-warning text-dark opacity-90 ">Cargo Arrival Details</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col" >#</th>
                <th scope="col"></th>
                <th scope="col">SerialNumber</th>
                <th scope="col">WarehouseType</th>
            <th scope="col">NoOfItems</th>
             <th scope="col">GrossWeight</th>
               <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Description</th>
               <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <th class="table-primary">Cargo Arrival</th>
                  <td class="table-light">
                    <a href={`/SLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.serialNumber}
                    </a>
                  </td>
                  <td class="table-light">{posts.warehouseType}</td>
                  <td class="table-light">{posts.totItems}</td>
                  <td class="table-light">{posts.gWeight}</td>
                  <td class="table-light">{posts.date}</td>
                  <td class="table-light">{posts.time}</td>
                  <td class="table-light">{posts.description}</td>
                  

                  <td class="table-light">
                    <a className="btn btn-warning text-dark " href={`/ESL/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger text-dark " onClick={() => this.onDelete(posts._id)}>
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
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '29rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " href="/CSL" >
                    <i className="fas fa-user-plus"></i>&nbsp;Create New Warehousing Details
                  </a>
                  &nbsp;
                <a className="btn btn-warning text-dark " href="/dashdis" >
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
