import React, {Component} from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';


export default class DeliveryDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/d_detail/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);

            }
        });
    }

    render(){

        const {d_Id,driverName,driverPhone,dStatus,senderName,receiverName,receiverAddress,receiverPhone} = this.state.post;
       
        return (


            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <h4>Driver ID: {d_Id}</h4><br></br>
      
                <form>
                  <h5>Delivery Information</h5>
                  
                    <label>Driver Name</label>
                    <input className="form-control" type="text" placeholder={driverName} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Driver Contact</label>
                    <input className="form-control" type="text" placeholder={driverPhone} aria-label="Disabled input example" disabled></input>
                  
                    <label>Delivery Status</label>
                    <input className="form-control" type="text" placeholder={dStatus} aria-label="Disabled input example" disabled></input>
                  
                    <label>Sender's Name</label>
                    <input className="form-control" type="text" placeholder={senderName} aria-label="Disabled input example" disabled></input>
                 
                    <label>Receiver's Name</label>
                    <input className="form-control" type="text" placeholder={receiverName} aria-label="Disabled input example" disabled></input>

                    <label>Receiver's Address</label>
                    <input className="form-control" type="text" placeholder={receiverAddress} aria-label="Disabled input example" disabled></input>

                    <label>Receiver Contact</label>
                    <input className="form-control" type="text" placeholder={receiverPhone} aria-label="Disabled input example" disabled></input>
                   
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





