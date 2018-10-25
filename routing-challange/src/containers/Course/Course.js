import React, { Component } from 'react';

class Course extends Component {
    parseQuery = (query) => {
    const decoded = Array.from(decodeURIComponent(query)).slice(1);
    return decoded;        
    }
    render () {
        const id = this.props.match.params.id;
        const title = this.parseQuery(this.props.location.search);
        return (
            <div>
                <h1>{title}</h1>
                <p> You selected a course with id: {id}</p>
            </div>
        );
    }
}

export default Course;