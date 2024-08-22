import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class StoreDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Store Management Dashboard</span></h1>
         </center>
         </div>
            
         <div style={{marginBlockStart:'2%', marginLeft:'5%'}}>   
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/Cargoinformation.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Cargo Information</MDBCardTitle>
        <MDBCardText>
        All cargo information form that is made when the goods arrive at the Korean warehouse.
        </MDBCardText>
        <center>
        <MDBBtn href='/HKW' className="btn btn-warning text-dark">Cargo Information</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginLeft:'39%', marginBlockStart:'-29%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/Payment.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Payment Details</MDBCardTitle>
        <MDBCardText>
        Payment details form including all the payments that should be done by the customer.
        </MDBCardText>
        <center>
        <MDBBtn href='/HKP' className="btn btn-warning text-dark" >Payment Details</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div style={{marginLeft:'72%', marginBlockStart:'-29%'}}>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Report Generate</MDBCardTitle>
        <MDBCardText>
        These Reports are helping to get data about payments as PDF.
       
        </MDBCardText>
        <center>
        <MDBBtn href='/SMRG' className="btn btn-warning text-dark" >Report Generate</MDBBtn>
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
