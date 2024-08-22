import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

export default class SalaryDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            salary: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/salary/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    salary: res.data.salary
                });

                console.log(this.state.salary);
            }
        });
    }

    render() {

        const { empID, empName, month, salary, hours, amount } = this.state.salary;

        return (
            <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
                <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

                    <MDBCardBody >

                        <MDBCardText>






                            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>

                                <h4>{empName}</h4><br></br>

                                <form>

                                    <label>Employee ID</label>
                                    <input className="form-control" type="text" placeholder={empID} aria-label="Disabled input example" disabled></input>

                                    <label>Salay Month</label>
                                    <input className="form-control" type="text" placeholder={month} aria-label="Disabled input example" disabled></input>

                                    <label>Basic Salary</label>
                                    <input className="form-control" type="text" placeholder={salary} aria-label="Disabled input example" disabled></input>


                                    <label>OT Hours</label>
                                    <input className="form-control" type="text" placeholder={hours} aria-label="Disabled input example" disabled></input>

                                    <label>Total Salary</label>
                                    <input className="form-control" type="text" placeholder={amount} aria-label="Disabled input example" disabled></input>



                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </form>
                            </div>
                        </MDBCardText>

                    </MDBCardBody>

                </MDBCard>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>


        )
    }
}