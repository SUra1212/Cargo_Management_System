import React, { Component } from 'react';

export default class ContactUs extends Component {
    render() {
        return (


            <div className='bg-image' style={{ width: '100%', marginBlockStart: '-11%' }}>
                <img src='/ContactUsMap.png' className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white mb-0'>
                            <br></br>
                            <br/>
                            <br/>
                            <center>
                                <h1 >CONTACT US</h1>
                            </center>
                            <br></br>
                            <center>
                                <h5 className="text-sm-start">
                                    
                                    Vision Cargo (Pvt) Ltd | Unique Group<br/>
                                    NO:104,Ganemulla Road,Kadawatha<br/>

                                    Telephone : (+94) 011 7 759 759<br/>

                                    Customer Service: (+94) 0117 759 759<br/>

                                    HOTLINE: (+94) 011 7 759 759<br/>

                                    PICK UP DESK: (+94) 011 7 75 97 79<br/>

                                    WHATSAPP PICK UP: (+94) 0770 13 22 32<br/>

                                    Email : info@visioncargo.lk
                                    
                                    </h5>
                            </center>
                            <br/>
                            <center>
                                <a href="/branches">
                            <button  className="btn btn-warning text-dark">BRANCHES</button>
                            </a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
