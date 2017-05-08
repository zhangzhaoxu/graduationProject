import React, { Component } from 'react';
import CollapseRight from '../components/Competitions/CollapseRight';
import './Competitions.scss';

export default class Competitions extends  Component {
    render() {
        return (
            <div className="competitions">
                <div className="left-panel">
                    {this.props.children}
                </div>
                <div className="right-panel">
                    <CollapseRight />
                </div>
            </div>
        )
    }
}