import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../../index.css';


export default class cusShowroomPost extends Component {
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
        const { title,condition, photo, brand, country, material, description, price, returnoption } = this.state.post;

        return (
            <div className="DashBG" style={{ zIndex: 98 }}>
            <div style={{marginBlockStart:'10%'}}>
              <center>
             <h1><span class="badge bg-warning text-dark opacity-90 fs-1">{title}</span></h1>
             </center>
             </div>
                
            <div style={{marginBlockStart:'4%', marginLeft:'25%'}}>   
        <MDBCard style={{ maxWidth: '50rem' }}>
          <MDBCardImage src={photo} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
                Brand: {brand}<br/>
                Imported Country: {country}<br/>
                Condition: {condition}<br/>
                Material: {material}<br/>
                Return Option: {returnoption}<br/>
                {description}<br/>
                
                
                
              
              LKR: {price}
              
            </MDBCardText>
            <center>
            <MDBBtn href='/KSHC' className="btn btn-warning text-dark">කොරියන්_කඩේ</MDBBtn>
            </center>
          </MDBCardBody>
        </MDBCard>
            </div>
    
    
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            
           
        )
      }
    }
    
