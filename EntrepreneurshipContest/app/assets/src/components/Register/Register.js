import React from 'react';
import { Icon,Badge } from 'antd';
import './Register.scss';

export default class Register extends React.Component {
    static propTyps = {
        logged: React.PropTypes.bool,
        headPorhtrait: React.PropTypes.string,
        message: React.PropTypes.number,
        push: React.PropTypes.func,
        LogIn: React.PropTypes.func,
        LogOut: React.PropTypes.func
    };
    
    render() {
        let {headPorhtrait, logged, message, push, logIn, logOut} = this.props;
        
        return (
            <div className={logged ? "register" : "register unLogged"}>
                <div className="headImg">
                    <img src={headPorhtrait}/>
                </div>
                <div className="logInfo">
                    {logged ? 
                        <div className="message">
                            <div>
                                <Badge count={message}>
                                    <a href="#" className="message-badge">
                                        <Icon className="message-icon" type="message" />
                                    </a>
                                </Badge>
                            </div>
                        </div> 
                        : ''}
                    {logged ? <span className="personal" onClick={()=> {push('/personal')}}>个人中心</span> : ''}
                    {logged ? <span className="logOut" onClick={logOut}>登出</span> : <span onClick={logIn}>登录</span>}
                </div>
            </div>
        )
    }
}