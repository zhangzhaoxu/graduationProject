import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {

    render() {
        let cooperationPlatform = ["阿里巴巴", "网易", "腾讯", "百度"];
        let greenHand = ["了解竞赛平台", "如何参赛", "如何发布竞赛项目"];
        let contactUs = ["业务咨询: 755760826@qq.com", "技术咨询: maidougougou@163.com"];

        return (
            <div className="footer">
                <div className="ul-con">
                    <ul>
                        <li className="title">平台合作</li>
                        {cooperationPlatform.map((item) => {
                            return <li className="li-item">{item}</li>
                        })}
                    </ul>
                    <ul>
                        <li className="title">新手入门</li>
                        {greenHand.map((item) => {
                            return <li className="li-item">{item}</li>
                        })}
                    </ul>
                    <ul>
                        <li className="title">联系我们</li>
                        {contactUs.map((item) => {
                            return <li className="li-item">{item}</li>
                        })}
                    </ul>
                </div>
                <div className="bottomBar">
                    创业大赛平台版权所有 @2017 755760826@qq.com
                </div>
            </div>
        )
    }
}