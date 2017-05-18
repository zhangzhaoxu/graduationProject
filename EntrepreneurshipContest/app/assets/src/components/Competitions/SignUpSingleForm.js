import React from 'react';
import { Button, Modal, Form, Input, Radio, Select, Upload, Icon } from 'antd';
import './SignUpSingleForm.scss';

const FormItem = Form.Item;
const Option = Select.Option;

const SignUpCreateForm = Form.create()(
    (props) => {
        const { form } = props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 14
            }
        };

        const normFile = (e) => {
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );

        return (
            <Form layout="horizontal">
                <FormItem {...formItemLayout} label="姓名:">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请正确输入姓名!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="性别:">
                    {getFieldDecorator('sex', {
                        rules: [{ required: true, message: '请选择!' }]
                    })(
                        <Radio.Group>
                            <Radio value="men">男</Radio>
                            <Radio value="male">女</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号码!' }],
                    })(
                        <Input addonBefore={prefixSelector} />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="邮箱:">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入邮箱!' }],
                    })(
                        <Input type="email" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="证件类型:"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: '请选择!' },
                        ],
                    })(
                        <Select placeholder="请选择证件类型">
                            <Option value="idCard">身份证</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="证件号:">
                    {getFieldDecorator('certificate', {
                        rules: [{ required: true, message: '请输入!' }],
                    })(
                        <Input type="number" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: normFile
                        })(
                            <Upload.Dragger name="files" action="">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">点击或拖曳上传文件</p>
                                <p className="ant-upload-hint">支持单点多点上传</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>
            </Form>
        );
    }
);

export default SignUpCreateForm;
