import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class CustomerDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Customer Management Dashboard</span></h1>
         </center>
         </div>
            
         <div style={{marginBlockStart:'2%', marginLeft:'5%'}}>   
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/CusRegister.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Customer Registration</MDBCardTitle>
        <MDBCardText>
        Customer registration form that is made when a customer wish to access the service from the company.
        </MDBCardText>
        <center>
        <MDBBtn href='/Homec' className="btn btn-warning text-dark">Register</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>


        <div style={{marginLeft:'37%', marginBlockStart:'-29%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/ReceiverDe.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Cargo Receiver Details</MDBCardTitle>
        <MDBCardText>
        Cargo receiver details form that is made when a customer wish to deliver the cargoes.
        </MDBCardText>
        <center>
        <MDBBtn href='/Homer' className="btn btn-warning text-dark">Receiver Details</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginLeft:'70%', marginBlockStart:'-31%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Report generate</MDBCardTitle>
        <MDBCardText>
        These Reports are helping to get data about customers as PDF.
        </MDBCardText>
        <center>
        <MDBBtn href='/CRG' className="btn btn-warning text-dark">Report generate</MDBBtn>
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
