import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.id && prevProps.id !== this.props.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(res => this.setState({ loadedPost: res.data }))
    }
  }
  deletePost = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);
  };
  render() {
    let post;
    post = this.props.id ? (
      <p>Loading...</p>
    ) : (
      <p style={{ textAlign: "center" }}>Please select a Post!</p>
    );
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePost}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
