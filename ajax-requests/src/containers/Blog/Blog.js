import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostID: null,
      error: false
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
    this.setState({ selectedPostID: id });
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
      <div>
        <section className="Posts">{PostsContent}</section>
        <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
