import React from 'react';
import './PostInfo.scss';
import RightPane from '../Competitions/CollapseRight';
import PostCard from './PostCard';
import { Pagination, Modal, Form, Input, Switch, Button, Upload, Icon } from 'antd';
const FormItem = Form.Item;


class PostForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="回复内容:"
                >
                    {getFieldDecorator('input-number', { initialValue: 3 })(
                        <Input type="textarea" placeholder="请输入回复内容" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="图片上传:"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> 点击上传
                            </Button>
                        </Upload>
                    )}
                </FormItem>
            </Form>
        );
    }
}



export default class PostInfo extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true
        });
    };
    handleOk = (e) => {
        this.setState({
            visible: false
        });
    };
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    };
    render() {
        let { answerList, recommendList, onChange } = this.props;

        const WrappedForm = Form.create()(PostForm);

        function onPageChange() {
            onChange();
        }

        return (
            <div className="post-info">
                <div className="left-pane">
                    <div className="post-info-header">
                        <p className="author-question">
                            如何查询赛事信息
                        </p>
                    </div>
                    <div className="post-info-body">
                        {
                            answerList.map((item) => (
                                <PostCard item={item} />
                            ))
                        }
                    </div>
                    <Pagination style={{margin: "10px 0 10px 330px"}} showQuickJumper defaultCurrent={2} total={50} onChange={onPageChange} />
                    <Button style={{margin: "0 0 10px 620px"}} type="primary" onClick={this.showModal}>回复</Button>
                    <Modal title="你的回答" visible={this.state.visible}
                           onOk={this.handleOk} onCancel={this.handleCancel}
                    >
                        <WrappedForm />
                    </Modal>
                </div>
                <div className="right-pane">
                    <RightPane push={this.props.push} recommendsList={recommendList} />
                </div>
            </div>
        )
    }
}