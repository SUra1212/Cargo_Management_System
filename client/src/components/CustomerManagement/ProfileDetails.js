import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

export default class ProfileDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/customer/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);

            }

        });

    }

    render() {

        const { fname, lname, email, nic, phone, address, saddress, city, province, zip } = this.state.post;



        return (
            <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
                <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
                    <MDBCardBody >
                        <MDBCardText>
                            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>
                                <h4>First Name of The Customer: {fname}</h4><br></br>

                                <form>


                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder={fname} aria-label="Disabled input example" disabled></input>


                                    <label>Last Name</label>
                                    <input className="form-control" type="text" placeholder={lname} aria-label="Disabled input example" disabled></input>


                                    <label>Email</label>
                                    <input className="form-control" type="text" placeholder={email} aria-label="Disabled input example" disabled></input>


                                    <label>NIC</label>
                                    <input className="form-control" type="text" placeholder={nic} aria-label="Disabled input example" disabled></input>


                                    <label>Photo</label>
                                    <input className="form-control" type="text" placeholder={phone} aria-label="Disabled input example" disabled></input>


                                    <label>Address</label>
                                    <input className="form-control" type="text" placeholder={address} aria-label="Disabled input example" disabled></input>


                                    <input className="form-control" type="text" placeholder={saddress} aria-label="Disabled input example" disabled></input>

                                    <label>City</label>
                                    <input className="form-control" type="text" placeholder={city} aria-label="Disabled input example" disabled></input>

                                    <div className="row">
                                        <div className="col">
                                            <label>Province</label><br />
                                            <input className="form-group col-md-10" type="text" placeholder={province} aria-label="Disabled input example" disabled></input>
                                        </div>
                                    </div>
                                    <label>ZIP</label>
                                    <input className="form-control" type="text" placeholder={zip} aria-label="Disabled input example" disabled></input>
                                </form>

                            </div>

                        </MDBCardText>

                    </MDBCardBody>

                </MDBCard>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>


        )
    }
}