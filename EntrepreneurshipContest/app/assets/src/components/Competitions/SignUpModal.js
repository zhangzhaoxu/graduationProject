import React from 'react';
import { Button, Modal, Icon, Tabs } from 'antd';
import './SignUp.scss';
import SignUpSingleForm from './SignUpSingleForm';
import SignUpBluxForm from './SignUpBluxForm';
const TabPane = Tabs.TabPane;

export default class SignUpModal extends React.Component {
    render() {
        const { visible, onCancel, onSubmit } = this.props;
        return (
            <Modal
                visible={visible}
                title="报名表单"
                okText="Submit"
                onCancel={onCancel}
                onOk={onSubmit}
            >
                <Tabs defaultActiveKey="1">
                    <TabPane tab="单人报名" key="1">
                        <SignUpSingleForm />
                    </TabPane>
                    <TabPane tab="团队报名" key="2">
                        <SignUpBluxForm />
                    </TabPane>
                </Tabs>
            </Modal>
        )
    }
}
