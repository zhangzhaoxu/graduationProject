import React, { Component } from 'react';
import './PersonalModal.scss'

import PersonalCompetitions from './PersonalCompetitions';
import PersonalPhone from './PersonalPhone';
import PersonalInfo from './PersonalInfo';
import PersonalPost from './PersonalPost';

export default class PersonalModal extends Component {
    render() {
        let { currentMenu, push } = this.props;

        let ShowComponent = (function (id) {
            if (id == 1) return PersonalCompetitions;
            if (id == 2) {
                push('/competitions');
                return (<div></div>);
            }
            if (id == 3) return PersonalPost;
            if (id == 4) return PersonalPost;
            if (id == 5) return PersonalCompetitions;
            if (id == 6) return PersonalPhone;
            if (id == 7) return PersonalInfo;
        })(currentMenu);
        
        return (
            <div className="personal-modal">
                <ShowComponent push={push} />
            </div>
        )
    }
}