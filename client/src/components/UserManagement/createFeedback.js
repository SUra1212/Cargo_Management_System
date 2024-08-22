import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

export default class createFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Category: "",
            Rate: "",
            Email: "",
            Feedback: ""

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();
    
        const { Category, Rate, Email, Feedback } = this.state;
    
        const data = {
    
            Category: Category,
            Rate: Rate,
            Email: Email,
            Feedback: Feedback,
    
        }
        console.log(data)
    
        this.setState(
            {
                Category: "Question",
                Rate: "2",
                Email: "danu@gmail.com",
                Feedback: "Not good"
    
            }
        )
    
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { Category, Rate, Email, Feedback } = this.state;

        const data = {
            Category: Category,
            Rate: Rate,
            Email: Email,
            Feedback: Feedback,
        }

        console.log(data)

       
        const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
     if ((!emi.test(String(Email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (Rate.length === 0 || Email.length === 0 || Feedback.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.post("/feedback/save", data).then((res) => {
            let path = "/fHome";
            if (res.data.success) {
                alert("Feedback Sent Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        Category: "",
                        Rate: "",
                        Email: "",
                        Feedback: ""

                    }
                )
            }
        })


    }
    }

    render() {
        return (
            <div className="Kwarehouse" style={{ zIndex: 98 }} >

                <div style={{ marginBlockStart: '9%', marginLeft: '23%' }}>
                    <MDBCard className="opacity-90" style={{ maxWidth: '50rem' }}>
                        <MDBCardBody>

                            <MDBCardTitle><center><h2><span class="badge bg-warning text-dark opacity-90">Feedback Form</span></h2></center></MDBCardTitle>
                            <br />
                            <MDBCardTitle><h5><center>We would like your feedback to improve our services</center></h5></MDBCardTitle>
                            <br />
                            <MDBCardText>
                                <div >


                                    <form className="needs-validation" noValidate>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Please Select Your Feedback Category</label>
                                            <select name="Category" onChange={this.handleInputChange} defaultValue="Category" value={this.state.Category} className="form-control">
                                                <option defaultValue>--Select Category--</option>
                                                <option value="Question">Question</option>
                                                <option value="Website">Website</option>
                                                <option value="Products">Products</option>
                                                <option value="Suggestions">Suggestions</option>
                                                <option value="Compliments">Compliments</option>
                                                <option value="Other">Other</option>
                                            </select>

                                        </div>
                                        <div class="form-group">
<label style={{marginBottom:'5px'}}>Rate Us</label>
                    <div className="star">
<input
   type="radio"
   className="form-control"
   name="Rate"
   id="rate-5"
   onChange={this.handleInputChange}
   value="5"/>
   <label for="rate-5" class="fas fa-star"></label>
   
   <input
   type="radio"
   className="form-control" 
   name="Rate"
   id="rate-4"
   onChange={this.handleInputChange}
   value="4"/>
   <label for="rate-4" class="fas fa-star"></label>
   
    <input
   type="radio"
   className="form-control"
   name="Rate"
   id="rate-3"
   onChange={this.handleInputChange}
   value="3"/>
   <label for="rate-3" class="fas fa-star"></label>
   
   <input
   type="radio"
   className="form-control"
   name="Rate"
   id="rate-2"
   onChange={this.handleInputChange}
   value="2"/>
   <label for="rate-2" class="fas fa-star"></label>
   
   <input
   type="radio"
   className="form-control"
   name="Rate"
   id="rate-1"
   onChange={this.handleInputChange}
   value="1"/>
   <label for="rate-1" class="fas fa-star"></label>
   
   </div>
   </div>


           

                
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Your Email Address</label>
                                            <input type="text"
                                                className="form-control"
                                                name="Email"
                                                placeholder="Enter Email"
                                                value={this.state.Email}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="container1" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Please leave your feedback below</label>
                                            <textarea className="form-control" rows="3"
                                                name="Feedback" 
                                                placeholder="Enter Feedback"
                                                value={this.state.Feedback}
                                                onChange={this.handleInputChange}>

                                            </textarea>
                                        </div>

                                    </form>
                                    <br></br>
                                    <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; save
                                        </a>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                   <i class='fas fa-bookmark'></i>
                                &nbsp; <b>Demo</b>
                            </button> 
                                    </center>
                                    <br></br>


                                </div>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>

                </div>
                <br />
                <br />
                <br />
                <br />

            </div>
        )
    }
}
