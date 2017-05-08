import React, { Component } from 'react';
import { Steps, Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import './PersonalPhone.scss';

const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;

class ChangePhoneForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit} className="phone-form">
                <FormItem
                    {...formItemLayout}
                    label="验证方式"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: '请选择验证方式!' },
                        ],
                    })(
                        <Select placeholder="请选择验证方式">
                            <Option value="china">手机验证</Option>
                            <Option value="use">身份验证</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="绑定手机:"
                >
                    <Input style={{ border: "none"}} value="153****55499155" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="获取:"
                >
                    <Button>验证码</Button>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="验证码"
                >
                    {getFieldDecorator('remember', {
                        rules: [{ required: true, message: '请输入换绑手机号!' }],
                    })(
                        <Input type="number" placeholder="请输入验证码" />
                    )}
                    <Button type="primary" htmlType="submit" className="change-phone-button">
                        下一步
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

class ConfirmPhoneForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit} className="phone-form">
                <FormItem
                    {...formItemLayout}
                    label="换绑手机:"
                >
                    {getFieldDecorator('newPhone', {
                        rules: [{ required: true, message: '请输入换绑手机号!' }],
                    })(
                        <Input type="tel" placeholder="请输入换绑手机号" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="获取:"
                >
                    <Button>验证码</Button>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="验证码"
                >
                    {getFieldDecorator('remember', {
                        rules: [{ required: true, message: '请输入换绑手机号!' }],
                    })(
                        <Input type="number" placeholder="请输入验证码" />
                    )}
                    <Button type="primary" htmlType="submit" className="change-phone-button">
                        下一步
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedForm = Form.create()(ChangePhoneForm);
const WrappedConfirmForm = Form.create()(ConfirmPhoneForm);

export default class PersonalPhone extends Component {
    render() {
        return (
            <div className="personal-phone">
                <Steps className="phone-progress" current={1}>
                    <Step title="验证身份" />
                    <Step title="绑定手机" />
                    <Step title="完成" />
                </Steps>
                <p className="finished">换绑成功!</p>
            </div>
        )
    }
}