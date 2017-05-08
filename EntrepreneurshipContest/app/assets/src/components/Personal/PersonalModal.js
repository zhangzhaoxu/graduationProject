import React, { Component } from 'react';
import './PersonalModal.scss'

import PersonalCompetitions from './PersonalCompetitions';
import PersonalPhone from './PersonalPhone';

export default class PersonalModal extends Component {
    render() {
        return (
            <div className="personal-modal">
                <PersonalPhone />
            </div>
        )
    }
}