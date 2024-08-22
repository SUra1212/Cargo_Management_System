import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../../index.css';

export default class Reports extends Component {
    render() {
        return (
            <div className="DashBG" style={{ zIndex: 98 }}>
                <div style={{ marginBlockStart: '8%' }}>
                    <center>
                        <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Finance Management Reports</span></h1>
                    </center>
                </div>

                <div style={{ marginBlockStart: '3%', marginLeft: '20%' }}>
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle>Income Reports</MDBCardTitle>
                            <br/>
                            <center>
                                <MDBBtn href='/incomeReport' className="btn btn-warning text-dark">Generate Report</MDBBtn>
                            </center>
                        </MDBCardBody>
                    </MDBCard>
                </div>

                <div style={{ marginLeft: '57%', marginBlockStart: '-9%' }}>
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle>Expense Reports</MDBCardTitle>
                            <br/>
                            <center>
                                <MDBBtn href='/expenseReport' className="btn btn-warning text-dark">Generate Report</MDBBtn>
                            </center>
                        </MDBCardBody>
                    </MDBCard>
                </div>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center>
                    <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-85" style={{ maxWidth: '18rem' }}>
                        <MDBCardBody>
                            <a className="btn btn-warning text-dark " href="/dashfin" >
                                <i className="fas fa-hand-holding-usd"></i>&nbsp;Back to DashBoard
                            </a>
                        </MDBCardBody>
                    </MDBCard>
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
        )
    }
}