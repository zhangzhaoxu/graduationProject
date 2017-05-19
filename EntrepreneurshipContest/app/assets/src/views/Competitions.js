import React, { Component } from 'react';
import CollapseRight from '../components/Competitions/CollapseRight';
import { connect } from 'react-redux';
import { competitionsActions } from './HomeRedux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import './Competitions.scss';

@connect(
    state => {
        return {
            recommendList: state.all.competitions.recommendList
        }
    },
    (dispatch) => {
        return {
            loadRecommends: bindActionCreators(competitionsActions.loadRecommends, dispatch),
            push: bindActionCreators(push, dispatch)
        }
    }
)
export default class Competitions extends  Component {
    
    componentDidMount() {
        let { recommendList, loadRecommends } = this.props;
        if(recommendList.length === 0) {
            loadRecommends();
        }
    }
    
    render() {
        return (
            <div className="competitions">
                <div className="left-panel">
                    {this.props.children}
                </div>
                <div className="right-panel">
                    <CollapseRight push={this.props.push} recommendsList={this.props.recommendList} />
                </div>
            </div>
        )
    }
}