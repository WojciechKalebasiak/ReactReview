import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/AsyncComponent";
import "./Blog.css";
const AsyncNewPost = asyncComponent(() => {
  console.log('New Post Component loaded');
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/new-post">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
