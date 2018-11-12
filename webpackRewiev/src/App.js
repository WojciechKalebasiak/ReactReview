import React, { Component } from 'react';
import {Link, Route} from "react-router";
import PizzaImage from '../PizzaImage/PizzaImage';
import Users from './components/containers/User';

class Pizza extends Component {
    render() {
        <div>

        <div>
            <Link to="/users">Users</Link>
            <Link to="/pizza">Pizza</Link>
        </div>
        <div>
            <Route path="/" exact component={Users} />
            <Route path="/pizza" component={PizzaImage} />
        </div>
        </div>
    }
}