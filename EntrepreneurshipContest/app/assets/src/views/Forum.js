import React, {Component} from 'react';
import Selection from '../components/Forum/Selection';
import PostContainer from '../components/Forum/PostContainer';
import cloneDeep from 'lodash/cloneDeep';
import { connect } from 'react-redux';
import { competitionsActions, forumActions } from './HomeRedux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

@connect(
    state => {
        return {
            selectionList: state.all.forum.selectionList,
            postList: state.all.forum.postList
        }
    },
    (dispatch) => {
        return {
            loadSelections: bindActionCreators(forumActions.loadSelections, dispatch),
            loadPosts: bindActionCreators(forumActions.loadPosts, dispatch),
            selectionChange: bindActionCreators(forumActions.selectionChange, dispatch),
            pageChange: bindActionCreators(forumActions.pageChange, dispatch),
            push: bindActionCreators(push, dispatch)
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
        this.props.pageChange();
    };

    componentDidMount() {
        let { selectionList,
            loadSelections, postList, loadPosts } = this.props;
        if (selectionList.length === 0) loadSelections();
        if (postList.length === 0) loadPosts();
    }

    render() {
        let { selectionList, postList, push } = this.props;
        let { current, currentSelect } = this.state;
        return (
            <div>
                <Selection selectionList={selectionList} current={current}
                           currentSelect={currentSelect} handleSelectionChange={this.handleSelectChange} />
                <PostContainer push={push} handlePageChange={this.handlePageChange} postList={postList} />
            </div>
        )
    }
}

