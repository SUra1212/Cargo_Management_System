import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class EmployeeDetails extends Component {
    constructor (props){
        super(props);

        this.state = {
            employee:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/employee/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    employee:res.data.employee
                });

                console.log(this.state.employee);
            }
        });
    }

  render() {

    const {EmpID,firstName,lastName,nic,phone,email,address,gender,department,position,empStatus} = this.state.employee;


    return (
        <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
        <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>

        <MDBCardBody >

        <MDBCardText>


        <div className="container" style={{ margingTop: '20px' }}>
          <br></br>

          <h4>{EmpID}</h4><br></br>
              
              <form>
  
    <label>FirstName</label>
    <input className="form-control" type="text" placeholder={firstName} aria-label="Disabled input example" disabled></input>
 
    <label>LastName</label>
    <input className="form-control" type="text" placeholder={lastName} aria-label="Disabled input example" disabled></input>
  
    <label>NIC</label>
    <input className="form-control" type="text" placeholder={nic} aria-label="Disabled input example" disabled></input>

    <label>Phone</label>
    <input className="form-control" type="text" placeholder={phone} aria-label="Disabled input example" disabled></input>
 
    <label>Email</label>
    <input className="form-control" type="text" placeholder={email} aria-label="Disabled input example" disabled></input>
  
    <label>Address</label>
    <input className="form-control" type="text" placeholder={address} aria-label="Disabled input example" disabled></input>

    <label>Gender</label>
    <input className="form-control" type="text" placeholder={gender} aria-label="Disabled input example" disabled></input>
 
    <label>Department</label>
    <input className="form-control" type="text" placeholder={department} aria-label="Disabled input example" disabled></input>
  
    <label>Position</label>
    <input className="form-control" type="text" placeholder={position} aria-label="Disabled input example" disabled></input>

      
    <label>EmpStatus</label>
    <input className="form-control" type="text" placeholder={empStatus} aria-label="Disabled input example" disabled></input>

 
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