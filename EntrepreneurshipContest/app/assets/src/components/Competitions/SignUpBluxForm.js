import React from 'react';
import { Button, Modal, Form, Input, Radio, Select, Upload, Icon } from 'antd';
import './SignUpBluxForm.scss';

const FormItem = Form.Item;
const Option = Select.Option;
let uuid = 0;

const SignUpBluxForm = Form.create()(
    (props) => {
        const { form } = props;
        const { getFieldDecorator, getFieldValue } = form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 14
            }
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            }
        };

        const remove = (k) => {
            const keys = form.getFieldValue('keys');
            if (keys.length === 1) {
                return;
            }

            form.setFieldsValue({
                keys: keys.filter(key => key !== k),
            });
        };

        const add = () => {
            uuid++;
            const keys = form.getFieldValue('keys');
            const nextKeys = keys.concat(uuid);
            form.setFieldsValue({
                keys: nextKeys,
            });
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

        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...formItemLayout}
                    label={'团员' + index}
                    required={false}
                    key= {k}
                >
                    {getFieldDecorator(`names-${k}`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                        }]
                    })(
                        <Input placeholder="团员姓名" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        disabled={keys.length === 1}
                        onClick={() => remove(k)}
                    />
                </FormItem>
            );
        });
        return (
            <Form>
                <FormItem {...formItemLayout} label="团名:">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请正确团名!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="负责人:">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请正确负责人!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="负责人手机"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入手机号码!' }],
                    })(
                        <Input addonBefore={prefixSelector} />
                    )}
                </FormItem>
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={add} style={{ width: '60%' }}>
                        <Icon type="plus" /> 添加团员信息
                    </Button>
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


export default SignUpBluxForm;
