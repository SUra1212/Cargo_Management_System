import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class AboutUs extends Component {
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
                                    <h1 >ABOUT US</h1>
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

                <div style={{marginBlockStart:'5%', marginLeft:'14%'}}>
                    <MDBCard style={{ maxWidth: '70rem' }}>
                        <MDBCardBody>
                            <center>
                            <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">ABOUT US</span></h1></center></MDBCardTitle>
                            </center>
                            <br/>
                            <h3 className="text-warning">Vision Cargo</h3>
                            
                            <MDBCardText >
                                                               
                                “Vision cargo” is a cargo system which located in Korea that doing a door-to-door cargo system. “Unique Importers” is the company in Sri Lanka that delivers the cargos island wide that is shipped by the Korean company. Furthermore, there is a showroom for the Sri Lankan buyers that sells imported goods from Korea as a side business running by these two companies.

                                Vision Cargo company partnership with Unique Importers Company is doing the cargo delivery service throughout the country which have high demand, a significant customer base and reputation.

                                The people who live in Korea use the system to ship their goods to Sri Lanka. Two owners of the two companies require a software system to manipulate their resources and the procedure in a very efficient manner and connect them to maximize profits for them. It indicates that the following requirements should be met through the system.

                                All the customers in Korea who wish to access the service must register into the system and all the basic details will be recorded during the registration process and will create a customer profile. The customer can self-register through the form that provided by the relevant web application. The registered customer details will handle by the system operator who works in Vision Cargo warehouse. Once the customer is registered, they can log in to the system using valid login credentials.

                                The customers who are in Korea must fill the relevant form including the relevant details about the goods that they wish to send Sri Lanka. Once they submit their form the delivery service that provide by the Vision Cargo company collects the items and store them in the Warehouse that located in Korea for calculation of the approximate cost, weight, … Etc.

                                The warehouse operator in Vision Cargo Company categorizes the goods and calculate the payment and send the payment details and a brief report to the relevant customer. All the details must be recorded in the company database by the warehouse operator. The shipping will be done only after the customer make the necessary payments.

                                Once the cargos reach Sri Lanka the Unique importer company’s warehouse operator will clear the cargos from the custom and store them in the warehouse. The Unique Importers warehouse operator will update the database of the receiver in Sri Lanka by adding the additional tax, clearing costs and delivery chargers. The final report of payment will be prepared by the warehouse operator and send it to the receiver, and at the same time delivery address and the relevant details will send to a driver to do the delivery process. The receiver can do the payment via online or cash on delivery.

                                After the driver delivers the goods to the correct address the driver must update the system and the customers should be able to contact the support center and have a quick conversation with them whenever they need. Also, customers can leave feedbacks about the service and can make refunds through the system as well. All the details should be able to maintain and recorded.
                                The company needs to manage its finance better and in a very efficient manner with using modern graphical notations which are showing budget forecast, monthly expenditures and salary calculations of the employees. Finance manager should be able to calculate profit and loss and maintain a money book and should have capability of entering daily incomes and outcomes easier. And, at the end of the month finance manager must generate a final report of the profit and should send to the owners for further clarifications.
                                
                                
                            </MDBCardText>
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
