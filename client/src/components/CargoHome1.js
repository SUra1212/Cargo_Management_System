import React, { Component } from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default class CargoHome1 extends Component {
  render() {
    return (
      <MDBCarousel showControls showIndicators >
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement src='/SL1.jpeg' alt='SL2' />
            <MDBCarouselCaption>
              <h1>Vision Cargo | Unique Group</h1>
              <p>
                Vision Cargo takes responsible and confident steps to deliver<br></br>
                your confidential documents such as tender and legal documents<br></br>
                with the assurance of complete security and safety.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement src='/SL2.jpeg' alt='SL2' />
            <MDBCarouselCaption>
              <h1>Vision Cargo | Unique Group</h1>
              <p>
                We function to optimize customer satisfaction and provide high<br></br>
                quality timely service; therefore unlike any other service provider we work Saturdays<br></br>
                to ensure that your urgent courier needs are met during the weekend.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src='/SL3.jpeg' alt='SL3' />
            <MDBCarouselCaption>
              <h1>Vision Cargo | Unique Group</h1>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    );

  }
}
