import { Pie } from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            incomes: [],
            totalIncomes: "",
            totalOutcomes: "",
            month: "",
            balance: ""
        };
    }

    componentDidMount() {
        this.retrieveExpenses();
        this.retrieveIncomes();
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


    filterData(expenses, searchKey) {
        const result = expenses.filter((expense) =>
            expense.date.includes(searchKey) ||
            expense.description.toLowerCase().includes(searchKey) ||
            expense.account.toLowerCase().includes(searchKey) ||
            expense.amount.toLowerCase().includes(searchKey)
        )

        this.setState({ expenses: result })
    }

    filterDataIncome(incomes, searchKey) {
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

        axios.get("/expenses").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingExpense, searchKey)
            }
        });
        axios.get("/incomes").then(res => {
            if (res.data.success) {
                this.filterDataIncome(res.data.existingIncome, searchKey)
            }
        });
    }

    render() {

        const total = (this.state.expenses.reduce((total, currentItem) => total = total + parseInt(currentItem.amount), 0));

        const totalIncome = (this.state.incomes.reduce((totalIncome, currentItem) => totalIncome = totalIncome + parseInt(currentItem.amount), 0));

        const tableBody = this.state.expenses.map((item =>
            <tr key={item.description}><td class="table-light">{item.description}</td><td class="table-light">{item.date}</td><td class="table-light">{item.account}</td><td class="table-light">{item.amount}</td>
            </tr>
        ));
        const tableBodyOutcome = this.state.incomes.map((item =>
            <tr key={item.description}><td class="table-light">{item.description}</td><td class="table-light">{item.date}</td><td class="table-light">{item.account}</td><td class="table-light">{item.amount}</td>
            </tr>
        ));

        return (

            <div className="Khome" >

                <br />
                <div style={{ width: '20%', marginLeft: '0.5%', marginBlockStart: '8%' }}>
                    <form className="d-flex">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" onChange={this.handleSearchArea}>
                        </input>
                    </form>
                </div>

                <div style={{ width: '25.2%', marginLeft: '74%', marginBlockStart: '-3%' }}>
                    <center>
                        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-80" style={{ maxWidth: '65rem' }}>
                            <MDBCardBody>
                                <div style={{ display: 'flex' }}>
                                    <a className="btn btn-warning text-dark " href="/AllIncomes" style={{ fontSize: '14px' }}>
                                        <i class="fa fa-list-alt" aria-hidden="true"></i>&nbsp;Incomes
                                    </a>
                                    <div>&nbsp;</div>
                                    <a className="btn btn-warning text-dark " href="/AllExpenses" style={{ fontSize: '14px' }}>
                                        <i className="fa fa-list-alt"></i>&nbsp;Expenses
                                    </a>
                                    <div>&nbsp;</div>
                                    <a className="btn btn-warning text-dark " href="/dashfin" style={{ fontSize: '14px' }}>
                                        <i className="fas fa-hand-holding-usd"></i>&nbsp;DashBoard
                                    </a>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </center>
                </div>

                <center>
                    <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '-1%' }}>Transactions</span></h1>
                </center>
                <br />

                <div style={{ marginBlockStart: '2%' }}>
                    <table class="table table-bordered " style={{ width: '33%', marginLeft: '0.5%', float: 'left', marginRight: '8px' }}>
                        <thead class="table-info">
                            <tr class="table-info" >
                                <td colspan="4">
                                    <h5 style={{ color: "black", textAlign: "center" }}>
                                        Expenses
                                    </h5>
                                </td>
                            </tr>
                            <tr style={{ borderTopWidth: '5px', borderTopColor: 'black' }}>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Account</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>{tableBody}
                        </tbody>
                        <tfoot>
                            <tr class="table-info">
                                <td colspan="4">
                                    <h6 style={{ color: "red", textAlign: "right" }}>
                                        Total Outcomes : {total}
                                    </h6>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <table class="table table-bordered " style={{ width: '33%', float: 'left', marginRight: '8px' }}>
                        <thead class="table-info">
                            <tr class="table-info">
                                <td colspan="4">
                                    <h5 style={{ color: "black", textAlign: "center" }}>
                                        Incomes
                                    </h5>
                                </td>
                            </tr>
                            <tr style={{ borderTopWidth: '5px', borderTopColor: 'black' }}>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Account</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>{tableBodyOutcome}
                        </tbody>
                        <tfoot>
                            <tr class="table-info">
                                <td colspan="4">
                                    <h6 style={{ color: "red", textAlign: "right" }}>
                                        Total Incomes : {totalIncome}
                                    </h6>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <MDBCard className="opacity-90" style={{ maxWidth: '30rem', height: '23rem' }}>

                    <MDBCardBody >

                        <center>
                            <MDBCardTitle>Progress Chart</MDBCardTitle>
                        </center>

                        <MDBCardText >

                            <div style={{ marginBlockStart: '3%' }}>
                                <center>
                                    <div style={{
                                        display: 'flex', height: '100px',
                                        width: '50%', justifyContent: 'center', alignItems: 'center',
                                        flexDirection: 'column', marginTop: '100px'
                                    }}>

                                        <Pie
                                            data={{
                                                labels: ['Expense', 'Income'],
                                                datasets: [
                                                    {
                                                        label: '# expense',
                                                        data: [total, totalIncome],
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                        borderWidth: 1,
                                                    },

                                                ],
                                            }}
                                        />
                                    </div>
                                </center>
                                <br></br>
                            </div>
                        </MDBCardText>

                    </MDBCardBody>

                </MDBCard>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        )
    }
}
