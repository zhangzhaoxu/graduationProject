import React from 'react';
import { Icon,Badge } from 'antd';
import './Register.scss';

export default class Register extends React.Component {
    static propTyps = {
        logged: React.PropTypes.bool,
        headPorhtrait: React.PropTypes.string,
        message: React.PropTypes.number,
        push: React.PropTypes.func
    };
    
    render() {
        let {headPorhtrait, logged, message, push} = this.props;

        return (
            <div className="register">
                <div className="headImg">
                    <img src={headPorhtrait}/>
                </div>
                <div className="logInfo">
                    {logged ? <span className="logOut">登出</span> : <span>登录</span>}
                    {logged ? <div className="message">
                        <div>
                            <Badge count={9}>
                                <a href="#" className="message-badge">
                                    <Icon className="message-icon" type="message" />
                                </a>
                            </Badge>
                        </div>
                    </div> : ''}
                </div>
            </div>
        )
    }
}