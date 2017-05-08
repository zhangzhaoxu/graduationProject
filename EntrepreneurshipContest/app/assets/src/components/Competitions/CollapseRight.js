import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Card, Row, Col } from 'antd';
import './CollapseLeft.scss';

const Panel = Collapse.Panel;

export default class MyCollapse extends Component {
    render() {
        return (
            <Collapse defaultActiveKey={['1', '2', '3']}>
                <Panel header="This is panel header 1" key="1">
                    <Row>
                        <Col span="12">
                            <Card bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                    <h5>Europe Street beat</h5>
                                    <p>www.instagram.com</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                    <h5>Europe Street beat</h5>
                                    <p>www.instagram.com</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                    <h5>Europe Street beat</h5>
                                    <p>www.instagram.com</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                    <h5>Europe Street beat</h5>
                                    <p>www.instagram.com</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>测试测四测试</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>测试测四测试</p>
                </Panel>
            </Collapse>
        )
    }
}