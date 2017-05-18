import React from 'react';
import './PostInfo.scss';
import RightPane from '../Competitions/CollapseRight';
import PostCard from './PostCard';

export default class PostInfo extends React.Component {
    render() {
        return (
            <div className="post-info">
                <div className="left-pane">
                    <div className="post-info-header">
                        <p className="author-question">
                            楼主提问的问题
                        </p>
                    </div>
                    <div className="post-info-body">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
                <div className="right-pane">
                    <RightPane recommendsList={this.props.recommendList} />
                </div>
            </div>
        )
    }
}