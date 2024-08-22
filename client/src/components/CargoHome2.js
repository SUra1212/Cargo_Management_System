import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';


export default class CargoHome2 extends Component {
  render() {
    return (


      <div>
        <div style={{ marginBlockStart: '80px', marginLeft: '90px' }}>

          <MDBCard style={{ maxWidth: '40rem' }}>
            <MDBCardBody>
              <MDBCardTitle><h1>ABOUT US</h1></MDBCardTitle>
              <h3 className="text-warning">Vision Cargo</h3>
              <MDBCardText>
                Vision Cargo” and “Unique Importers” are cargo delivery companies which are in Korea and Sri Lanka. “Vision Cargo” operates its business in Korea and Unique Importers was established in Sri Lanka to offer its service to local customers. Because of the necessity arose to establish a cargoes delivery system to deliver the cargoes of the people in Korea to Sri Lanka, the Vision Cargo started its business with the Unique Importers. And the Unique Importers opened a showroom in 2015 at Kadawatha to sell imported goods from Korea as an extra service to its local customers. They allow customers to buy the goods via online or visiting the showroom“.
              </MDBCardText>
              <MDBBtn className="btn btn-warning text-dark" href='/AboutUs'>READ MORE</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <div style={{ marginLeft: '700px', marginTop: '-420px' }}>

            <MDBCard style={{ maxWidth: '40rem', }}>
              <MDBCardBody>
                <center>
                  <MDBCardTitle><h1>OUR SERVICES</h1></MDBCardTitle>
                </center>
                <MDBCardText>
                  <a href="/ContactUsMap" >
                    <img className="rounded" src='/Logo1.jpeg' style={{ height: '150px', width: '250px', marginLeft: '20px' }} alt='Logo1' />
                  </a>
                  <a href="/ContactUsMap">
                    <img src='/Logo2.jpeg' style={{ height: '150px', width: '250px', marginLeft: '20px' }} alt='Logo2' />
                  </a>
                  <a href="/ContactUsMap">
                    <img src='/Logo3.jpeg' style={{ height: '150px', width: '250px', marginLeft: '20px', marginTop: '20px' }} alt='Logo3' />
                  </a>
                  <a href="/ContactUsMap">
                    <img src='/Logo4.jpeg' style={{ height: '150px', width: '250px', marginLeft: '20px', marginTop: '20px' }} alt='Logo4' />
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div >






          <div style={{ marginBlockStart: '40px' }}>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardImage src='/KoreanKade.jpeg' position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle><h2 className="text-dark">කොරියන් කඩේ</h2></MDBCardTitle>
                <MDBCardText>
                  <i className="fas fa-search-location "></i>&nbsp;
                  Unique Importers<br></br>
                  77C,Ganemulla Road,<br></br>
                  Kadawatha
                </MDBCardText>
                <center>
                  <MDBBtn className="btn btn-warning text-dark" href='/KSHC'>VISIT US</MDBBtn>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>







        </div>
        <div style={{ width: '930px', marginBlockStart: '-575px', marginLeft: '500px' }} id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img style={{ height: '577px', width: '700px' }} src="/SR1.jpeg" class="d-block w-100" alt="ShowRoom1" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR2.jpeg" class="d-block w-100" alt="ShowRoom2" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR3.jpeg" class="d-block w-100" alt="ShowRoom3" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR4.jpeg" class="d-block w-100" alt="ShowRoom4" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR5.jpeg" class="d-block w-100" alt="ShowRoom5" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR6.jpeg" class="d-block w-100" alt="ShowRoom6" />
            </div>
            <div class="carousel-item">
              <img style={{ height: '577px', width: '700px' }} src="/SR7.jpeg" class="d-block w-100" alt="ShowRoom7" />
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>






        <div className='bg-image' style={{ width: '100%', height: '200px', marginBlockStart: '20px' }}>
          <img src='/Footer1.jpg' className='img-fluid' alt='Sample' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white mb-0'>
                <h1 >VISION CARGO | UNIQUE GROUP</h1>
                <br></br>
                <center>
                  <h4>Trustable cargo service provider in Sri Lanka</h4>
                </center>
              </div>
            </div>
          </div>
        </div>






        <div className='text-black mb-0' style={{ marginBlockStart: '40px' }}>
          <center>
            <h3>FAST, SIMPLE AND QUICK</h3>
            <h1>CARGO SERVICE IN SRI LANKA</h1>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>



        </div>
      </div>

    );
  }
}
