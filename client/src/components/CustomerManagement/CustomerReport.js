import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class CustomerReport extends Component {
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


  createPdf = (pdfBody) => {

    var doc = new jsPDF('portrait','px','a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(14);
            var fileTitle = "Customer report";
            var img = 'https://i.ibb.co/gdr6KYs/Final-cut.jpg';
            doc.text(fileTitle, 30,250);
            doc.addImage(img, 'JPEG', 2, 2, 628, 200);

            // Footer
            var pageSize = doc.internal.pageSize;
            //jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 630,
                theme: 'grid'
            });

            var str = "Page " + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);
            doc.text(str, data.settings.margin.left, pageHeight - 10);
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('Customer report.pdf'); //this downloads a copy of the pdf in your local instance.
};


  render() {
    return (
      <div className="">
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
          <h1><span class="badge text-dark opacity-90 fs-3" style={{marginBlockStart:'-1%'}}>Customer Details</span></h1>
        </center>
        <div >
          <br />
          <h3><span class="badge bg-warning text-dark opacity-90 "></span></h3>
          <table   id="my-table" class="container table " >
            <thead class="table-info">
              <tr>
                <th scope="col">No</th>
                <th scope="col">First Name</th>
                <th scope="col">Email</th>
                <th scope="col">NIC</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
             
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
                  <td class="table-light">{posts.email}</td>
                  <td class="table-light">{posts.nic}</td>
                  <td class="table-light">{posts.phone}</td>
                  <td class="table-light">{posts.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>

          <div>
            <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' style={{ maxWidth: '22rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " onClick={this.createPdf}>
                  <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
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