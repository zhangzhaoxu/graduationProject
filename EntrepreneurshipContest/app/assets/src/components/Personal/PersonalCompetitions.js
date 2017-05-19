import React, { Component } from 'react';
import { Tabs, Table, Icon, Button, Modal } from 'antd';
import './PersonalCompetitions.scss';

const TabPane = Tabs.TabPane;


export default class PersonalCompetitions extends Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    render() {
        let { push } = this.props;

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
                    <Button onClick={() => {push('/competitions/signup')}}>赛事详情</Button><br />
                    <Button className="bottom-btn" onClick={() => { this.showModal() }}>我的成绩</Button>
                </div>
            )
        }];

        const data = [{
            key: '1',
            name: '数学大赛',
            time: 32,
            sponsor: '杭州电子科技大学'
        }, {
            key: '2',
            name: '算法大赛',
            time: 42,
            sponsor: '杭州电子科技大学'
        }, {
            key: '3',
            name: '创业大赛',
            time: 32,
            sponsor: '杭州电子科技大学'
        }];

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
                <Modal title="证书信息" visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}
                >
                    <img style={{width: "300px", margin: "auto", display: "inline-block"}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495220273300&di=444c9443267bcf92e41f6955b47d13cf&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F6ca5845cgde7b2e285778%26690" />
                </Modal>
            </div>
        )
    }
}