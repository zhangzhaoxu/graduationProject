import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Card, Row, Col } from 'antd';
import './CollapseLeft.scss';

const Panel = Collapse.Panel;

export default class MyCollapse extends Component {
    render() {
        let { recommendsList } = this.props;
        return (
            <Collapse defaultActiveKey={['1', '2', '3']}>
                {
                    recommendsList.map((item, index) => (
                        <Panel header={item.title} key={index+1}>
                            <Row>
                                {
                                    item.recommendData.map((item, index) => (
                                        <Col span="12">
                                            <Card bodyStyle={{ padding: 0}}>
                                                <div className="custom-image">
                                                    <img alt="example" width="100%" src={item.imgUrl} />
                                                </div>
                                                <div className="custom-card">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.des}</p>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Panel>
                    ))
                }
            </Collapse>
        )
    }
}