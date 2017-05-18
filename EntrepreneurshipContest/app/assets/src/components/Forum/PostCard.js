import React from 'react';
import './PostCard.scss';

import testImg from '../../../../static/girl.png';
import demoImg from '../../../../static/demo1.jpg';

export default class PostCard extends React.Component {
    render() {
        return (
            <div className="post-card">
                <div className="card-left">
                    <div className="card-avatar">
                        <img className="avatar-img" src={testImg} />
                        <p className="avatar-name">楼主走好</p>
                    </div>
                </div>
                <div className="card-right">
                    <p className="right-content">
                        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                        测试测试测试测试测试测试测试测试测试测试测试测试
                    </p>
                    <div className="right-img-con">
                        <img className="right-img" src={demoImg} />
                        <img className="right-img" src={testImg} />
                        <img className="right-img" src={demoImg} />
                    </div>
                    <p className="right-footer">2016-11-7</p>
                </div>
            </div>
        )
    }
}