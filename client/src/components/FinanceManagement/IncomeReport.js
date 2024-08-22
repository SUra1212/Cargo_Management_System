//class components
import React, { Component } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class IncomeReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incomes: []
        };
    }

    componentDidMount() {
        this.retrieveIncomes();
    }

    retrieveIncomes() {
        axios.get("/incomes").then(res => {
            if (res.data.success) {
                this.setState({
                    incomes: res.data.existingIncome
                });

                console.log(this.state.incomes)
            }
        });
    }

    filterData(incomes, searchKey) {
        const result = incomes.filter((income) =>
            income.date.includes(searchKey) ||
            income.description.toLowerCase().includes(searchKey) ||
            income.account.toLowerCase().includes(searchKey) ||
            income.amount.toLowerCase().includes(searchKey)
        )

        this.setState({ incomes: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/incomes").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingIncome, searchKey)
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
                var fileTitle = "Income Report";
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

        doc.save('income.pdf'); //this downloads a copy of the pdf in your local instance.
    };

    render() {
        return (
            <div className="">
                <br />
                <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '7%' }}>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                        </input>
                    </form>
                </div>

                <center>
                    <h1><span class="badge text-dark opacity-90 fs-3" style={{ marginBlockStart: '-1%' }}>Income Report</span></h1>
                </center>
                <br />

                <div>
                    <table id="my-table" className="container table " >
                        <thead class="table-info">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Account</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.incomes.map((incomes, index) => (
                                <tr key={index}>
                                    <th class="table-light" scope="row">INC{index + 1}</th>
                                    <td class="table-light">
                                        <a href={`/income/${incomes._id}`} style={{ textDecoration: 'none' }}>
                                            {incomes.description}
                                        </a>
                                    </td>
                                    <td class="table-light">{incomes.date}</td>
                                    <td class="table-light">{incomes.account}</td>
                                    <td class="table-light">{incomes.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <center>
                            <MDBCard shadow='0' border='white' background='white' className='mb-3'  style={{ maxWidth: '18rem' }}>
                                <MDBCardBody >
                                    <a className="btn btn-warning text-dark " onClick={this.createPdf} >
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; Download PDF
                                    </a>
                                    <br/><br/>
                                    <a className="btn btn-warning text-dark " href="/reports" >
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Back to Reports
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </center>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>
        )
    }
}