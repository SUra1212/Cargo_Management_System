import React, { Component } from 'react';
import axios from'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

export default class RefundDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/refund/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }
    render() {

        const {CustomerID,PhoneNumber,CargoReceivedDate,RefundGoods,ReasonforRefund} = this.state.post;

      return(

        <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
        <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
            <MDBCardBody >
                <MDBCardText>
                    <div className="container" style={{ margingTop: '20px' }}>
                        <br></br>
                        <h4>Title Of the Product: {CustomerID}</h4><br></br>

                        <form>
                            <h5>Listing Details</h5>

                            <label>CustomerID</label>
                            <input className="form-control" type="text" placeholder={CustomerID} aria-label="Disabled input example" disabled></input>


                            <label>Phone Number</label>
                            <input className="form-control" type="text" placeholder={PhoneNumber} aria-label="Disabled input example" disabled></input>


                            <label>Cargo Received Date</label>
                            <input className="form-control" type="text" placeholder={CargoReceivedDate} aria-label="Disabled input example" disabled></input>


                            <label>Refund Goods</label>
                            <input className="form-control" type="text" placeholder={RefundGoods} aria-label="Disabled input example" disabled></input>


                            <label>Reason for Refund</label>
                            <input className="form-control" type="text" placeholder={ReasonforRefund} aria-label="Disabled input example" disabled></input>

                            <br/>
                            
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
