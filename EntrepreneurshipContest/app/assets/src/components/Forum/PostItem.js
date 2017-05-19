import React, { Component } from 'react';
import { Button } from 'antd';
import './PostItem.scss';

export default class PostItem extends Component {
    render() {
        let { postInfo, index, push } = this.props;
        return (
            <div className="post">
                <div className="post-left">
                    <span className="post-index-icon">{index}</span>
                </div>
                <div className="post-right" onClick={() => { push('/post'); }}>
                    <div className="right-title">
                        <span className="post-title">{postInfo.title}</span>
                        <img className="post-avatar" src={postInfo.avatar} />
                        <span className="post-author">{postInfo.name}</span>
                    </div>
                    <div className="right-body">
                        <p className="body-des">{postInfo.des}</p>
                        <div className="body-extra">
                            <div className="extra-imgCon">
                                {
                                    postInfo.urls.map((item) => (
                                        <img src={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}