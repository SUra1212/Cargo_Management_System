import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class SLcargoDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}

        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/lankan/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

               console.log(this.state.post); 
            }

        });

    }
    render() {

        const{senderName,phoneNo,receiverName,receiverNIC,serialNumber,warehouseType,totItems,gWeight,date,time,description} = this.state.post;
        
        return (


            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
      
      
      
      
      
      
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <h4>Serial number of the cargo: {serialNumber}</h4><br></br>
      
                <form>
                  <h5>Information</h5>
                  
                    <label>Sender's name</label>
                    <input className="form-control" type="text" placeholder={senderName} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Phone Number</label>
                    <input className="form-control" type="text" placeholder={phoneNo} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Receiver's name</label>
                    <input className="form-control" type="text" placeholder={receiverName} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Receiver's NIC</label>
                    <input className="form-control" type="text" placeholder={receiverNIC} aria-label="Disabled input example" disabled></input>
                   <br/>
      
      
      
                  <h5>Cargo arrival details</h5>
                  
                    <div className="row">
                    <div class="col">
                    <label>Warehouse type</label>
                    <input className="form-group col-md-12" type="text" placeholder={warehouseType} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div class="col">
                    <label>Number of items</label>
                    <input className="form-group col-md-12" type="text" placeholder={totItems} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div class="col">
                    <label>Gross weight</label>
                    <input className="form-group col-md-12" type="text" placeholder={gWeight} aria-label="Disabled input example" disabled></input>
                    </div>
                    </div>
                   
                    <div className="row">
                <div className="col">
                    <label>Date</label><br></br>
                    <input className="form-group col-md-12"  type="text" placeholder={date} aria-label="Disabled input example" disabled></input>
                    </div>
                    <div className="col">
                    <label>Time</label><br></br>
                    <input className="form-group col-md-12"  type="text" placeholder={time} aria-label="Disabled input example" disabled></input>
                    </div>
                    </div>
                    <label>Description</label>
                    <input className="form-control"  type="text" placeholder={description} aria-label="Disabled input example" disabled></input>
                 
                  
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