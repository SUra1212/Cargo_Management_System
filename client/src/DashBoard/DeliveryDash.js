import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class DeliveryDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Delivery Management Dashboard</span></h1>
         </center>
         </div>
            
        <div style={{marginBlockStart:'2%', marginLeft:'8%'}}>   
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='DD1.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Delivery Details</MDBCardTitle>
        <MDBCardText>
        All the delivery details are included in the page.
        </MDBCardText>
        <center>
        <MDBBtn href='/HD' className="btn btn-warning text-dark">See More</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginLeft:'38%', marginBlockStart:'-53%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/DD4.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Driver Details</MDBCardTitle>
        <MDBCardText>
        Personal details of all drivers are included in the page.
        </MDBCardText>
        <center>
        <MDBBtn href='/HDR' className="btn btn-warning text-dark">See More</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        
        <div style={{marginLeft:'68%', marginBlockStart:'-53%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Report Generate</MDBCardTitle>
        <MDBCardText>
         Delivery Details Report(PDF)
        </MDBCardText>
        <center>
        <MDBBtn href='/drpt' className="btn btn-warning text-dark">Report Generate</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

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

