import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class FinanceDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Finance Management Dashboard</span></h1>
         </center>
         </div>
            
         <div style={{ marginBlockStart: '4%', marginLeft: '5%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='./income2.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Income/Expense Handler</MDBCardTitle>
              <MDBCardText>
                All the incomes and Expenses of the company is managed by this section.
              </MDBCardText>
              <div>&nbsp;</div>
              <center>
                <MDBBtn href='/Dash' className="btn btn-warning text-dark">Transactions</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '38%', marginBlockStart: '-29%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='salary.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Salary Handler</MDBCardTitle>
              <MDBCardText>
                All the employee salaries are managed by this section.
              </MDBCardText>
              <div>&nbsp;</div>
              <center>
                <MDBBtn href='/salaryDash' className="btn btn-warning text-dark">Salary</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '72%', marginBlockStart: '-29%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='budget.jpg' position='top' alt='...'/>
            <MDBCardBody>
              <MDBCardTitle>Profit Chart</MDBCardTitle>
              <MDBCardText>
              Company profit chart.
              </MDBCardText>
              <div>&nbsp;</div>
              <center>
                <MDBBtn href='/profit' className="btn btn-warning text-dark">Profit</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '21.5%', marginBlockStart: '7%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='cashled.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Cash Ledger</MDBCardTitle>
              <MDBCardText>
                Incomes, expenses and the balance for a particular month.
              </MDBCardText>
              <center>
                <MDBBtn href='/cashLedger' className="btn btn-warning text-dark">Cash Ledger</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '55.5%', marginBlockStart: '-27%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='report_finance.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Reports</MDBCardTitle>
              <MDBCardText>
                All the financial reports can be generated in this section.
              </MDBCardText>
              <div>&nbsp;</div>
              <center>
                <MDBBtn href='/reports' className="btn btn-warning text-dark">Reports</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        
       
    )
  }
}
