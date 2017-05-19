import React from 'react';
import './PostCard.scss';

export default class PostCard extends React.Component {
    render() {
        let { item } = this.props;
        return (
            <div className="post-card">
                <div className="card-left">
                    <div className="card-avatar">
                        <img className="avatar-img" src={item.answerAvatar} />
                        <p className="avatar-name">{item.name}</p>
                    </div>
                </div>
                <div className="card-right">
                    <p className="right-content">
                        {item.answer.des}
                    </p>
                    <div className="right-img-con">
                        {
                            item.answer.img.map((i) => (
                                <img className="right-img" src={i} />
                            ))
                        }
                    </div>
                    <p className="right-footer">{item.answer.time}</p>
                </div>
            </div>
        )
    }
}