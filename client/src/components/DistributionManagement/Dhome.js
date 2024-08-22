import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class Dhome extends Component {
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
  axios.get("/dlankan").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
 
      console.log(this.state.posts)
    }
  });
}

onDelete = (id) =>{
   axios.delete(`/dlankan/delete/${id}`).then((res) =>{
     alert("Deleted Successfully");
     this.retrievePosts();
   }) 
}

filterData(posts, searchKey) {

  const result = posts.filter((post) =>
    post.Sname.toLowerCase().includes(searchKey) ||
    post.pno.toLowerCase().includes(searchKey) ||
    post.Rname.toLowerCase().includes(searchKey) ||
    post.RNIC.toLowerCase().includes(searchKey) ||
    post.Radd.toLowerCase().includes(searchKey) ||
    post.city.toLowerCase().includes(searchKey) ||
    post.district.toLowerCase().includes(searchKey) ||
    post.province.toLowerCase().includes(searchKey)||
    post.sno.toLowerCase().includes(searchKey)||
    post.grossW.toLowerCase().includes(searchKey)||
    post.totalItems.toLowerCase().includes(searchKey)||
    post.tax.toLowerCase().includes(searchKey)||
    post.custom.toLowerCase().includes(searchKey)||
    post.delivery.toLowerCase().includes(searchKey)||
    post.fullPay.toLowerCase().includes(searchKey)||
    post.status.toLowerCase().includes(searchKey)||
    post.ddate.toLowerCase().includes(searchKey)
  )
  this.setState({ posts: result })
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;

  axios.get("/dlankan").then(res => {
    if (res.data.success) {
      this.filterData(res.data.existingPosts, searchKey)
    }
  });

}


  render() {
    return (
      
     
      <div className="Khome">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%'  }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>





        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{marginBlockStart:'-1%'}}>All Cargo Dispatch Details</span></h1>
        </center>



        <br></br>
        <h3><span class="badge bg-warning text-dark opacity-90 ">Information</span></h3>
        <table className="table table-bordered">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
              <th scope="col">SenderName</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">ReceiverName</th>
               <th scope="col">ReceiverNIC</th>
              <th scope="col">ReceiverAddress</th>
              <th scope="col">City</th>
               <th scope="col">District</th>
               <th scope="col">Province</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) =>
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Info</th>
                <td class="table-light">
                  <a href={`/DSLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.sno}
                  </a>
                </td>
                <td class="table-light">{posts.Sname}</td>
                <td class="table-light">{posts.pno}</td>
                <td class="table-light">{posts.Rname}</td>
                <td class="table-light">{posts.RNIC}</td>
                <td class="table-light">{posts.Radd}</td>
                <td class="table-light">{posts.city}</td>
                <td class="table-light">{posts.district}</td>
                <td class="table-light">{posts.province}</td>
              </tr>
            )}
          </tbody>
        </table>

        <h3><span class="badge bg-warning text-dark opacity-90 ">Product Information</span></h3>
        <table class="table table-bordered ">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
              <th scope="col">GrossWeight</th>
            <th scope="col">NoOfItems</th>
                <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Product info</th>
                <td class="table-light">
                  <a href={`/DSLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.sno}
                  </a>
                </td>
                <td class="table-light">{posts.grossW}</td>
                <td class="table-light">{posts.totalItems}</td>
                <td class="table-light">{posts.status}</td>
                <td class="table-light">{posts.ddate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3><span class="badge bg-warning text-dark opacity-90 ">Tariffs for receiver</span></h3>
        <table class="table table-bordered ">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col"></th>
              <th scope="col">SerialNumber</th>
             <th scope="col">TaxCharges</th>
             <th scope="col">CustomCharges</th>
             <th scope="col">DeliveryCharges</th>
            <th scope="col">FullPayment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                <th class="table-primary">Tariffs</th>
                <td class="table-light">
                  <a href={`/DSLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.sno}
                  </a>
                </td>
                <td class="table-light">{posts.tax}</td>
                <td class="table-light">{posts.custom}</td>
                <td class="table-light">{posts.delivery}</td>
                <td class="table-light">{posts.fullPay}</td>
                <td class="table-light">
                  <a className="btn btn-warning text-dark" href={`/DESL/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  &nbsp;
                  <a className="btn btn-danger text-dark " onClick={() => this.onDelete(posts._id)} >
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
            <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '27rem' }}>
              <MDBCardBody >

                <a className="btn btn-warning text-dark " href="/DCSL" >
                  <i className="fas fa-user-plus"></i>&nbsp;Create new Dispatch Details
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

    )

  }
}
