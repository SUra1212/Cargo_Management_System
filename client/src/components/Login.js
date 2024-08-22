import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login2.css";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, } from 'mdb-react-ui-kit';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function onSubmit() {

    //   const email = this.state.email
    //   const password = this.state.password

    if (email === 'admin@gmail.com' && password === 'admin') {
      window.location = '/FDB';
    }


  }

  return (
    <div className="bg" style={{ zIndex: 98 }}>
      <div>

        <div style={{ marginBlockStart: '9%', marginLeft: '34%' }}>
          <MDBCard className="p-3 mb-2 bg-light text-dark opacity-90" style={{ maxWidth: '30rem' }}>
            <MDBCardBody>
              <MDBCardTitle>
                <h1 className="text-center" > Login </h1>
              </MDBCardTitle>
              <MDBCardText>


                <Form onSubmit={handleSubmit}>

                  <Form.Group size="lg"
                    controlId="email"></Form.Group>


                  < Form.Label > Email </Form.Label>
                  < Form.Control autoFocus type="email"
                    value={email}
                    onChange={
                      (e) => setEmail(e.target.value)
                    } />

                  < Form.Group size="lg"
                    controlId="password" ></Form.Group>

                  <Form.Label > Password </Form.Label>
                  <Form.Control type="password"
                    value={password}
                    onChange={
                      (e) => setPassword(e.target.value)
                    }
                  />
                  <br/>
                 <a href="">Register</a>

                  <Form.Group > <br /> <Button block size="lg btn-block"
                    type="submit"
                    disabled={!validateForm()}
                    onClick={onSubmit()} >
                    Login </Button> </Form.Group>



                </Form>

              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}
