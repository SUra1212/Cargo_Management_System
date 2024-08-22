import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class StoreReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }


  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/koreanPayment").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/koreanPayment/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.serialNumber1.toLowerCase().includes(searchKey) ||
      post.Name.toLowerCase().includes(searchKey) ||
      post.Contact.toLowerCase().includes(searchKey) ||
      post.Email.toLowerCase().includes(searchKey) ||
      post.pNo1.toLowerCase().includes(searchKey) ||
      post.pType1.toLowerCase().includes(searchKey) ||
      post.pWeight1.toLowerCase().includes(searchKey) ||
      post.pShippingCost1.toLowerCase().includes(searchKey) ||
      post.deliveryCharges.toLowerCase().includes(searchKey) ||
      post.totalShippingCost.toLowerCase().includes(searchKey) ||
      post.Total.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/koreanPayment").then(res => {
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
            var fileTitle = "Payment Report";
            var img = 'https://i.ibb.co/gdr6KYs/Final-cut.jpg';
            doc.text(fileTitle, 30, 250);
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

    doc.save('Payment Report.pdf'); //this downloads a copy of the pdf in your local instance.
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
          <h1><span class="badge text-dark opacity-90 fs-3" style={{ marginBlockStart: '-1%' }}>Customer Payment Report</span></h1>
        </center>




        <div >
          <br />
          <table id="my-table" class="container table " >
            <thead class="table-info">
              <tr>
                <th scope="col" >#</th>
                <th scope="col">SerialNumber</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">ProductType</th>
                <th scope="col">DeliveryCharges</th>
                <th scope="col">TotalShippingCost</th>
                <th scope="col">Total</th>

              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/KPD/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.serialNumber1}
                    </a>
                  </td>
                  <td class="table-light">{posts.Name}</td>
                  <td class="table-light">{posts.Contact}</td>
                  <td class="table-light">{posts.pType1}</td>
                  <td class="table-light">{posts.deliveryCharges}</td>
                  <td class="table-light">{posts.totalShippingCost}</td>
                  <td class="table-light">{posts.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <br></br>
          <br></br>
          <br></br>
          <div>
            <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' style={{ maxWidth: '22rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " onClick={this.createPdf} >
                  <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashstore" >
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



