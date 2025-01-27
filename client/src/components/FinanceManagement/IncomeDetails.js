import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';

export default class IncomeDetails extends Component {
    constructor (props){
        super(props);

        this.state = {
            income:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/income/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    income:res.data.income
                });

                console.log(this.state.income);
            }
        });
    }

  render() {

    const {description, date, account, amount} = this.state.income;

    return (
        <div style={{marginBlockStart:'9%', marginLeft:'20%'}}>
        <MDBCard className="opacity-90" style={{ maxWidth: '55rem'}}>

        <MDBCardBody >

        <MDBCardText>






        <div className="container" style={{ margingTop: '20px' }}>
          <br></br>

          <h4>{description}</h4><br></br>
              
              <form>
  
    <label>Date</label>
    <input className="form-control" type="text" placeholder={date} aria-label="Disabled input example" disabled></input>
 
    <label>Account</label>
    <input className="form-control" type="text" placeholder={account} aria-label="Disabled input example" disabled></input>
  
    <label>Amount</label>
    <input className="form-control" type="text" placeholder={amount} aria-label="Disabled input example" disabled></input>
  
 
 
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