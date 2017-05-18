import React from 'react';
import NewCard from './NewCard';
import './Main.scss';
import demoImg from '../../../../static/demo1.jpg';

export default class Main extends React.Component {

    render() {
        let { news } = this.props;
        return (
            <div className="main">
                <h2 className="mainTitle">最新赛事</h2>
                <div className="mainBody">
                    {news.map((item, index) => {
                        return (
                            <NewCard index={index} {...item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}