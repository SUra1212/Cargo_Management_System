import React, { Component } from 'react';
import axios from 'axios';
import '../../index.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const amountRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
};

export default class AddToLedger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            incomes: [],
            SumValue: "",
            totalIncomes: "",
            totalOutcomes: "",
            month: "",
            balance: "",
            formErrors: {
                totalIncomes: "",
                totalOutcomes: ""
            }
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

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "totalIncomes":
                formErrors.salary = amountRegex.test(value) ? ""
                    : "Amount must be a decimal value";
                break;
            case "totalOutcomes":
                formErrors.advance = amountRegex.test(value) ? ""
                    : "Amount must be a decimal value";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    sumCount = (e) => {
        const SumValue = this.state.value && this.state.value.reduce((a, v) => a + v, 0);
        this.setState({ SumValue: SumValue })
    }

    filterData(expenses, searchKey) {
        const result = expenses.filter((expense) =>
            expense.date.includes(searchKey)
        )

        this.setState({ expenses: result })
    }

    filterDataIncome(incomes, searchKey) {
        const result = incomes.filter((income) =>
            income.date.includes(searchKey)
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

    onSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {

            const { totalIncomes, totalOutcomes, balance, month } = this.state;

            const data = {
                totalIncomes: totalIncomes,
                totalOutcomes: totalOutcomes,
                month: month,
                balance: balance
            }

            console.log(data)

            axios.post("/ledger/save", data).then((res) => {
                if (res.data.success) {
                    alert("Record Added Successfully")
                    this.setState(
                        {
                            totalIncomes: "",
                            totalOutcomes: "",
                            month: "",
                            balance: ""
                        }
                    )
                }
            })
        } else {
            console.error('Form Invalid');
        }
    }


    render() {

        const { formErrors } = this.state;

        const tableBody = this.state.expenses.map((item =>
            <tr key={item.description}><td class="table-light">{item.description}</td><td class="table-light">{item.date}</td><td class="table-light">{item.account}</td><td class="table-light">{item.amount}</td>
            </tr>
        ));
        const total = (this.state.expenses.reduce((total, currentItem) => total = total + parseInt(currentItem.amount), 0));

        const tableBodyOutcome = this.state.incomes.map((item =>
            <tr key={item.description}><td class="table-light">{item.description}</td><td class="table-light">{item.date}</td><td class="table-light">{item.account}</td><td class="table-light">{item.amount}</td>
            </tr>
        ));

        const totalIncome = (this.state.incomes.reduce((totalIncome, currentItem) => totalIncome = totalIncome + parseInt(currentItem.amount), 0));

        const balance = totalIncome - total;


        return (

            <div className="Khome" >

                <br />
                <div style={{ width: '20%', marginLeft: '0.5%', marginBlockStart: '8%' }}>
                    <form className="d-flex">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search by Month"
                            aria-label="Search" onChange={this.handleSearchArea}>
                        </input>
                    </form>
                </div>

                <div style={{ marginBlockStart: '2%' }}>
                    <table class="table table-bordered " style={{ width: '33%', marginLeft: '0.5%', float: 'left', marginRight: '8px' }}>
                        <thead class="table-info">
                            <tr class="table-info" >
                                <td colspan="4">
                                    <h5 style={{ color: "red", textAlign: "center" }}>
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
                                    <h5 style={{ color: "red", textAlign: "center" }}>
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

                <MDBCard className="opacity-90" style={{ maxWidth: '30rem' }}>

                    <MDBCardBody >

                        <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Add To Ledger</span></h1></center></MDBCardTitle>
                        <br />
                        <MDBCardText >

                            <div style={{ marginBlockStart: '3%' }}>
                                <form className="need-validation" noValidate>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Total Incomes</label>
                                        <input type="text"
                                            className="form-control"
                                            name="totalIncomes"
                                            placeholder="Enter Amount"
                                            value={this.state.totalIncomes = totalIncome}
                                            onChange={this.handleInputChange}
                                            readOnly />

                                        {formErrors.totalIncomes.length > 0 && (
                                            <span className="errorMessage">{formErrors.totalIncomes}</span>
                                        )}
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Total Outcomes</label>
                                        <input type="text"
                                            className="form-control"
                                            name="totalOutcomes"
                                            placeholder="Enter Amount"
                                            value={this.state.totalOutcomes = total}
                                            onChange={this.handleInputChange}
                                            readOnly />
                                        {formErrors.totalOutcomes.length > 0 && (
                                            <span className="errorMessage">{formErrors.totalOutcomes}</span>
                                        )}
                                    </div>

                                    <div className="form-group col-md-4" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Month</label>
                                        <select name="month" onChange={this.handleInputChange} value={this.state.month} defaultValue="Select Month" class="form-control">
                                            <option defaultValue>--Select Month--</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="Sepetember">Sepetember</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                    </div>


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}>Balance</label>
                                        <input type="text"
                                            className="form-control"
                                            name="balance"
                                            value={this.state.balance = balance}
                                            readOnly />
                                    </div>
                                </form>
                                <br></br>
                                <center>
                                <div style={{ display: 'flex', marginLeft:'26%' }}>
                                    <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px', fontSize:'14px' }} onClick={this.onSubmit}>
                                        <i className="far fa-check-square" ></i>
                                        &nbsp; save
                                    </a> 
                                    <div>&nbsp;&nbsp;&nbsp;</div>  
                                    <a className="btn btn-warning btn-lg text-dark" style={{ marginTop: '15px', fontSize:'14px' }} href="/cashLedger">
                                        <i className="fa fa-list-alt" ></i>
                                        &nbsp; Ledger
                                    </a>
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
                <br></br>
                <br></br>

            </div>
        )

    }
}