import React, { Component } from 'react';
import { Table,Collapse,Button,Modal,Upload,message,Icon,Form } from 'antd';
import SignUpModel from './SignUpModal';
const Panel = Collapse.Panel;
import './SignUp.scss';

const columns = [{
    title: '赛事信息',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '详细',
    className: 'column-money',
    dataIndex: 'money',
}, {
    title: '备注',
    dataIndex: 'address',
}];

const data = [{
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
}];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
};

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

export default class SignUp extends Component {
    state = {
        loading: false,
        visible: false,
        imageUrl: ''
    };
    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleSubmit = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    handleChange = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    };


    render() {
        const imageUrl = this.state.imageUrl;
  
        return (
            <div className="sign-up">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => '2016年首届GIX创新大赛'}
                    footer={() => '以上'}
                />
                <Collapse bordered={false} defaultActiveKey={['1','2','3']}>
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <Button onClick={this.showModal} className="right-btn" type="danger">去报名</Button>
                <SignUpModel
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

/*
 <Upload
 className="avatar-uploader"
 name="avatar"
 showUploadList={false}
 action="//jsonplaceholder.typicode.com/posts/"
 beforeUpload={beforeUpload}
 onChange={this.handleChange}
 >
 {
 imageUrl ?
 <img src={imageUrl} alt="" className="avatar" /> :
 <Icon type="plus" className="avatar-uploader-trigger" />
 }
 <h3 className="avatar-title">证件照上传</h3>
 </Upload>
 <Upload className="file-uploader" {...props}>
 <Button>
 <Icon type="upload" /> 附件上传
 </Button>
 </Upload>
 */