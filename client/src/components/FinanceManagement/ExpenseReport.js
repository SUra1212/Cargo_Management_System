import React, { Component } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

export default class ExpenseReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        };
    }

    componentDidMount() {
        this.retrieveExpenses();
    }

    retrieveExpenses() {
        axios.get("/expenses").then(res => {
            if (res.data.success) {
                this.setState({
                    expenses: res.data.existingExpense
                });

                console.log(this.state.expenses)
            }
        });
    }

    filterData(expenses, searchKey) {
        const result = expenses.filter((expense) =>
            expense.date.includes(searchKey) ||
            expense.description.toLowerCase().includes(searchKey) ||
            expense.account.toLowerCase().includes(searchKey) ||
            expense.amount.toLowerCase().includes(searchKey)
        )

        this.setState({ expenses: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/expenses").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingExpense, searchKey)
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
                var fileTitle = "Expense Report";
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

        doc.save('expense.pdf'); //this downloads a copy of the pdf in your local instance.
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
                    <h1><span class="badge text-dark opacity-90 fs-3" style={{ marginBlockStart: '-1%' }}>All Expenses</span></h1>
                </center>


                <div>
                    <table id="my-table" className="container table table-bordered " style={{ marginTop: '40px' }}>
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
                            {this.state.expenses.map((expenses, index) => (
                                <tr key={index}>
                                    <th class="table-light" scope="row">EXP{index + 1}</th>
                                    <td class="table-light">{expenses.description}</td>
                                    <td class="table-light">{expenses.date}</td>
                                    <td class="table-light">{expenses.account}</td>
                                    <td class="table-light">{expenses.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <center>
                            <MDBCard shadow='0' border='white' background='white' className='mb-3' style={{ maxWidth: '18rem' }}>
                                <MDBCardBody >
                                    <a className="btn btn-warning text-dark " onClick={this.createPdf}>
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; Download PDF
                                    </a>
                                    <br /><br />
                                    <a className="btn btn-warning text-dark " href="/reports" >
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Back to Reports
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </center>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}