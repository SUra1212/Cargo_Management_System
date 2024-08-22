import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class OwnerReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    this.retrievEmployees();
  }

  retrievEmployees() {
    axios.get("/employees").then(res => {
      if (res.data.success) {
        this.setState({
          employees: res.data.existingEmployee
        });

        console.log(this.state.employees)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/employee/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievEmployees();
    })
  }

  filterData(employees, searchKey) {
    const result = employees.filter((employee) =>
      employee.phone.includes(searchKey) ||
      employee.EmpID.toLowerCase().includes(searchKey) ||
      employee.EmpID.includes(searchKey) ||
      employee.firstName.toLowerCase().includes(searchKey) ||
      employee.firstName.includes(searchKey) ||
      employee.department.toLowerCase().includes(searchKey) ||
      employee.email.toLowerCase().includes(searchKey) ||
      employee.position.toLowerCase().includes(searchKey) ||
      employee.empStatus.toLowerCase().includes(searchKey) ||
      employee.department.includes(searchKey) ||
      employee.email.includes(searchKey) ||
      employee.position.includes(searchKey) ||
      employee.empStatus.includes(searchKey)
    )

    this.setState({ employees: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/employees").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingEmployee, searchKey)
      }
    });
  }


  createPdf = (pdfBody) => {

    var doc = new jsPDF('portrait', 'px', 'a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
      didDrawPage: function (data) {

        // Header
        doc.setFontSize(14);
        var fileTitle = "Employee Report";
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

    doc.save('Employee Report.pdf'); //this downloads a copy of the pdf in your local instance.
  };

  render() {

    return (

      <div className="" >
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
          <h1><span class="badge  text-dark opacity-90 fs-3" style={{ marginBlockStart: '-1%' }}>Employee Details Report</span></h1>
        </center>
        <br />




        <div >
          <table id="my-table" class=" container table" >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Position</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employees, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/employeeDet/${employees._id}`} style={{ textDecoration: 'none' }}>
                      {employees.EmpID}
                    </a>
                  </td>
                  <td class="table-light">{employees.firstName}</td>
                  <td class="table-light">{employees.email}</td>
                  <td class="table-light">{employees.phone}</td>
                  <td class="table-light">{employees.position}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <br></br>
          <br></br>
          <br></br>
          <div>

            <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' style={{ maxWidth: '25rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " onClick={this.createPdf} >
                    <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/dashowner" >
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