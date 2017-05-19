import React, {Component} from 'react';
import {Collapse} from 'antd';
import {Card, Row, Col} from 'antd';
import './CollapseLeft.scss';

const Panel = Collapse.Panel;

export default class MyCollapse extends Component {
    
    handleTrans(id) {
        let {push} = this.props;
        
        if (id == 0 || id == 1) push('/competitions/signup');
        else push('/post');
    }
    
    render() {
        let {recommendsList, push} = this.props;
        return (
            <Collapse defaultActiveKey={['1', '2', '3']}>
                {
                    recommendsList.map((item, i) => (
                        <Panel header={item.title} key={i+1}>
                            <Row>
                                {
                                    item.recommendData.map((item, index) => (
                                        <Col span="12">
                                            <Card bodyStyle={{ padding: 0}} onClick={() => {
                                                this.handleTrans(i);
                                            }}>
                                                <div className="custom-image">
                                                    <img alt="example" width="100%" src={item.imgUrl}/>
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