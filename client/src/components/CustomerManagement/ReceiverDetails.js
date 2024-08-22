import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

export default class ReceiverDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/receiver/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);

            }

        });

    }

    render() {

        const {cfname, clname, cemail, cnic, cphone, rfname,rlname,remail,rnic,rphone,raddress,rsaddress,rcity,rprovince,rzip} = this.state.post;
        
        return (
            <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
                <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
                    <MDBCardBody >
                        <MDBCardText>
                            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>
                                <h4>First Name of The Customer: {rfname}</h4><br></br>

                                <form>

                                <h5>Customer Details</h5>
                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder={cfname} aria-label="Disabled input example" disabled></input>


                                    <label>Last Name</label>
                                    <input className="form-control" type="text" placeholder={clname} aria-label="Disabled input example" disabled></input>


                                    <label>Email</label>
                                    <input className="form-control" type="text" placeholder={cemail} aria-label="Disabled input example" disabled></input>


                                    <label>NIC</label>
                                    <input className="form-control" type="text" placeholder={cnic} aria-label="Disabled input example" disabled></input>


                                    <label>Phone</label>
                                    <input className="form-control" type="text" placeholder={cphone} aria-label="Disabled input example" disabled></input>
                                    <br/>

                                    <h5>Receiver Details</h5>
                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder={rfname} aria-label="Disabled input example" disabled></input>


                                    <label>Last Name</label>
                                    <input className="form-control" type="text" placeholder={rlname} aria-label="Disabled input example" disabled></input>


                                    <label>Email</label>
                                    <input className="form-control" type="text" placeholder={remail} aria-label="Disabled input example" disabled></input>


                                    <label>NIC</label>
                                    <input className="form-control" type="text" placeholder={rnic} aria-label="Disabled input example" disabled></input>


                                    <label>Phone</label>
                                    <input className="form-control" type="text" placeholder={rphone} aria-label="Disabled input example" disabled></input>


                                    <label>Address</label>
                                    <input className="form-control" type="text" placeholder={raddress} aria-label="Disabled input example" disabled></input>


                                    <input className="form-control" type="text" placeholder={rsaddress} aria-label="Disabled input example" disabled></input>

                                    <label>City</label>
                                    <input className="form-control" type="text" placeholder={rcity} aria-label="Disabled input example" disabled></input>

                                    <div className="row">
                                        <div className="col">
                                            <label>Province</label><br />
                                            <input className="form-group col-md-10" type="text" placeholder={rprovince} aria-label="Disabled input example" disabled></input>
                                        </div>
                                    </div>
                                    <label>ZIP</label>
                                    <input className="form-control" type="text" placeholder={rzip} aria-label="Disabled input example" disabled></input>
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