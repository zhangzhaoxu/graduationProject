import React, { Component } from 'react';
import LogIn from '../components/User/LogIn';
import Register from '../components/User/Register';
import { bindActionCreators } from 'redux';
import { registerActions } from '../views/HomeRedux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import './User.scss';

@connect(
    state => ({
        logged: state.all.register.logged
    }),
    (dispatch) => {
        return {
            push: bindActionCreators(push, dispatch),
            logIn: bindActionCreators(registerActions.logIn, dispatch)
        }
    }
)
export default class User extends Component {

    state = {
        login: true
    };

    register = () => {
        this.setState({
            login: false
        })
    };

    reLogin = () => {
        this.setState({
            login: true
        })
    };

    render() {

        let { login } = this.state;
        let { push, logIn } = this.props;

        return (
            <div className="user-container">
                {
                    login ? <LogIn logIn={logIn} register={this.register} push={push} /> : <Register logIn={this.reLogin} />
                }
            </div>
        )
    }
}