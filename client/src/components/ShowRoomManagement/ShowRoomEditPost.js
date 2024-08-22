
import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Error.css';
import swal from '@sweetalert/with-react'




const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
};

export default class ShowRoomEditPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            category: "",
            condition: "",
            photo: "",
            brand: "",
            country: "",
            material: "",
            description: "",
            price: "",
            returnoption: "",

            formErrors: {
                price: ""
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "price":
                formErrors.price = priceRegex.test(value) ? ""
                    : "price must be a decimal value";
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

    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;

        if (formValid(this.state.formErrors)) {
            const { title, subtitle, category, condition, photo, brand, country, material, description, price, returnoption } = this.state;

            const data = {
                title: title,
                subtitle: subtitle,
                category: category,
                condition: condition,
                photo: photo,
                brand: brand,
                country: country,
                material: material,
                description: description,
                price: price,
                returnoption: returnoption
            }
            console.log(data)

            if (title.length > 30)  {
                swal(" invalid Title !", "character should be less than 30", "error");
          } else if (subtitle.length > 30)  {
                    swal(" invalid Sub Title !", "character should be less than 30", "error");
                } else if (description.length > 39)  {
                    swal(" invalid Description !", "character should be less than 30", "error");
            } else if (title.length === 0 || subtitle.length === 0 || condition.length === 0 ||
                photo.length === 0 || description.length === 0 || price.length === 0) {
                swal("Please fill all the details")
            }else {

                axios.put(`/showroom/update/${id}`, data).then((res) => {
                    let path = "/SRH";
                    if (res.data.success) {
                        alert("Post Updated Successfully")
                        this.props.history.push(path);
                        this.setState(
                            {
                                title: "",
                                subtitle: "",
                                category: "",
                                condition: "",
                                photo: "",
                                brand: "",
                                country: "",
                                material: "",
                                description: "",
                                price: "",
                                returnoption: ""
                            }
                        )
                    }
                })


            }
        }
        else {
            console.error('Form Invalid');
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/showroom/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    title: res.data.post.title,
                    subtitle: res.data.post.subtitle,
                    category: res.data.post.category,
                    condition: res.data.post.condition,
                    photo: res.data.post.photo,
                    brand: res.data.post.brand,
                    country: res.data.post.country,
                    material: res.data.post.material,
                    description: res.data.post.description,
                    price: res.data.post.price,
                    returnoption: res.data.post.returnoption

                });
                console.log(this.state.post);
            }
        });
    }


    render() {
        const { formErrors } = this.state;

        return (


            <div className="Kwarehouse">

                <div style={{ marginLeft: '20%', marginBlockStart: '10%' }}>

                    <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
                        <MDBCardBody >
                            <MDBCardTitle><center><h1><span class="badge bg-warning text-dark opacity-90">Create Your Listing</span></h1></center></MDBCardTitle>
                            <MDBCardText>

                                <div>
                                    <form className="need-validation" noValidate>
                                        <h4 className="text-dark">Listing Details</h4>
                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Title</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="title"
                                                placeholder="Enter Title (character shuld be less than 30)"
                                                value={this.state.title}
                                                onChange={this.handleInputChange} />
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Sub Title</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="subtitle"
                                                placeholder="Enter Sub Title (character shuld be less than 30)"
                                                value={this.state.subtitle}
                                                onChange={this.handleInputChange} />
                                        </div>


                                        <div className="col">
                                            <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                <lable style={{ marginBottom: '5px' }}>Category</lable>
                                                <select name="category" onChange={this.handleInputChange} value={this.state.category} defaultValue="select type" className="form-select">
                                                    <option defaultValue>Select the Category</option>
                                                    <option>Antiques</option>
                                                    <option>Art</option>
                                                    <option>Business and Industrial</option>
                                                    <option>Cameras and Photo</option>
                                                    <option>Cell Phones and Accessories</option>
                                                    <option>Computer/Tablets</option>
                                                    <option>Consumer Electronics</option>
                                                    <option>Crafts</option>
                                                    <option>Motor Parts</option>
                                                    <option>Home and Garden</option>
                                                    <option>Musical Instrument</option>
                                                    <option>Pottery and Glass</option>
                                                    <option>Sporting Goods</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                <lable style={{ marginBottom: '5px' }}>Condition</lable>
                                                <select name="condition" onChange={this.handleInputChange} value={this.state.condition} defaultValue="select type" className="form-select">
                                                    <option defaultValue>Used/New</option>
                                                    <option>Used</option>
                                                    <option>New</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label class="form-label" for="customFile">Upload the Photo</label>
                                            <input type="text"
                                                className="form-control"
                                                name="photo"
                                                id="customFile"
                                                value={this.state.photo}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <br />

                                        <h4 className="text-dark">Item Specifics</h4>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Brand</lable>
                                                    <select name="brand" onChange={this.handleInputChange} value={this.state.brand} defaultValue="select type" className="form-select">
                                                        <option defaultValue>Select the Brand</option>
                                                        <option>Apple</option>
                                                        <option>LG</option>
                                                        <option>SAMSUNG</option>
                                                        <option>SONY</option>
                                                        <option>MSI</option>
                                                        <option>Seiko</option>
                                                        <option>Cityzen</option>
                                                        <option>Herman Miller</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Country/Region Of Manufacture</lable>
                                                    <select name="country" onChange={this.handleInputChange} value={this.state.country} defaultValue="select type" className="form-select">
                                                        <option defaultValue>Select the Country</option>
                                                        <option>Australia</option>
                                                        <option>Bangladesh</option>
                                                        <option>Brazil</option>
                                                        <option>Canada</option>
                                                        <option>China</option>
                                                        <option>Denmark</option>
                                                        <option>Egypt</option>
                                                        <option>Germany</option>
                                                        <option>Italy</option>
                                                        <option>Japan</option>
                                                        <option>Korea</option>
                                                        <option>United Kingdom</option>
                                                        <option>Vietnam</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="col">
                                                <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                    <lable style={{ marginBottom: '5px' }}>Material</lable>
                                                    <select name="material" onChange={this.handleInputChange} value={this.state.material} defaultValue="select type" className="form-select">
                                                        <option defaultValue>Select the Material</option>
                                                        <option>Aluminum</option>
                                                        <option>Brass</option>
                                                        <option>Cast Iron</option>
                                                        <option>Clay</option>
                                                        <option>Cristal</option>
                                                        <option>Fabric</option>
                                                        <option>Glass </option>
                                                        <option>Metal</option>
                                                        <option>Plastic</option>
                                                        <option>Porcelain</option>
                                                        <option>Stone</option>
                                                        <option>Wood</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <h4 className="text-dark">Item Description</h4>
                                        <div className="container1" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Description</label>
                                            <textarea className="form-control" rows="3"
                                                name="description" placeholder="Enter Description (character shuld be less than 200)"
                                                value={this.state.description}
                                                onChange={this.handleInputChange}>

                                            </textarea>
                                        </div>


                                        
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Price</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="price"
                                                placeholder="(LKR)"
                                                value={this.state.price}
                                                onChange={this.handleInputChange} />

                                            {formErrors.price.length > 0 && (
                                                <span className="errorMessage">{formErrors.price}</span>
                                            )}
                                        </div>

                                        <div className="col">
                                            <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                                                <lable style={{ marginBottom: '5px' }}>Return Option</lable>
                                                <select name="returnoption" onChange={this.handleInputChange} value={this.state.returnoption} defaultValue="select type" className="form-select">
                                                    <option defaultValue>Accept/Not Accept</option>
                                                    <option>Accept</option>
                                                    <option>Not Accept</option>
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                    <br></br>
                                    <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; Update
                                        </a>
                                        &nbsp;
                                        &nbsp;
                                       
                         
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
