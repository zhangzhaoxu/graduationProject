import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Card, Row, Col, Button, Pagination } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { competitionsActions } from '../../views/HomeRedux';
import './CollapseLeft.scss';

const Panel = Collapse.Panel;
@connect(
    state => {
        return {
            competitionsList: state.all.competitions.competitionsList.competitionsData
        }
    },
    (dispatch) => {
        return {
            changePage: bindActionCreators(competitionsActions.changePage, dispatch)
        }
    }
)
export default class MyCollapse extends Component {

    render() {
    
        let { competitionsList, changePage } = this.props;
        console.log(changePage);
        function onPageChange(index) {
            alert(index);
            changePage(index);
        }
        
        return (
            <Collapse defaultActiveKey={['pane0', 'pane1', 'pane2']}>
                {competitionsList.map((item, index) => {
                    let pageNum = item.pageNum;
                    return (
                        <Panel header={item.title} key={"pane"+index}>
                            {item.competitionsData.map((item, index) => {
                                return (
                                    <Col span="8" key={"paneItem"+index}>
                                        <Card bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                                <img alt="example" width="100%" src={item.imgUrl} />
                                            </div>
                                            <div className="custom-card">
                                                <h5>{item.title}</h5>
                                                <p>{item.des}</p>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                            <Pagination className="left-pagination" showQuickJumper onChange={() => {onPageChange(index)}} defaultCurrent={1} total={pageNum} />
                        </Panel>
                    )
                })}
            </Collapse>
        )
    }
}