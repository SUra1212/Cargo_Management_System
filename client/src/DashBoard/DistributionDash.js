import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class DistributionDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Distribution Management Dashboard</span></h1>
         </center>
         </div>
            
         <div style={{ marginBlockStart: '2%', marginLeft: '5%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='/Cargoinformation.jpeg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className="text-dark">Cargo Warehousing Form</MDBCardTitle>
              <MDBCardText>
                All the cargo warehousing details form that is made when the goods arrive at the Sri Lankan Warehouse.
              </MDBCardText>
              <center>
                <MDBBtn href='/HSL' className="btn btn-warning text-dark">Warehousing</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '37%', marginBlockStart: '-29%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='/CDispatch.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className="text-dark">Cargo Dispatch Form</MDBCardTitle>
              <MDBCardText>
                All cargo dispatch form that is made when the goods going out from the sri Lankan Warehouse.
              </MDBCardText>
              <center>
                <MDBBtn href='/DH' className="btn btn-warning text-dark">Dispatch</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginLeft: '70%', marginBlockStart: '-29%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src='/report.jpg' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className="text-dark">Report Generating</MDBCardTitle>
              <MDBCardText>
               These Reports are helping to get data about payments as PDF.

              </MDBCardText>
              <center>
                <MDBBtn href='/RR' className="btn btn-warning text-dark">Report</MDBBtn>
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
