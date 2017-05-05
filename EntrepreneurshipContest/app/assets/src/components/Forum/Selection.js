import React from 'react';
import { Button, Icon } from 'antd';
import SelectionItem from './SelectionItem'
import './Selection.scss';

export default class Selection extends React.Component {
    render() {
        return (
            <div className="selectionContainer">
                <div className="topBar">
                    <span className="barText">已选条件:</span>
                    <Button className="barButton" type="primary"><Icon type="retweet" />默认</Button>
                </div>
                <div className="selectionBody">
                    <SelectionItem />
                    <SelectionItem />
                    <SelectionItem />
                    <SelectionItem />
                    <SelectionItem />
                    <SelectionItem />
                </div>
            </div>
        )
    }
}