import React, { Component } from 'react';
import { Button } from 'antd';
import './Post.scss';

import avatar from '../../../../static/xiaoxin.jpg';
import extra from '../../../../static/extra.jpg';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-left">
                    <span className="post-index-icon">1</span>
                </div>
                <div className="post-right">
                    <div className="right-title">
                        <span className="post-title">测试测试测试测试</span>
                        <img className="post-avatar" src={avatar} />
                        <span className="post-author">小新小新</span>
                    </div>
                    <div className="right-body">
                        <p className="body-des">测试测试测试测试测试测试车市测试的发的发a</p>
                        <div className="body-extra">
                            <div className="extra-imgCon">
                                <img src={extra} />
                                <img src={extra} />
                                <img src={extra} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}