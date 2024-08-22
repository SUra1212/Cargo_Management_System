import { Pie } from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default class Profit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            incomes: [],
            totalIncomes: "",
            totalOutcomes: "",
            month: "",
            balance: "",
            profit: ""
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


    render() {

        const total = (this.state.expenses.reduce((total, currentItem) => total = total + parseInt(currentItem.amount), 0));

        const totalIncome = (this.state.incomes.reduce((totalIncome, currentItem) => totalIncome = totalIncome + parseInt(currentItem.amount), 0));

        const profit = totalIncome - total;

        return (

            <div className="Khome">

                <div className="DashBG" style={{ zIndex: 98 }}>
                    <div style={{ marginBlockStart: '7%' }}>
                        <center>
                            <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Profit Chart</span></h1>
                        </center>
                    </div>

                    <center>

                        <div style={{ marginBlockStart: '5%' }}>

                            <MDBCard className="opacity-90" style={{ maxWidth: '30rem', height: '35rem' }}>

                                <MDBCardBody >

                                    <center>
                                        <MDBCardTitle>Profit Chart</MDBCardTitle>
                                    </center>

                                    <MDBCardText>

                                        <div style={{ marginBlockStart: '3%' }}>
                                            <center>
                                                <div style={{
                                                    display: 'flex', height: '150px',
                                                    width: '70%', justifyContent: 'center', alignItems: 'center',
                                                    flexDirection: 'column', marginTop: '100px'
                                                }}>

                                                    <Pie
                                                        data={{
                                                            labels: ['Expense', 'Income', 'profit'],
                                                            datasets: [
                                                                {
                                                                    label: '# expense',
                                                                    data: [total, totalIncome, profit],
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

                                    <MDBCardText style={{ marginTop: '20%' }}>
                                        <h6 style={{ color: 'black' }}>Total Incomes : <span style={{ color: 'blue' }}> {totalIncome}</span></h6>
                                    </MDBCardText>
                                    <MDBCardText >
                                        <h6 style={{ color: 'black' }}>Total Expenses : <span style={{ color: 'red' }}> {total}</span></h6>
                                    </MDBCardText>
                                    <MDBCardText >
                                        <h6 style={{ color: 'black' }}>Profit : <span style={{ color: 'orange' }}> {profit}</span></h6>
                                    </MDBCardText>

                                </MDBCardBody>

                            </MDBCard>
                        </div>

                    </center>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}
