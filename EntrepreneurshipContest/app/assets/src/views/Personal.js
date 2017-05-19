import React, { Component } from 'react';
import PersonalMenu from '../components/Personal/PersonalMenu';
import PersonalModal from '../components/Personal/PersonalModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import './Personal.scss';

@connect(
    state => ({}),
    (dispatch) => {
        return {
            push: bindActionCreators(push, dispatch)
        }
    }
)
export default class Personal extends Component {

    state = {
        key: 1
    };

    handleMenuChange = (key) => {
        this.setState({
            key: key
        });
    };

    render() {
        return (
            <div className="personal">
                <PersonalMenu handleMenuChange={this.handleMenuChange} />
                <PersonalModal currentMenu={this.state.key} push={this.props.push} />
            </div>
        )
    }
}