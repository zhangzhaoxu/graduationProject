import React from 'react';
import { Tabs } from 'antd';
import TabLi from './TabLi'
import './Tabs.scss';

const TabPane = Tabs.TabPane;

export default class MyTabs extends React.Component {
    
    render() {

        let testData = this.props.data;
        return (
            <div className="tabCon">
                <Tabs>
                    {
                        testData.map((item, index) => {
                            return (
                                <TabPane tab={item.title} key={index}>
                                    {item.list.map((item, index) => {
                                        item.id = index;
                                        return <TabLi {...item} />;
                                    })}
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
}

