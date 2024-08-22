import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class ShowRoomDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Showroom Management Dashboard</span></h1>
         </center>
         </div>
            
        <div style={{marginBlockStart:'4%', marginLeft:'20%'}}>   
    <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='./SRdash1.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Show Room Listing</MDBCardTitle>
        <MDBCardText>
          "කොරියන්_කඩේ" show Room stock handling and listing.
        </MDBCardText>
        <center>
        <MDBBtn href='/SRH' className="btn btn-warning text-dark">Listing</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginLeft:'60%', marginBlockStart:'-33%'}}>
        <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Report Generate</MDBCardTitle>
        <MDBCardText>
        "කොරියන්_කඩේ" show Room Details Report(PDF)
        <br/>
        <br/>
        <br/><br/>
        </MDBCardText>
        <center>
        <MDBBtn href='/SRrg' className="btn btn-warning text-dark">Report Generate</MDBBtn>
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
