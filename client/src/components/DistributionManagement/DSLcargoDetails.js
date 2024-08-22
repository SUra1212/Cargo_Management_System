import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class DSLcargoDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}

        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/dlankan/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

               console.log(this.state.post); 
            }

        });

    }
    render() {

        const{Sname,pno,Rname,RNIC,Radd,city,district,province,sno,grossW,totalItems,tax,custom,delivery,fullPay,status,ddate} = this.state.post;
        return (


            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
      
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <h4>Serial number of the cargo: {sno}</h4><br></br>
      
                <form>
                  <h5>Information</h5>
                  
                    <label>Sender's name</label>
                    <input className="form-control" type="text" placeholder={Sname} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Phone Number</label>
                    <input className="form-control" type="text" placeholder={pno} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Receiver's name</label>
                    <input className="form-control" type="text" placeholder={Rname} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Receiver's NIC</label>
                    <input className="form-control" type="text" placeholder={RNIC} aria-label="Disabled input example" disabled></input>
                 
                    <label>Receiver's Address</label>
                    <input className="form-control" type="text" placeholder={Radd} aria-label="Disabled input example" disabled></input>

        
                    <div className="row">
                      <div className="col">
                    <label>Province</label>
                    <input className="form-group col-md-10" type="text" placeholder={province} aria-label="Disabled input example" disabled></input>
                  </div>
      
                  
                  <div className="col">
                    <label>District</label>
                    <input className="form-group col-md-10"  type="text" placeholder={district} aria-label="Disabled input example" disabled></input>
                    </div>
                 
                  
                  <div className="col">
                    <label>City</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={city} aria-label="Disabled input example" disabled></input>
                    </div>
                  </div>
      
                  <br></br>
      
                  <h5>Product Information</h5>
                  
                    <div className="row">
                      <div className="col">
                    <label>Gross weight</label>
                    <input className="form-group col-md-10"  type="text" placeholder={grossW} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div className="col">
                    <label>Number of items</label>
                    <input className="form-group col-md-10"  type="text" placeholder={totalItems} aria-label="Disabled input example" disabled></input>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <label>Status</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={status} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div className="col">
                    <label>Date</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={ddate} aria-label="Disabled input example" disabled></input>
                    </div>
                    </div>
                  
                  <br></br>
      
          
                  <h5>Tariffs For Receiver</h5>
      
                    <div className="row">
                      <div className="col">
                    <label>Tax Rate</label><br></br>
                    <input className="form-group col-md-10" type="text" placeholder={tax} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div className="col">
                    <label>Custom Chargers</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={custom} aria-label="Disabled input example" disabled></input>
                    </div>
                    </div>
      
                    <div className="row">
                      <div className="col">
                    <label>Delivery Chargers</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={delivery} aria-label="Disabled input example" disabled></input>
                    </div> 
                    <div className="col">
                    <label>Full Payment</label><br></br>
                    <input className="form-group col-md-10"  type="text" placeholder={fullPay} aria-label="Disabled input example" disabled></input>
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