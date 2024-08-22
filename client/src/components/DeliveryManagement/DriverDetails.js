import React, {Component} from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody,  MDBCardText } from 'mdb-react-ui-kit';

export default class DriverDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/driver/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);

            }
        });
    }

    render(){

        const {d_Id,driverName,driverPhone,driverAddress,age} = this.state.post;
        return (


            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <h4>Driver ID: {d_Id}</h4><br></br>
      
                <form>
                  <h5>Driver's Information</h5>
                  
                    <label>Driver's Name</label>
                    <input className="form-control" type="text" placeholder={driverName} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Driver Contact</label>
                    <input className="form-control" type="text" placeholder={driverPhone} aria-label="Disabled input example" disabled></input>
                  
                    <label>Driver's Address</label>
                    <input className="form-control" type="text" placeholder={driverAddress} aria-label="Disabled input example" disabled></input>
                  
                    <label>Age</label>
                    <input className="form-control" type="text" placeholder={age} aria-label="Disabled input example" disabled></input>
                   
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

