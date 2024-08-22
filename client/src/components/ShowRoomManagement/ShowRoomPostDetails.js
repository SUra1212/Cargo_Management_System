import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';


export default class ShowRoomPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }
    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/showroom/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        const { title, subtitle, category, condition, photo, brand, country, material, description, price, returnoption } = this.state.post;

        return (
            <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
                <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
                    <MDBCardBody >
                        <MDBCardText>
                            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>
                                <h4>Title Of the Product: {title}</h4><br></br>

                                <form>
                                    <h5>Listing Details</h5>

                                    <label>Title</label>
                                    <input className="form-control" type="text" placeholder={title} aria-label="Disabled input example" disabled></input>


                                    <label>Sub Title</label>
                                    <input className="form-control" type="text" placeholder={subtitle} aria-label="Disabled input example" disabled></input>


                                    <label>Category</label>
                                    <input className="form-control" type="text" placeholder={category} aria-label="Disabled input example" disabled></input>


                                    <label>Condition</label>
                                    <input className="form-control" type="text" placeholder={condition} aria-label="Disabled input example" disabled></input>


                                    <label>Upload Photo</label>
                                    <input className="form-control" type="text" placeholder={photo} aria-label="Disabled input example" disabled></input>

                                    <br />
                                    <h5>Item Specifics</h5>
                                    <div className="row">
                                        <div className="col">
                                            <label>Brand</label><br/>
                                            <input className="form-group col-md-10" type="text" placeholder={brand} aria-label="Disabled input example" disabled></input>
                                        </div>


                                        <div className="col">
                                            <label>Country/Region of Manufacture</label>
                                            <input className="form-group col-md-10" type="text" placeholder={country} aria-label="Disabled input example" disabled></input>
                                        </div>


                                        <div className="col">
                                            <label>Material</label><br></br>
                                            <input className="form-group col-md-10" type="text" placeholder={material} aria-label="Disabled input example" disabled></input>
                                        </div>
                                    </div>
                                    <br></br>

                                    <h5>Item Description</h5>

                                    <label>Description</label>
                                    <input className="form-control" type="text" placeholder={description} aria-label="Disabled input example" disabled></input>

                                    <label>Price</label>
                                    <input className="form-control" type="text" placeholder={price} aria-label="Disabled input example" disabled></input>


                                    <label>Return Option</label>
                                    <input className="form-control" type="text" placeholder={returnoption} aria-label="Disabled input example" disabled></input>
                                    <br></br>
                                    <br></br>

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