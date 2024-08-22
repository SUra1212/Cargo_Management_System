import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class OwnerDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Owner Management Dashboard</span></h1>
         </center>
         </div>
            
        <div style={{marginBlockStart:'2%', marginLeft:'15%'}}>   
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/OwnerDa.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Create new Employee</MDBCardTitle>
        <MDBCardText>
        Creating new employee details form to save them in to the company system.
        </MDBCardText>
        <center>
        <MDBBtn href='/EMD' className="btn btn-warning text-dark">Add Employee</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginBlockStart:'-28%', marginLeft:'60%'}}>   
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Employee Report</MDBCardTitle>
        <MDBCardText>
        These Reports are helping to get data about Employee as PDF.
        </MDBCardText>
        <center>
        <MDBBtn href='/ORG' className="btn btn-warning text-dark">Report</MDBBtn>
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
