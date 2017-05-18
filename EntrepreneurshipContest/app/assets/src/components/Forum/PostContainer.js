import React,{ Component } from 'react'
import { Tabs } from 'antd';
import { Pagination } from 'antd';
import Post from './Post';
import './PostContainer.scss';
const TabPane = Tabs.TabPane;

export default class PostContainer extends Component {

    render() {
        let { postList, handlePageChange } = this.props;
        if (postList.length === 0) {
            return null;
        }
        return (
            <div className="card-container">
                <Tabs type="card">
                    {
                        postList.map((item, index) => (
                            <TabPane tab={item.title} key={index + 1}>
                                {
                                    item.posts.map((item, index) => (
                                        <Post key={'post'+index} postInfo={item} />
                                    ))
                                }
                                <Pagination className="post-pagination" showQuickJumper showSizeChanger onChange={handlePageChange} defaultCurrent={1} total={50} />
                            </TabPane>
                        ) )
                    }
                </Tabs>
            </div>
        )
    }
}