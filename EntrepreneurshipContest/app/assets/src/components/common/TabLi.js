import React from 'react';
import './TabLi.scss';

export default class TabLi extends React.Component {
    render() {
        let { title, name ,id } = this.props;
        return (
            <li className="tabLi">
                <span>{id}. </span>
                <span>{title}</span>
                <span className="tabLiName">{name} </span>
            </li>
        )
    }
}