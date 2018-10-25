import React, { Component } from "react";
import { Route } from "react-router-dom";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import "./Posts.css";
import axios from "axios";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => this.setState({ error: true }));
  }
  selectPost = id => {
    this.props.history.push(`${this.props.match.url}/${id}`);
  };
  render() {
    const { posts } = this.state;
    const PostsContent = this.state.error ? (
      <h1>Something went wrong!</h1>
    ) : (
      posts.map(post => (
        <Post
          title={post.title}
          key={post.id}
          clicked={() => this.selectPost(post.id)}
          author={post.author}
        />
      ))
    );
    return (
      <section className="Posts">
        {PostsContent}
        <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
      </section>
    );
  }
}
export default Posts;
