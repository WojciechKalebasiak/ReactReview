import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null
    };
  }
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate() {
    console.log("updated");
    this.loadData();
  }
  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== parseInt(this.props.match.params.id, 10))
      ) {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/posts/${
              this.props.match.params.id
            }`
          )
          .then(res =>
            this.setState({
              loadedPost: res.data
            })
          );
      }
    }
  }
  deletePost = () => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.id
        }`
      )
      .then(console.log("Post deleted"));
  };
  render() {
    let post;
    post = this.props.match.params.id ? (
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
