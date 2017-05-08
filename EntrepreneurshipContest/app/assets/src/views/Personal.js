import React, { Component } from 'react';
import PersonalMenu from '../components/Personal/PersonalMenu';
import PersonalModal from '../components/Personal/PersonalModal';
import './Personal.scss';

export default class Personal extends Component {
    render() {
        return (
            <div className="personal">
                <PersonalMenu />
                <PersonalModal />
            </div>
        )
    }
}