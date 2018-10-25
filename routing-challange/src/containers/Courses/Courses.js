import React, { Component } from "react";
import {Route} from 'react-router-dom';
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };
  handleArticleClick = (id, title) => {
    this.props.history.push(`${this.props.match.url}/${id}?${title}`);
  };
  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <article
                className="Course"
                onClick={() => this.handleArticleClick(course.id, course.title)}
                key={course.id}>
                {course.title}
              </article>
            );
          })}
          <Route path="/courses/:id" component={Course} />
        </section>
      </div>
    );
  }
}

export default Courses;
