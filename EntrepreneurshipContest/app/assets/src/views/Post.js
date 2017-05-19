import React, {Component} from 'react';
import { connect } from 'react-redux';
import { competitionsActions, postActions } from './HomeRedux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import PostInfo from '../components/Forum/PostInfo';

@connect(
    state => {
        return {
            recommendList: state.all.competitions.recommendList,
            answerList: state.all.post.answerList
        }
    },
    (dispatch) => {
        return {
            loadRecommends: bindActionCreators(competitionsActions.loadRecommends, dispatch),
            loadAnswers: bindActionCreators(postActions.loadAnswers, dispatch),
            pageChange: bindActionCreators(postActions.pageChange, dispatch),
            push: bindActionCreators(push, dispatch)
        }
    }
)
export default class Forum extends Component {
    
    componentDidMount() {
        let { recommendList, answerList, loadRecommends, loadAnswers } = this.props;
        if (recommendList.length === 0) loadRecommends();
        if (answerList.length === 0) loadAnswers();
    }
    
    render() {
        return (
            <PostInfo push={this.props.push} onChange={this.props.pageChange} answerList={this.props.answerList} recommendList={this.props.recommendList} />
        )
    }
}

/*
 <PostInfo recommendList={this.props.recommendList} />
 */
