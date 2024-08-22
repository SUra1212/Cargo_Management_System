import React, { Component } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class userrepgen extends Component{
  constructor(props){
    super(props);

    this.state={
      refunds:[]
    };
  }

  componentDidMount(){
    this.retrieveRefunds();
  }

  retrieveRefunds(){
    axios.get("/refunds").then(res=>{
      if(res.data.success){
        this.setState({
          refunds:res.data.existingPosts
        });
        console.log(this.state.refunds)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/refund/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrieveRefunds();
    })
  }

  filterData(refunds,searchKey){
    const result = refunds.filter((post) =>
      post.CustomerID.toLowerCase().includes(searchKey) ||
      post.PhoneNumber.toLowerCase().includes(searchKey) ||
      post.CargoReceivedDate.toLowerCase().includes(searchKey)||
      post.RefundGoods.toLowerCase().includes(searchKey)||
      post.ReasonforRefund.toLowerCase().includes(searchKey)
    )
    this.setState({refunds:result})
  }

  handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;
  
    axios.get("/refunds").then(res =>{
      if(res.data.success){
     
        this.filterData(res.data.existingPosts,searchKey) 
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
            var fileTitle = "Refund Details Report";
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

    doc.save('RefundDetailsreport.pdf'); //this downloads a copy of the pdf in your local instance.
};



  render(){
    return(

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
          <h1><span class="badge text-dark opacity-90 fs-3" style={{marginBlockStart:'-1%'}}>Refund Details</span></h1>
        </center>
        <div >
          <br />
          <h3><span  style={{marginLeft:'7%'}} class="badge  text-dark opacity-90 ">All Refunds</span></h3>
          <table  id="my-table" class="container table " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Cargo Received Date</th>
                <th scope="col">Refund Goods</th>
                <th scope="col">Reason for Refund</th>
                
              
              </tr>
            </thead>
            <tbody>
              {this.state.refunds.map((refunds, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/rpost/${refunds._id}`} style={{ textDecoration: 'none' }}>
                      {refunds.CustomerID}
                    </a>
                  </td>

                  <td class="table-light">{refunds.PhoneNumber}</td>
                  <td class="table-light">{refunds.CargoReceivedDate}</td>
                  <td class="table-light">{refunds.RefundGoods}</td>
                  <td class="table-light">{refunds.ReasonforRefund}</td>
                 

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
                  <a className="btn btn-warning text-dark " href="/dashuser" >
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