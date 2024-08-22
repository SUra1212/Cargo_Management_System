import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginBlockStart: '30px' }}>
        <MDBFooter className='bg-dark text-center text-lg-left fixed-bottom'>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div className='text-warning'>
              &copy; {new Date().getFullYear()} Copyright | {' '}
              <a className='text-white'>Vision Cargo (Pvt) Ltd : </a>
              <a className='text-warning '>
                Web Design By : Unique Group
              </a>
            </div>

          </div>
        </MDBFooter>
      </div>
    );

  }
}