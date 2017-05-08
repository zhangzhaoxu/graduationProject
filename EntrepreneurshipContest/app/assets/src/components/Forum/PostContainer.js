import React,{ Component } from 'react'
import { Tabs } from 'antd';
import { Pagination } from 'antd';
import Post from './Post';
import './PostContainer.scss';
const TabPane = Tabs.TabPane;

export default class PostContainer extends Component {

    handlePageChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    render() {
        return (
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Tab 1" key="1">
                        <Post />
                        <Post />
                        <Post />
                        <Pagination className="post-pagination" showQuickJumper showSizeChanger onShowSizeChange={this.handlePageChange} defaultCurrent={1} total={50} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}