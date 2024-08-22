import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class KwarehouseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`/koreanWarehouse/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
  }




  render() {

    const { serialNumber, receiverName, receiverContact, receiverEmail, receiverAddress, receiverProvince, receiverDistrict, receiverCity, senderName, senderContact, senderEmail, senderAddress, senderProvince, senderDistrict, senderCity, pNo, pType, pWeight, pShippingCost } = this.state.post;
    return (


      <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
        <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>

        <MDBCardBody >

        <MDBCardText>






        <div className="container" style={{ margingTop: '20px' }}>
          <br></br>

          <h4>Serial number of the cargo: {serialNumber}</h4><br></br>

          <form>
            <h5>Receiver Information</h5>
            
              <label>Receiver Name</label>
              <input className="form-control" type="text" placeholder={receiverName} aria-label="Disabled input example" disabled></input>
            
            
              <label>Receiver Contact</label>
              <input className="form-control" type="text" placeholder={receiverContact} aria-label="Disabled input example" disabled></input>
            
            
              <label>Receiver Email</label>
              <input className="form-control" type="text" placeholder={receiverEmail} aria-label="Disabled input example" disabled></input>
            
            
              <label>Receiver Address</label>
              <input className="form-control" type="text" placeholder={receiverAddress} aria-label="Disabled input example" disabled></input>
           
            
              <div className="row">
                <div className="col">
              <label>Province</label>
              <input className="form-group col-md-10" type="text" placeholder={receiverProvince} aria-label="Disabled input example" disabled></input>
            </div>

            
            <div className="col">
              <label>District</label>
              <input className="form-group col-md-10"  type="text" placeholder={receiverDistrict} aria-label="Disabled input example" disabled></input>
              </div>
           
            
            <div className="col">
              <label>City</label><br></br>
              <input className="form-group col-md-10"  type="text" placeholder={receiverCity} aria-label="Disabled input example" disabled></input>
              </div>
            </div>

            <br></br>



            <h5>Sender Information</h5>
            
              <label>Sender Name</label>
              <input className="form-control" type="text" placeholder={senderName} aria-label="Disabled input example" disabled></input>
           
              <label>Sender Contact</label>
              <input className="form-control" type="text" placeholder={senderContact} aria-label="Disabled input example" disabled></input>
           
            
              <label>Sender Email</label>
              <input className="form-control" type="text" placeholder={senderEmail} aria-label="Disabled input example" disabled></input>
           
           
              <label>Sender Address</label>
              <input className="form-control" type="text" placeholder={senderAddress} aria-label="Disabled input example" disabled></input>
            
              <div className="row">
                <div className="col">
              <label>Province</label>
              <input className="form-group col-md-10"  type="text" placeholder={senderProvince} aria-label="Disabled input example" disabled></input>
              </div>
              <div className="col">
              <label>District</label>
              <input className="form-group col-md-10"  type="text" placeholder={senderDistrict} aria-label="Disabled input example" disabled></input>
              </div>
              <div className="col">
              <label>City</label><br></br>
              <input className="form-group col-md-10"  type="text" placeholder={senderCity} aria-label="Disabled input example" disabled></input>
              </div>
              </div>
            
            <br></br>





            <h5>Product Details</h5>

              <div className="row">
                <div className="col">
              <label>Product Number</label><br></br>
              <input className="form-group col-md-10" type="text" placeholder={pNo} aria-label="Disabled input example" disabled></input>
              </div>
              <div className="col">
              <label>Product Type</label><br></br>
              <input className="form-group col-md-10"  type="text" placeholder={pType} aria-label="Disabled input example" disabled></input>
              </div>
              </div>

              <div className="row">
                <div className="col">
              <label>Weight</label><br></br>
              <input className="form-group col-md-10"  type="text" placeholder={pWeight} aria-label="Disabled input example" disabled></input>
              </div> 
              <div className="col">
              <label>Shipping Cost</label><br></br>
              <input className="form-group col-md-10"  type="text" placeholder={pShippingCost} aria-label="Disabled input example" disabled></input>
              </div>
              </div>
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

