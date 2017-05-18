import React, { Component } from 'react';
import './PersonalModal.scss'

import PersonalCompetitions from './PersonalCompetitions';
import PersonalPhone from './PersonalPhone';
import PersonalInfo from './PersonalInfo';

export default class PersonalModal extends Component {
    render() {
        return (
            <div className="personal-modal">
                <PersonalCompetitions />
            </div>
        )
    }
}