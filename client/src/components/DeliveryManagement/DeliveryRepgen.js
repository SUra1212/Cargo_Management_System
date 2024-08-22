import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class DeliveryRepgen extends Component {
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
  createPdf = (pdfBody) => {

    var doc = new jsPDF();
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(14);
            var fileTitle = "Delivery Details Report";
            var img = 'https://i.ibb.co/gdr6KYs/Final-cut.jpg';
            doc.text(fileTitle, 15, 95);
            doc.addImage(img, 'JPEG', 2, 2, 206, 80);

            // Footer
            var pageSize = doc.internal.pageSize;
            //jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 200,
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

    doc.save('DeliveryDetailsreport.pdf'); //this downloads a copy of the pdf in your local instance.
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
          <h1><span class="badge text-dark opacity-90 fs-3" style={{marginBlockStart:'-1%'}}>Delivery Details Report</span></h1>
        </center>
        <div >
          <br />
          <table  id="my-table" class=" container table " >
            <thead class="table-info">
              <tr>
               
                <th scope="col">Driver ID</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Driver Contact</th>
                <th scope="col">Delivery Status</th>
                <th scope="col">Sender's Name</th>
                <th scope="col">Receiver's Name</th>
                <th scope="col">Receiver's Address</th>
                <th scope="col">Receiver Contact</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  
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
                 
                </tr>
              ))}
            </tbody>
          </table>
          <div>

          <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3'  style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " onClick={this.createPdf}> 
                  <i className="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Download PDF
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

