import React from 'react';
import { Button, Icon } from 'antd';
import SelectionItem from './SelectionItem'
import './Selection.scss';

export default class Selection extends React.Component {
    render() {
        let { selectionList, handleSelectionChange, current, currentSelect } = this.props;
        return (
            <div className="selectionContainer">
                <div className="topBar">
                    <span className="barText">已选条件:
                        {
                            currentSelect.map((item) => {
                                if(item)
                                    return <span className="barSpan">{item}</span>
                            })
                        }
                    </span>
                    <Button className="barButton" type="primary"><Icon type="retweet" />默认</Button>
                </div>
                <div className="selectionBody">
                    {
                        selectionList.map((item, index) => (
                            <SelectionItem currentIndex={index} current={current} selectionItem={item} handleSelectionChange={handleSelectionChange} />
                        ))
                    }
                </div>
            </div>
        )
    }
}