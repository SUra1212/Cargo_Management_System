import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class KpaymentDetails extends Component {
    constructor(props){
        super(props);

        this.state={
          post:{}
        };
    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/koreanPayment/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

      const {serialNumber1,Name,Contact,Email,pNo1,pType1,pWeight1,pShippingCost1,deliveryCharges,totalShippingCost,Total} = this.state.post;
        return (
          <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
          <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
  
          <MDBCardBody >
  
          <MDBCardText>
  
  
  
  
  
  
          <div className="container" style={{ margingTop: '20px' }}>
            <br></br>
  
            <h4>Serial number of the cargo: {serialNumber1}</h4><br></br>
                
                <form>
    <h5>Customer Information</h5>
    
      <label>Receiver Name</label>
      <input className="form-control" type="text" placeholder={Name} aria-label="Disabled input example" disabled></input>
   
      <label>Receiver Contact</label>
      <input className="form-control" type="text" placeholder={Contact} aria-label="Disabled input example" disabled></input>
    
      <label>Receiver Email</label>
      <input className="form-control" type="text" placeholder={Email} aria-label="Disabled input example" disabled></input>
    
   

<h5>Product Details</h5>

      <div className="row">
        <div className="col">
      <label>Product Number</label><br></br>
      <input className="form-group col-md-10" type="text" placeholder={pNo1} aria-label="Disabled input example" disabled></input>
      </div>
      <div className="col">
      <label>Product Type</label><br></br>
      <input className="form-group col-md-10" type="text" placeholder={pType1} aria-label="Disabled input example" disabled></input>
      </div>
      </div>

      <div className="row">
        <div className="col">
      <label>Weight</label><br></br>
      <input className="form-group col-md-10" type="text" placeholder={pWeight1} aria-label="Disabled input example" disabled></input>
      </div>
      <div className="col">
      <label>Shipping Cost</label><br></br>
      <input className="form-group col-md-10" type="text" placeholder={pShippingCost1} aria-label="Disabled input example" disabled></input>
      </div>
      </div>


    <h5>Payment Details</h5>
    
      <label>Delivery Charges</label>
      <input className="form-control" type="text" placeholder={deliveryCharges} aria-label="Disabled input example" disabled></input>
  
      <label>Total Shipping Cost</label>
      <input className="form-control" type="text" placeholder={totalShippingCost} aria-label="Disabled input example" disabled></input>
  
      <label>Total Payment</label>
      <input className="form-control" type="text" placeholder={Total} aria-label="Disabled input example" disabled></input>
   
   <br></br>
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

