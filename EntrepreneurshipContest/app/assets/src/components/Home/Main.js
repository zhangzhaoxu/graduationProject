import React from 'react';
import NewCard from './NewCard';
import './Main.scss';
import demoImg from '../../../../static/demo1.jpg';

export default class Main extends React.Component {

    render() {
        var testArr = [
            {
                newsTitle: "测试测试",
                newsImg: demoImg,
                newsDes: "侧是测试测试测试侧是测试测试测试侧是测试测试测试侧是测试测试测试侧是测试测试测试侧是测试测试测试"
            },
            {
                newsTitle: "测试测试",
                newsImg: demoImg,
                newsDes: "侧是测试测试测试侧是测试测试测试侧是测试测试测试"
            },
            {
                newsTitle: "测试测试",
                newsImg: demoImg,
                newsDes: "侧是测试测试测试侧是测试测试测试侧是测试测试测试"
            },{
                newsTitle: "测试测试",
                newsImg: demoImg,
                newsDes: "侧是测试测试测试侧是测试测试测试侧是测试测试测试"
            }
        ];
        return (
            <div className="main">
                <h2 className="mainTitle">最新赛事</h2>
                <div className="mainBody">
                    {testArr.map((item) => {
                        return (
                            <NewCard {...item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}