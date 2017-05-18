import React from 'react';
import {
    Form, Select, InputNumber, Switch, Input,
    Slider, Button, Upload, Icon, Cascader
} from 'antd';
import './PersonalInfo.scss';

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];


class BasicForm extends React.Component {
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
                    label="昵称:"
                >
                    <span className="ant-form-text">笨兜兜</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="真实姓名:"
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入真实姓名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Select"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: '请选择性别!' },
                        ],
                    })(
                        <Select placeholder="请选择性别:">
                            <Option value="man">男</Option>
                            <Option value="woman">女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="真实住址:"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: '请选择真实住址!' }],
                    })(
                        <Cascader options={residences} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教育情况:"
                >
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            { required: true, message: '请选择学历!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="请选择学历">
                            <Option value="red">研究生及以上</Option>
                            <Option value="green">本科</Option>
                            <Option value="blue">大专及以下</Option>
                        </Select>
                    )}
                </FormItem>
    
                <FormItem
                    {...formItemLayout}
                    label="紧急联系人:"
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入紧急联系人!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
    
                <FormItem
                    {...formItemLayout}
                    label="联系方式:"
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入联系方式!' }],
                    })(
                        <Input type="tel" placeholder="请输入联系方式" />
                    )}
                </FormItem>

                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedForm = Form.create()(BasicForm);

export default class PersonalInfo extends  React.Component {
    render() {
        return (
            <div className="personal-info">
                <WrappedForm />
            </div>
        )
    }
}