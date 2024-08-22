import React, {Component} from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody,  MDBCardText } from 'mdb-react-ui-kit';

export default class feedbackDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}

        };
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }
    
   
    render() {
        
        const {Category,Rate,Email,Feedback} = this.state.post;
        
        return (
            <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
              <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>
      
              <MDBCardBody >
      
              <MDBCardText>
              <div className="container" style={{ margingTop: '20px' }}>
                <br></br>
      
                <form>
                  <h5>Feedback</h5>
                  <br></br>
                    <label>Category</label>
                    <input className="form-control" type="text" placeholder={Category} aria-label="Disabled input example" disabled></input>
                  
                  
                    <label>Rating</label>
                    <input className="form-control" type="text" placeholder={Rate} aria-label="Disabled input example" disabled></input>
                  
                    <label>Email</label>
                    <input className="form-control" type="text" placeholder={Email} aria-label="Disabled input example" disabled></input>
                  
                    <label>Feedback</label>
                    <input className="form-control" type="text" placeholder={Feedback} aria-label="Disabled input example" disabled></input>
                   
                  <br></br>  
                </form>
      
              </div>
      
              </MDBCardText>
                
                </MDBCardBody>
                
              </MDBCard>
              <br></br>
                  <br></br>
                  <br />
                <br />
            </div>
      
      
          )
        }
    }





