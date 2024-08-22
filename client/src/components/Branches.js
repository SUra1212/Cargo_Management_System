import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class Branches extends Component {
  render() {
    return (

      <div className="" style={{ zIndex: 98 }}>
        <div className='bg-image' style={{ width: '100%', height: '280px', marginBlockStart: '20px' }}>
          <img src='/Footer1.jpg' className='img-fluid' alt='Sample' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white mb-0'>
                <br></br>
                <br></br>
                <br></br>
                <center>
                  <h1 >BRANCHES</h1>
                </center>
                <br></br>
                <center>
                  <h4>Trustable cargo service provider in Sri Lanka</h4>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 98 }}>
          <img style={{ width: '120%', height: '95px' }} src='/branchesBar.jpeg' className='img-fluid' alt='Sample' />
        </div>

        <div style={{ marginBlockStart: '2%', marginLeft: '15%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <center>
              <MDBCardTitle>Unique Importers</MDBCardTitle>
              <br/>
              </center>
              <MDBCardText>
                Kadawatha <br></br>
                Unique importers (Pvt) Ltd<br></br>
                <br/>
                NO:104, <br></br>
                Ganemulla Road, <br></br>
                Kadawatha <br></br>
                <br/>
                Phone Number: <br/>
                011 7 759 758 <br></br>
                <br/>
                Delivery Schedule: <br></br>
                City: 08.30a.m. - 10.30a.m <br></br>
                Sub: 10.30a.m. - 1.30 p.m <br></br>
                Out Station: 02.00p.m. - 05.00p.m <br></br>
              </MDBCardText>
              <center>
                <MDBBtn href='https://call2friends.com/free-calls' className="btn btn-warning text-dark">Call Now</MDBBtn>
              </center>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={{ marginBlockStart: '-34%', marginLeft: '60%' }}>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <center>
              <MDBCardTitle>Vision Cargo</MDBCardTitle>
              <br/>
              </center>
              <MDBCardText>
                South Korea <br></br>
                Vision Cargo (Pvt) Ltd<br></br>
                <br/>
                Yangsan-si,<br/>
                Gyeongsangnam-do, <br/>
                South Korea<br/>
                <br/>
                Phone Number: <br/>
                +82 70-7597-0033 <br></br>
                <br/>
                Delivery Schedule: <br></br>
                City: 08.30a.m. - 10.30a.m <br></br>
                Sub: 10.30a.m. - 1.30 p.m <br></br>
                Out Station: 02.00p.m. - 05.00p.m <br></br>
              </MDBCardText>
              <center>
                <MDBBtn href='https://call2friends.com/free-calls' className="btn btn-warning text-dark">Call Now</MDBBtn>
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
