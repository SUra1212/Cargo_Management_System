import React, { Component } from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import swal from '@sweetalert/with-react'

const amountRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
};

export default class CreateKpayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serialNumber1: "",
            Name: "",
            Contact: "",
            Email: "",
            pNo1: "",
            pType1: "",
            pWeight1: "",
            pShippingCost1: "",
            deliveryCharges: "",
            totalShippingCost: "",
            Total: "",
            formErrors: {
                deliveryCharges: "",
                totalShippingCost: "",
                pShippingCost1: ""
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "deliveryCharges":
                formErrors.deliveryCharges = amountRegex.test(value) ? ""
                    : "Delivery charge must be a decimal value";
                break;
            case "totalShippingCost":
                formErrors.totalShippingCost = amountRegex.test(value) ? ""
                    : "Shipping cost must be a decimal value";
                break;
            case "pShippingCost1":
                formErrors.pShippingCost1 = amountRegex.test(value) ? ""
                    : "Product shipping cost must be a decimal value";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    calcTotal = (e) => {
        e.preventDefault();

        const { deliveryCharges, totalShippingCost, Total } = this.state;
        this.setState({ Total: parseInt(this.state.deliveryCharges) + parseInt(this.state.totalShippingCost) });
    }

    btnDemo = (e) => {
        e.preventDefault();

        const { serialNumber1, Name, Contact, Email, pNo1, pType1, pWeight1, pShippingCost1, deliveryCharges, totalShippingCost, Total } = this.state;

        const data = {

            serialNumber1: serialNumber1,
            Name: Name,
            Contact: Contact,
            Email: Email,
            pNo1: pNo1,
            pType1: pType1,
            pWeight1: pWeight1,
            pShippingCost1: pShippingCost1,
            deliveryCharges: deliveryCharges,
            totalShippingCost: totalShippingCost,
            Total: Total

        }
        console.log(data)


        this.setState(
            {
                serialNumber1: "AB0002",
                Name: "Arachchi A.G.S.C",
                Contact: "0704110055",
                Email: "arachchi05@gmail.com",
                pNo1: "001",
                pType1: "Phone",
                pWeight1: "1KG",
                pShippingCost1: "250.00",
                deliveryCharges: "",
                totalShippingCost: "",
                Total: ""

            }
        )

    }


    onSubmit = (e) => {
        e.preventDefault();
        const { serialNumber1, Name, Contact, Email, pNo1, pType1, pWeight1, pShippingCost1, deliveryCharges, totalShippingCost, Total } = this.state;

        const data = {
            serialNumber1: serialNumber1,
            Name: Name,
            Contact: Contact,
            Email: Email,
            pNo1: pNo1,
            pType1: pType1,
            pWeight1: pWeight1,
            pShippingCost1: pShippingCost1,
            deliveryCharges: deliveryCharges,
            totalShippingCost: totalShippingCost,
            Total: Total
        }

        console.log(data)

        if (formValid(this.state.formErrors)) {

            const contact = /^[0-9\b]+$/;
            const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if ((!contact.test(String(Contact))) || (Contact.length != 10)) {
                swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
            } else if ((!email.test(String(Email)))) {
                swal("Invalid email address !", "Please enter valid email address", "error");
            } else if (serialNumber1.length === 0 || Name.length === 0 || Contact.length === 0 ||
                Email.length === 0 || pNo1.length === 0 || pType1.length === 0 || pWeight1.length === 0 ||
                pShippingCost1.length === 0 || deliveryCharges.length === 0 || totalShippingCost.length === 0) {
                swal("Please fill all the details")
            }else {

                axios.post("/koreanPayment/save", data).then((res) => {
                    let path = "/HKP";
                    if (res.data.success) {
                        alert("Details Saved Successfully")
                        this.props.history.push(path);
                        this.setState(
                            {
                                serialNumber1: "",
                                Name: "",
                                Contact: "",
                                Email: "",
                                pNo1: "",
                                pType1: "",
                                pWeight1: "",
                                pShippingCost1: "",
                                deliveryCharges: "",
                                totalShippingCost: "",
                                Total: ""

                            }
                        )
                    }
                })
            }
        }
    }

    render() {

        const { formErrors } = this.state;

        return (


            <div className="Kwarehouse">
                <div style={{ marginLeft: '15%', marginBlockStart: '9%' }}>

                    <MDBCard className="opacity-90" style={{ maxWidth: '62rem' }}>

                        <MDBCardBody >

                            <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Payment Details</span></h1></center></MDBCardTitle>

                            <MDBCardText>

                                <div className="col-md-8 mt-4 mx-auto">
                                    <center>
                                        <h1 className="h3 mb-3 font-weight-normal"></h1>
                                    </center>
                                    <form className="need-validation" noValidate>

                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Serial Number Of The Cargo</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="serialNumber1"
                                                placeholder="Enter Serial Number"
                                                value={this.state.serialNumber1}
                                                onChange={this.handleInputChange} />

                                        </div>

                                        <h4 className="text-dark">Customer Information</h4>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Receiver Name</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="Name"
                                                placeholder="Enter Customer Name"
                                                value={this.state.Name}
                                                onChange={this.handleInputChange} />
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Receiver Contact</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="Contact"
                                                placeholder="Enter Contact Number"
                                                value={this.state.Contact}
                                                onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Receiver Email</lable>
                                            <input type="email"
                                                className="form-control"
                                                name="Email"
                                                placeholder="Enter Email Address"
                                                value={this.state.Email}
                                                onChange={this.handleInputChange} />

                                        </div>



                                        <h4 className="text-dark">Product Details</h4>
                                        <div className="row">
                                            <div className="col">
                                                <div className="col-sm-11 col-form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Product Number</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="pNo1"
                                                        placeholder="Enter Product Number"
                                                        value={this.state.pNo1}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>


                                            <div className="col">
                                                <div className="col-sm-11 col-form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Product Type</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="pType1"
                                                        placeholder="Enter Product Type"
                                                        value={this.state.pType1}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="col-sm-11 col-form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Product Weight</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="pWeight1"
                                                        placeholder="Enter Product Weight = Ex:2KG"
                                                        value={this.state.pWeight1}
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="col-sm-11 col-form-group" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Product Shipping Cost</lable>
                                                    <input type="text"
                                                        className="form-control"
                                                        name="pShippingCost1"
                                                        placeholder="Enter Shipping Cost = Ex:KWR=300"
                                                        value={this.state.pShippingCost1}
                                                        onChange={this.handleInputChange} />
                                                    {formErrors.pShippingCost1.length > 0 && (
                                                        <span className="errorMessage">{formErrors.pShippingCost1}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>


                                        <h4 className="text-dark">Payment Details</h4>
                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Delivery Charges</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="deliveryCharges"
                                                placeholder="Enter Delivery Charges"
                                                value={this.state.deliveryCharges}
                                                onChange={this.handleInputChange} />
                                                 {formErrors.deliveryCharges.length > 0 && (
                                                        <span className="errorMessage">{formErrors.deliveryCharges}</span>
                                                    )}

                                        </div>

                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Total Shipping Cost</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="totalShippingCost"
                                                placeholder="Enter Total Shipping Cost"
                                                value={this.state.totalShippingCost}
                                                onChange={this.handleInputChange} />
                                                {formErrors.totalShippingCost.length > 0 && (
                                                        <span className="errorMessage">{formErrors.totalShippingCost}</span>
                                                    )}
                                        </div>

                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Total Payment</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="Total"
                                                value={this.state.Total}
                                                onClick={this.calcTotal} />

                                        </div>


                                    </form>
                                    <br></br>
                                    <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; save
                                        </a>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                                            <i class='fas fa-bookmark'></i>
                                            &nbsp; <b>Demo</b>
                                        </button>
                                    </center>
                                    <br></br>

                                </div>

                            </MDBCardText>

                        </MDBCardBody>

                    </MDBCard>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>


        )
    }
}
