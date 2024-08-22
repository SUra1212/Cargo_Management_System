import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class functionDash extends Component {
  render() {
    return (
        <div className="function" style={{ zIndex: 98 }}>
          
        <div style={{marginLeft:"30%",marginBlockStart:"10%"}}>
        
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/dashcus" >
                  &nbsp;&nbsp;&nbsp;&nbsp;Customer Management&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>         
                </MDBCardBody>
              </MDBCard>
              </div>
              

        <div style={{marginLeft:"50%", marginBlockStart:"-5.6%"}}>
              <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
                <MDBCardBody >
                  <a className="btn btn-warning text-dark " href="/dashstore" >
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>                
                </MDBCardBody>
              </MDBCard>
              </div>
             
              <div style={{marginLeft:"30%",marginBlockStart:"2%"}}>
        
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashdis" >
             Distribution Management
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>
        

  <div style={{marginLeft:"50%", marginBlockStart:"-5.6%"}}>
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashdeli" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delivery Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>

        <div style={{marginLeft:"30%",marginBlockStart:"2%"}}>
        
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashuser" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>
        

  <div style={{marginLeft:"50%", marginBlockStart:"-5.6%"}}>
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashshow" >
            &nbsp;&nbsp;ShowRoom Management&nbsp;&nbsp;
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>

        <div style={{marginLeft:"30%",marginBlockStart:"2%"}}>
        
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashfin" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finance Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>
        

  <div style={{marginLeft:"50%", marginBlockStart:"-5.6%"}}>
        <MDBCard shadow='0' border='white' background='white' className='mb-3' className="opacity-90" style={{ maxWidth: '17rem' }}>
          <MDBCardBody >
            <a className="btn btn-warning text-dark " href="/dashowner" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>                
          </MDBCardBody>
        </MDBCard>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        
        </div>
        )
    }
  }
