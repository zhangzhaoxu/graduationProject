import React, { Component } from 'react';
import './Post.scss';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-left">
                    <span className="post-index-icon"></span>
                </div>
                <div className="post-right">
                    <div className="right-title">
                        <span className="post-title">测试测试测试测试</span>
                        <span className="post-avatar"></span>
                    </div>
                    <div className="right-body">
                        <p className="body-des"></p>
                        <div className="body-extra"></div>
                    </div>
                </div>
            </div>
        )
    }
}