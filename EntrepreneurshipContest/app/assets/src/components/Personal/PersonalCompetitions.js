import React, { Component } from 'react';
import { Tabs, Table, Icon, Button } from 'antd';
import './PersonalCompetitions.scss';

const TabPane = Tabs.TabPane;

const columns = [{
    title: '赛事名称',
    dataIndex: 'name',
    key: 'name',
    render: text => {
        return (
            <div className="cell-name">
                <p className="top">{text}</p>
                <p className="bottom">{text}</p>
            </div>
        )
    },
}, {
    title: '时限',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '主办方',
    dataIndex: 'sponsor',
    key: 'sponsor',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <div>
            <Button>赛事详情</Button><br />
            <Button className="bottom-btn">我的成绩</Button>
        </div>
    )
}];

const data = [{
    key: '1',
    name: 'John Brown',
    time: 32,
    sponsor: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    time: 42,
    sponsor: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    time: 32,
    sponsor: 'Sidney No. 1 Lake Park',
}];

export default class PersonalCompetitions extends Component {
    render() {
        return (
            <div className="personal-competitions">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="未开始" key="1">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="进行中" key="2">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="已完成" key="3">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}