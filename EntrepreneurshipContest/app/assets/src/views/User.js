import React, { Component } from 'react';
import LogIn from '../components/User/LogIn';
import Register from '../components/User/Register';

import './User.scss';

export default class User extends Component {
    render() {
        return (
            <div className="user-container">
                <Register />
            </div>
        )
    }
}