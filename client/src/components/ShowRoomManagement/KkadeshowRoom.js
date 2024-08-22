import React, { Component } from 'react';
import axios from 'axios';



export default class KkadeshowRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/showroom").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }



  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(searchKey) ||
     
      post.condition.toLowerCase().includes(searchKey) ||
     
      post.brand.toLowerCase().includes(searchKey) ||
    
      post.price.toLowerCase().includes(searchKey) 
     

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/showroom").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  render() {
    return (
      <div className="Kkade">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'-1%'}}>කොරියන් කඩේ</span></h1>
        </center>
        <div >
          <br />
          
          <table class="opacity-90 container table table-bordered " >
            <thead class="table-info">
              <tr>
                
                <th scope="col">Title</th>
               
                <th scope="col">Condition</th>
               
                <th scope="col">Brand</th>
                <th scope="col">Price (LKR)</th>
              
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  
                  <td class="table-light">
                    <a href={`/cSH/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.title}
                    </a>
                  </td>
                 
                  <td class="table-light">{posts.condition}</td>
               
                  <td class="table-light">{posts.brand}</td>
                  <td class="table-light">{posts.price}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
         
          <br></br>
          <br></br>
          <br></br>
         
        </div>
       
      </div>
    )
  }
}














