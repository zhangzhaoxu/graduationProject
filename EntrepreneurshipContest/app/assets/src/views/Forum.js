import React, {Component} from 'react';
import Selection from '../components/Forum/Selection';
import PostContainer from '../components/Forum/PostContainer';
import cloneDeep from 'lodash/cloneDeep';
import PostInfo from '../components/Forum/PostInfo';
import { connect } from 'react-redux';
import { competitionsActions, forumActions } from './HomeRedux';
import { bindActionCreators } from 'redux';

@connect(
    state => {
        return {
            recommendList: state.all.competitions.recommendList,
            selectionList: state.all.forum.selectionList,
            postList: state.all.forum.postList
        }
    },
    (dispatch) => {
        return {
            loadRecommends: bindActionCreators(competitionsActions.loadRecommends, dispatch),
            loadSelections: bindActionCreators(forumActions.loadSelections, dispatch),
            loadPosts: bindActionCreators(forumActions.loadPosts, dispatch),
            selectionChange: bindActionCreators(forumActions.selectionChange, dispatch),
            pageChange: bindActionCreators(forumActions.pageChange, dispatch)
        }
    }
)
export default class Forum extends Component {

    state = {
        current: [0, 0, 0],
        currentSelect: ["", "", ""]
    };


    handleSelectChange = (index, value, selected) => {
        let newCurrent = cloneDeep(this.state.current);
        let newCurrentSelect = cloneDeep(this.state.currentSelect);

        newCurrent[index] = value;
        newCurrentSelect[index] = selected;

        this.setState({
            current: newCurrent,
            currentSelect: newCurrentSelect
        });

        this.props.selectionChange();
    };

    handlePageChange = () => {
        alert('change');
        this.props.pageChange();
    };

    componentDidMount() {
        let { recommendList, loadRecommends, selectionList,
            loadSelections, postList, loadPosts } = this.props;
        if (recommendList.length === 0) loadRecommends();
        if (selectionList.length === 0) loadSelections();
        if (postList.length === 0) loadPosts();
    }

    render() {
        let { selectionList, postList } = this.props;
        let { current, currentSelect, handlePageChange } = this.state;
        return (
            <div className="forum">
                <Selection selectionList={selectionList} current={current}
                           currentSelect={currentSelect} handleSelectionChange={this.handleSelectChange} />
                <PostContainer handlePageChange={this.handlePageChange} postList={postList} />
            </div>
        )
    }
}

/*
 <PostInfo recommendList={this.props.recommendList} />
*/
