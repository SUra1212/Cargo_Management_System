import React, { Component } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class ReceiverReport extends Component {
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
    axios.get("/dlankan").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    });
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
      post.province.toLowerCase().includes(searchKey) ||
      post.sno.toLowerCase().includes(searchKey) ||
      post.grossW.toLowerCase().includes(searchKey) ||
      post.totalItems.toLowerCase().includes(searchKey) ||
      post.tax.toLowerCase().includes(searchKey) ||
      post.custom.toLowerCase().includes(searchKey) ||
      post.delivery.toLowerCase().includes(searchKey) ||
      post.fullPay.toLowerCase().includes(searchKey) ||
      post.status.toLowerCase().includes(searchKey) ||
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

  createPdf = (pdfBody) => {

    var doc = new jsPDF('portrait','px','a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(14);
            var fileTitle = "Receiver Report";
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

    doc.save('Receiver Report.pdf'); //this downloads a copy of the pdf in your local instance.
};






  render() {
    return (


      <div className="">
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
          <h1><span class="badge  text-dark opacity-90 fs-3" style={{ marginBlockStart: '-1%' }}>Receiver Payment Report</span></h1>
        </center>

        <br></br>
       
       <h3><span style={{marginLeft: '7%'}} class="badge  text-dark opacity-90 "> Tariffs for receiver</span></h3>
        <table id="my-table" class=" container table table-bordered ">
          <thead class="table-info">
            <tr>
              <th scope="col" >#</th>
              <th scope="col">SerialNumber</th>
              <th scope="col">ReceiverName</th>
              <th scope="col">ReceiverNIC</th>
              <th scope="col">TaxCharges</th>
              <th scope="col">CustomCharges</th>
              <th scope="col">DeliveryCharges</th>
              <th scope="col">FullPayment</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th class="table-light" scope="row">{index + 1}</th>
                
                <td class="table-light">
                  <a href={`/DSLCD/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.sno}
                  </a>
                </td>
                <td class="table-light">{posts.Rname}</td>
                <td class="table-light">{posts.RNIC}</td>
                <td class="table-light">{posts.tax}</td>
                <td class="table-light">{posts.custom}</td>
                <td class="table-light">{posts.delivery}</td>
                <td class="table-light">{posts.fullPay}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>

        <div>
          <center>
            <MDBCard shadow='0' border='white' background='white' className='mb-3'  style={{ maxWidth: '26rem' }}>
              <MDBCardBody >

                <a className="btn btn-warning text-dark "  onClick={this.createPdf}>
                <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
                  
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
