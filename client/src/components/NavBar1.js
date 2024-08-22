import React, { Component } from 'react'
import {
  MDBBtn
} from 'mdb-react-ui-kit';

export default class NavBar1 extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{ marginBottom: '30px' }}>
        <div class="container-fluid">

          <img src='/visionCargoLogo.png' className='img-fluid rounded-circle img-fluid shadow-4' alt='Logo' style={{ height: '70px' }}   ></img>
          &nbsp;&nbsp;
          <img src='/uniqueLogo.jpeg' className='img-fluid rounded-circle img-fluid shadow-4' alt='Logo' style={{ height: '70px', width: '75px' }}   ></img>


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="fs-4 nav-link text-warning" aria-current="page" >HOTLINE</a>
              <a class="fs-4 nav-link " href="https://call2friends.com/free-calls">011-1234567</a>

              <a class="fs-4 nav-link text-warning" aria-current="page"> | </a>

              <a class="fs-4 nav-link text-warning" aria-current="page" >PICK UP DESK</a>
              <a class="fs-4 nav-link" href="https://call2friends.com/free-calls">011-1234567</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     
            </div>
          </div>
          <a href="https://www.facebook.com/">
            <i class="fs-2 nav-link fab fa-facebook text-warning"></i>
          </a>
          <a href="https://twitter.com/?lang=en">
            <i class="fs-2 nav-link fab fa-twitter-square text-warning"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fs-2 nav-link fab fa-instagram text-warning"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fs-2 nav-link fab fa-youtube text-warning"></i>
          </a>


        </div>
      </nav>

    )

  }

}






